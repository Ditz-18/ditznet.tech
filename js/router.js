/* ============================================================
   DITZNET TECHNOLOGY — SPA Router (fetch-based)
   ============================================================ */

(function () {

  // ── Config ──────────────────────────────────────────────
  const PAGES = ['index.html', 'about.html', 'services.html', 'projects.html', 'contact.html'];
  const NAV_MAP = {
    'index.html'    : '[data-i18n="nav_home"]',
    'about.html'    : '[data-i18n="nav_about"]',
    'services.html' : '[data-i18n="nav_services"]',
    'projects.html' : '[data-i18n="nav_projects"]',
    'contact.html'  : '[data-i18n="nav_contact"]',
  };

  let currentPage = normalizePage(window.location.pathname);
  let isNavigating = false;

  // ── Helpers ─────────────────────────────────────────────
  function normalizePage(pathname) {
    const file = pathname.split('/').pop();
    return PAGES.includes(file) ? file : 'index.html';
  }

  function getMainContent(html) {
    const parser = new DOMParser();
    const doc = parser.parseFromString(html, 'text/html');
    const main = doc.querySelector('main');
    return main ? main.innerHTML : null;
  }

  function getPageTitle(html) {
    const match = html.match(/<title>(.*?)<\/title>/i);
    return match ? match[1] : document.title;
  }

  // ── Active State ─────────────────────────────────────────
  function setActiveNav(page) {
    // Navbar links
    document.querySelectorAll('.nav-links a').forEach(a => {
      a.classList.remove('active');
      const href = a.getAttribute('href');
      if (href === page) a.classList.add('active');
    });
    // Bottom nav
    document.querySelectorAll('.bottom-nav-item').forEach(a => {
      a.classList.remove('active');
      const href = a.getAttribute('href');
      if (href === page) a.classList.add('active');
    });
  }

  // ── Re-init page scripts after swap ──────────────────────
  function reinitPage(page) {
    // Re-init particles canvas
    const canvas = document.getElementById('particles-canvas');
    if (canvas && window._ditzParticlesInit) {
      window._ditzParticlesInit();
    }

    // Re-init main.js functions
    if (window.DitzNet) {
      window.DitzNet.applyLang(window.DitzNet.currentLang());
    }

    // Re-init scroll reveal & counters (from main.js globals)
    if (typeof initScrollReveal === 'function') initScrollReveal();
    if (typeof initCounters === 'function') initCounters();
    if (typeof initTilt === 'function') initTilt();

    // Contact page: load EmailJS script & contact.js
    if (page === 'contact.html') {
      initContactPage();
    }

    // FAQ
    initFAQ();

    // Services tabs
    if (typeof initServicesTabs === 'function') initServicesTabs();

    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  // ── FAQ Accordion ────────────────────────────────────────
  function injectFAQStyles() {
    if (document.getElementById('ditz-faq-style')) return;
    const style = document.createElement('style');
    style.id = 'ditz-faq-style';
    style.textContent = `
      .faq-answer {
        overflow: hidden;
        max-height: 0;
        opacity: 0;
        padding-top: 0;
        padding-left: 1.75rem;
        font-size: 0.88rem;
        color: var(--text-secondary);
        line-height: 1.7;
        transition: max-height 0.4s ease, opacity 0.3s ease, padding-top 0.3s ease;
      }
      .faq-answer.open {
        max-height: 500px;
        opacity: 1;
        padding-top: 1rem;
      }
      .faq-icon { transition: transform 0.3s ease; flex-shrink: 0; }
      .faq-icon.rotated { transform: rotate(180deg); }
      .faq-trigger { user-select: none; -webkit-user-select: none; cursor: pointer; }
    `;
    document.head.appendChild(style);
  }

  function initFAQ() {
    injectFAQStyles();

    document.querySelectorAll('.faq-item').forEach(item => {
      const trigger = item.querySelector('.faq-trigger');
      const answer  = item.querySelector('.faq-answer');
      if (!trigger || !answer) return;

      // Reset inline style, biarkan CSS yang atur default tertutup
      answer.style.maxHeight = '';
      answer.classList.remove('open');

      // Hindari double-bind dengan flag
      if (trigger.dataset.faqBound === '1') return;
      trigger.dataset.faqBound = '1';

      trigger.addEventListener('click', function (e) {
        e.stopPropagation();

        const thisAnswer = item.querySelector('.faq-answer');
        const thisIcon   = item.querySelector('.faq-icon');
        const isOpen     = thisAnswer.classList.contains('open');

        // Tutup semua
        document.querySelectorAll('.faq-item').forEach(other => {
          other.querySelector('.faq-answer')?.classList.remove('open');
          other.querySelector('.faq-icon')?.classList.remove('rotated');
        });

        // Buka yang diklik jika sebelumnya tertutup
        if (!isOpen) {
          thisAnswer.classList.add('open');
          if (thisIcon) thisIcon.classList.add('rotated');
        }
      });
    });
  }

  // ── Contact page init ────────────────────────────────────
  function initContactPage() {
    // Load EmailJS if not already loaded
    if (typeof emailjs === 'undefined') {
      const ejsScript = document.createElement('script');
      ejsScript.src = 'https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js';
      ejsScript.onload = () => loadContactScript();
      document.head.appendChild(ejsScript);
    } else {
      loadContactScript();
    }
  }

  function loadContactScript() {
    // Remove old contact.js if any, then reload
    const old = document.getElementById('contact-js');
    if (old) old.remove();
    const s = document.createElement('script');
    s.id = 'contact-js';
    s.src = 'js/contact.js';
    document.body.appendChild(s);
  }

  // ── Navigate ─────────────────────────────────────────────
  async function navigate(page, pushState = true) {
    if (isNavigating || page === currentPage) return;
    if (!PAGES.includes(page)) return;

    isNavigating = true;

    const main = document.querySelector('main');
    if (!main) { isNavigating = false; return; }

    // Fade out
    main.style.transition = 'opacity 0.2s ease, transform 0.2s ease';
    main.style.opacity = '0';
    main.style.transform = 'translateY(10px)';

    try {
      const res  = await fetch(page, { cache: 'no-cache' });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const html = await res.text();

      const newContent = getMainContent(html);
      const newTitle   = getPageTitle(html);

      if (!newContent) throw new Error('No <main> found in fetched page');

      // Swap content
      main.innerHTML = newContent;
      document.title = newTitle;

      // Update URL
      if (pushState) {
        history.pushState({ page }, newTitle, page);
      }

      currentPage = page;
      setActiveNav(page);

      // Fade in
      requestAnimationFrame(() => {
        main.style.opacity = '1';
        main.style.transform = 'translateY(0)';
        setTimeout(() => {
          main.style.transition = '';
          main.style.opacity = '';
          main.style.transform = '';
        }, 250);
      });

      reinitPage(page);

    } catch (err) {
      console.warn('[Router] fetch failed, falling back to href:', err);
      window.location.href = page;
    } finally {
      isNavigating = false;
    }
  }

  // ── Intercept all internal nav links ─────────────────────
  function interceptLinks() {
    document.addEventListener('click', function (e) {
      const a = e.target.closest('a');
      if (!a) return;

      const href = a.getAttribute('href');
      if (!href) return;

      // Skip external, anchor-only, or non-page links
      if (href.startsWith('http') || href.startsWith('//') ||
          href.startsWith('#')    || href.startsWith('mailto') ||
          href.startsWith('tel')  || href.startsWith('javascript')) return;

      const page = href.split('?')[0].split('#')[0];
      if (!PAGES.includes(page)) return;

      e.preventDefault();
      navigate(page);
    });
  }

  // ── Browser Back / Forward ───────────────────────────────
  window.addEventListener('popstate', (e) => {
    const page = e.state?.page || normalizePage(window.location.pathname);
    navigate(page, false);
  });

  // ── Init ─────────────────────────────────────────────────
  function init() {
    // Push initial state
    history.replaceState({ page: currentPage }, document.title, window.location.href);

    setActiveNav(currentPage);
    interceptLinks();
    initFAQ(); // Init FAQ on first load (contact page)

    // Init tilt for index hero card (first load)
    if (typeof initTilt === 'function') initTilt();
  }

  // Wait for DOM
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();