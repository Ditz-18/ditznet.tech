/* ============================================================
   DITZNET TECHNOLOGY — Main JavaScript
   ============================================================ */

// ── Language Data ──────────────────────────────────────────
const i18n = {
  id: {
    // Nav
    nav_home: 'Beranda',
    nav_about: 'Tentang',
    nav_services: 'Layanan',
    nav_projects: 'Proyek',
    nav_contact: 'Kontak',

    // Hero
    hero_tag: 'Teknologi & Inovasi',
    hero_title_1: 'Solusi Digital',
    hero_title_2: 'Terpadu untuk',
    hero_title_3: 'Bisnis Modern',
    hero_desc: 'DITZNET TECHNOLOGY menghadirkan layanan teknologi informasi, pengembangan web, jaringan, logistik, dan event organizer — semua dalam satu ekosistem terpadu.',
    hero_btn_services: 'Lihat Layanan',
    hero_btn_contact: 'Hubungi Kami',
    hero_stat_1: 'Proyek Selesai',
    hero_stat_2: 'Klien Puas',
    hero_stat_3: 'Tahun Berdiri',
    hero_float_1: 'Aktif & Beroperasi',
    hero_float_2: 'Berbasis Cirebon',

    // About (preview on homepage)
    about_label: 'Tentang Kami',
    about_title_1: 'Kami Menggerakkan',
    about_title_2: 'Ekosistem Digital',
    about_desc: 'Didirikan pada 18 Oktober 2024, DITZNET TECHNOLOGY hadir sebagai mitra teknologi dan bisnis yang menyeluruh. Kami percaya bahwa inovasi digital bukan hanya milik perusahaan besar — setiap bisnis berhak mendapatkan solusi teknologi terbaik.',
    about_val_1_title: 'Inovatif',
    about_val_1_desc: 'Selalu menghadirkan solusi terkini yang relevan dengan kebutuhan era digital.',
    about_val_2_title: 'Terpercaya',
    about_val_2_desc: 'Komitmen penuh terhadap kualitas dan kepuasan klien dalam setiap proyek.',
    about_val_3_title: 'Terpadu',
    about_val_3_desc: 'Layanan lengkap dari teknologi hingga event, semua di bawah satu atap.',
    about_val_4_title: 'Lokal & Global',
    about_val_4_desc: 'Akar yang kuat di Cirebon dengan visi dan kapabilitas skala nasional.',
    about_since: 'Berdiri Sejak',
    about_btn: 'Selengkapnya',

    // Services
    services_label: 'Layanan Kami',
    services_title_1: 'Apa yang Bisa',
    services_title_2: 'Kami Lakukan',
    services_desc: 'Rangkaian layanan kami dirancang untuk menjawab setiap tantangan bisnis Anda — dari infrastruktur teknologi hingga pengalaman tak terlupakan.',
    svc_net_name: 'Networking & IT',
    svc_net_desc: 'Infrastruktur jaringan profesional termasuk WiFi hotspot voucher, instalasi LAN, dan solusi konektivitas bisnis.',
    svc_net_f1: 'WiFi Hotspot & Voucher',
    svc_net_f2: 'Instalasi Jaringan LAN/WAN',
    svc_net_f3: 'Mikrotik & Router Setup',
    svc_net_f4: 'Monitoring & Maintenance',
    svc_web_name: 'Web Development',
    svc_web_desc: 'Pengembangan aplikasi web modern yang responsif, cepat, dan sesuai kebutuhan bisnis Anda.',
    svc_web_f1: 'Website Company Profile',
    svc_web_f2: 'Aplikasi Web Kustom',
    svc_web_f3: 'UI/UX Design Modern',
    svc_web_f4: 'Maintenance & Hosting',
    svc_log_name: 'Logistik & Warehouse',
    svc_log_desc: 'Pengelolaan gudang dan distribusi yang efisien dengan sistem manajemen terintegrasi.',
    svc_log_f1: 'Manajemen Stok & Inventori',
    svc_log_f2: 'Sistem Warehouse Digital',
    svc_log_f3: 'Distribusi & Pengiriman',
    svc_log_f4: 'Laporan & Analitik',
    svc_eo_name: 'Event Organizer',
    svc_eo_desc: 'Perencanaan dan pelaksanaan event profesional — dari pernikahan mewah hingga gathering korporat.',
    svc_eo_f1: 'Wedding & Resepsi',
    svc_eo_f2: 'Event Korporat & Gathering',
    svc_eo_f3: 'Event Planning & Konsultasi',
    svc_eo_f4: 'Dekorasi & Koordinasi',
    tab_all: 'Semua',
    tab_tech: 'Teknologi',
    tab_event: 'Event',
    tab_logistic: 'Logistik',

    // Projects
    projects_label: 'Proyek',
    projects_title_1: 'Karya yang',
    projects_title_2: 'Berbicara',
    projects_desc: 'Beberapa produk digital yang telah kami bangun dan kembangkan untuk menjawab kebutuhan nyata pengguna.',
    proj_btn: 'Kunjungi',

    // Founder
    founder_label: 'Founder',
    founder_title_1: 'Di Balik',
    founder_title_2: 'DITZNET',
    founder_role: 'Founder & CEO, DITZNET TECHNOLOGY',
    founder_bio: 'Bagas Aditya adalah seorang teknolog dan entrepreneur muda yang mendirikan DITZNET TECHNOLOGY dengan visi membangun ekosistem layanan digital yang menyeluruh dan terjangkau. Dengan passion di bidang IT dan kreativitas tanpa batas, ia memimpin tim untuk menghadirkan solusi inovatif bagi bisnis dan masyarakat luas.',

    // Contact
    contact_label: 'Kontak',
    contact_title_1: 'Mari Berkolaborasi',
    contact_title_2: 'Bersama',
    contact_desc: 'Punya proyek atau pertanyaan? Tim kami siap membantu mewujudkan ide Anda menjadi kenyataan.',
    contact_wa: 'WhatsApp',
    contact_ig: 'Instagram',
    contact_email_label: 'Email',
    form_title: 'Kirim Pesan',
    form_subtitle: 'Isi form di bawah dan kami akan membalas sesegera mungkin.',
    form_name: 'Nama Lengkap',
    form_email: 'Alamat Email',
    form_subject: 'Subjek',
    form_message: 'Pesan',
    form_name_ph: 'Masukkan nama Anda',
    form_email_ph: 'email@contoh.com',
    form_subject_ph: 'Topik pesan Anda',
    form_message_ph: 'Tulis pesan Anda di sini...',
    form_btn: 'Kirim Pesan',
    form_sending: 'Mengirim...',

    // Footer
    footer_desc: 'Ekosistem layanan teknologi dan bisnis terpadu — networking, web, logistik, dan event organizer, semua dalam satu mitra terpercaya.',
    footer_links: 'Tautan',
    footer_services: 'Layanan',
    footer_contact: 'Kontak',
    footer_rights: 'Seluruh hak dilindungi.',
    footer_made: 'Dibuat dengan',
    footer_for: 'untuk Indonesia',
  },
  en: {
    nav_home: 'Home',
    nav_about: 'About',
    nav_services: 'Services',
    nav_projects: 'Projects',
    nav_contact: 'Contact',

    hero_tag: 'Technology & Innovation',
    hero_title_1: 'Unified Digital',
    hero_title_2: 'Solutions for',
    hero_title_3: 'Modern Business',
    hero_desc: 'DITZNET TECHNOLOGY delivers IT services, web development, networking, logistics, and event organizing — all within one integrated ecosystem.',
    hero_btn_services: 'Our Services',
    hero_btn_contact: 'Contact Us',
    hero_stat_1: 'Projects Done',
    hero_stat_2: 'Happy Clients',
    hero_stat_3: 'Year Founded',
    hero_float_1: 'Active & Operating',
    hero_float_2: 'Based in Cirebon',

    about_label: 'About Us',
    about_title_1: 'We Power',
    about_title_2: 'Digital Ecosystems',
    about_desc: 'Founded on October 18, 2024, DITZNET TECHNOLOGY stands as a comprehensive technology and business partner. We believe that digital innovation is not only for large corporations — every business deserves the best technology solutions.',
    about_val_1_title: 'Innovative',
    about_val_1_desc: 'Delivering cutting-edge solutions relevant to the demands of the digital era.',
    about_val_2_title: 'Trustworthy',
    about_val_2_desc: 'Full commitment to quality and client satisfaction in every project we undertake.',
    about_val_3_title: 'Integrated',
    about_val_3_desc: 'Complete services from technology to events, all under one roof.',
    about_val_4_title: 'Local & Global',
    about_val_4_desc: 'Strong roots in Cirebon with a national vision and capability.',
    about_since: 'Founded Since',
    about_btn: 'Learn More',

    services_label: 'Our Services',
    services_title_1: 'What We',
    services_title_2: 'Can Do',
    services_desc: 'Our range of services is designed to address every business challenge — from technology infrastructure to unforgettable experiences.',
    svc_net_name: 'Networking & IT',
    svc_net_desc: 'Professional network infrastructure including WiFi hotspot vouchers, LAN installation, and business connectivity solutions.',
    svc_net_f1: 'WiFi Hotspot & Vouchers',
    svc_net_f2: 'LAN/WAN Network Installation',
    svc_net_f3: 'Mikrotik & Router Setup',
    svc_net_f4: 'Monitoring & Maintenance',
    svc_web_name: 'Web Development',
    svc_web_desc: 'Modern responsive web application development that is fast and tailored to your business needs.',
    svc_web_f1: 'Company Profile Website',
    svc_web_f2: 'Custom Web Applications',
    svc_web_f3: 'Modern UI/UX Design',
    svc_web_f4: 'Maintenance & Hosting',
    svc_log_name: 'Logistics & Warehouse',
    svc_log_desc: 'Efficient warehouse management and distribution with an integrated management system.',
    svc_log_f1: 'Stock & Inventory Management',
    svc_log_f2: 'Digital Warehouse System',
    svc_log_f3: 'Distribution & Delivery',
    svc_log_f4: 'Reports & Analytics',
    svc_eo_name: 'Event Organizer',
    svc_eo_desc: 'Professional event planning and execution — from luxurious weddings to corporate gatherings.',
    svc_eo_f1: 'Wedding & Reception',
    svc_eo_f2: 'Corporate Events & Gatherings',
    svc_eo_f3: 'Event Planning & Consultation',
    svc_eo_f4: 'Decoration & Coordination',
    tab_all: 'All',
    tab_tech: 'Technology',
    tab_event: 'Event',
    tab_logistic: 'Logistics',

    projects_label: 'Projects',
    projects_title_1: 'Works that',
    projects_title_2: 'Speak',
    projects_desc: 'Digital products we have built and developed to address real user needs.',
    proj_btn: 'Visit',

    founder_label: 'Founder',
    founder_title_1: 'The Mind',
    founder_title_2: 'Behind DITZNET',
    founder_role: 'Founder & CEO, DITZNET TECHNOLOGY',
    founder_bio: 'Bagas Aditya is a young technologist and entrepreneur who founded DITZNET TECHNOLOGY with a vision to build a comprehensive and affordable digital service ecosystem. With a passion for IT and boundless creativity, he leads his team to deliver innovative solutions for businesses and communities.',

    contact_label: 'Contact',
    contact_title_1: "Let's Collaborate",
    contact_title_2: 'Together',
    contact_desc: 'Have a project or question? Our team is ready to help bring your ideas to life.',
    contact_wa: 'WhatsApp',
    contact_ig: 'Instagram',
    contact_email_label: 'Email',
    form_title: 'Send a Message',
    form_subtitle: "Fill out the form below and we'll get back to you as soon as possible.",
    form_name: 'Full Name',
    form_email: 'Email Address',
    form_subject: 'Subject',
    form_message: 'Message',
    form_name_ph: 'Enter your name',
    form_email_ph: 'email@example.com',
    form_subject_ph: 'Your message topic',
    form_message_ph: 'Write your message here...',
    form_btn: 'Send Message',
    form_sending: 'Sending...',

    footer_desc: 'An integrated technology and business service ecosystem — networking, web, logistics, and event organizer, all in one trusted partner.',
    footer_links: 'Links',
    footer_services: 'Services',
    footer_contact: 'Contact',
    footer_rights: 'All rights reserved.',
    footer_made: 'Made with',
    footer_for: 'for Indonesia',
  }
};

// ── State ──────────────────────────────────────────────────
let currentLang = localStorage.getItem('ditznet_lang') || 'id';

// ── DOM Ready ──────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  initNavbar();
  initBottomNav();
  initLangToggle();
  initScrollReveal();
  initCounters();
  applyLang(currentLang);
});

// ── Navbar Scroll Effect ───────────────────────────────────
function initNavbar() {
  const navbar = document.getElementById('navbar');
  if (!navbar) return;
  const onScroll = () => {
    navbar.classList.toggle('scrolled', window.scrollY > 20);
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
}

// ── Bottom Navigation ──────────────────────────────────────
function initBottomNav() {
  const items = document.querySelectorAll('.bottom-nav-item');
  items.forEach(item => {
    item.addEventListener('click', function(e) {
      // Ripple
      const ripple = document.createElement('span');
      ripple.classList.add('bottom-nav-ripple');
      ripple.style.left = '50%';
      ripple.style.top = '50%';
      this.appendChild(ripple);
      setTimeout(() => ripple.remove(), 600);
    });
  });

  // Set active based on current page
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  items.forEach(item => {
    const href = item.getAttribute('href');
    if (href && (href === currentPage || (currentPage === '' && href === 'index.html'))) {
      item.classList.add('active');
    }
  });
}

// ── Language Toggle ────────────────────────────────────────
function initLangToggle() {
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const lang = btn.dataset.lang;
      if (lang === currentLang) return;
      currentLang = lang;
      localStorage.setItem('ditznet_lang', lang);
      applyLang(lang);
      document.querySelectorAll('.lang-btn').forEach(b => b.classList.toggle('active', b.dataset.lang === lang));
    });
  });
  // Set initial state
  document.querySelectorAll('.lang-btn').forEach(b => b.classList.toggle('active', b.dataset.lang === currentLang));
}

function applyLang(lang) {
  const t = i18n[lang];
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    if (t[key] !== undefined) {
      if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
        el.placeholder = t[key];
      } else {
        el.textContent = t[key];
      }
    }
  });
  document.querySelectorAll('[data-i18n-html]').forEach(el => {
    const key = el.dataset.i18nHtml;
    if (t[key] !== undefined) el.innerHTML = t[key];
  });
  document.documentElement.lang = lang;
}

// ── Scroll Reveal ──────────────────────────────────────────
function initScrollReveal() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

  document.querySelectorAll('.reveal, .stagger-item').forEach(el => observer.observe(el));
}

// ── Number Counters ────────────────────────────────────────
function initCounters() {
  const counters = document.querySelectorAll('[data-count]');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateCount(entry.target);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });
  counters.forEach(c => observer.observe(c));
}

function animateCount(el) {
  const target = parseInt(el.dataset.count);
  const suffix = el.dataset.suffix || '';
  const duration = 1500;
  const start = performance.now();
  const update = (now) => {
    const progress = Math.min((now - start) / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    el.textContent = Math.floor(eased * target) + suffix;
    if (progress < 1) requestAnimationFrame(update);
  };
  requestAnimationFrame(update);
}

// ── Toast Notification ─────────────────────────────────────
function showToast(message, icon = 'fa-check-circle') {
  const existing = document.querySelector('.toast');
  if (existing) existing.remove();

  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.innerHTML = `<i class="fas ${icon}"></i><span>${message}</span>`;
  document.body.appendChild(toast);
  setTimeout(() => toast.classList.add('show'), 50);
  setTimeout(() => {
    toast.classList.remove('show');
    setTimeout(() => toast.remove(), 400);
  }, 3500);
}

// ── Tilt Card Effect ───────────────────────────────────────
function initTilt() {
  document.querySelectorAll('.tilt-card').forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width - 0.5) * 10;
      const y = ((e.clientY - rect.top) / rect.height - 0.5) * -10;
      card.style.transform = `perspective(800px) rotateX(${y}deg) rotateY(${x}deg) translateY(-4px)`;
    });
    card.addEventListener('mouseleave', () => {
      card.style.transform = '';
    });
  });
}

// ── Export helpers for other scripts ──────────────────────
window.DitzNet = { showToast, applyLang, currentLang: () => currentLang, i18n, initTilt };

// Expose re-initable functions for SPA router
window.initScrollReveal = initScrollReveal;
window.initCounters     = initCounters;
window.initTilt         = initTilt;