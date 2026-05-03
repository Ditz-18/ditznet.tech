/* ============================================================
   DITZNET TECHNOLOGY — Contact Form (EmailJS)
   ============================================================ */

// ── EmailJS Configuration ──────────────────────────────────
// TODO: Isi dengan konfigurasi EmailJS Anda setelah setup
const EMAILJS_CONFIG = {
  publicKey: 'JaDQM6sufiijf4zWZ',       // TODO: isi Public Key dari EmailJS > Account > General
  serviceId: 'service_w4ikj4l',
  templateId: 'template_jzu6noj',
};

// ── Init EmailJS ───────────────────────────────────────────
(function () {
  if (typeof emailjs !== 'undefined') {
    emailjs.init({ publicKey: EMAILJS_CONFIG.publicKey });
  }
})();

// ── Form Handler ───────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('contact-form');
  if (!form) return;

  form.addEventListener('submit', handleSubmit);

  // Real-time validation
  form.querySelectorAll('.form-control').forEach(input => {
    input.addEventListener('blur', () => validateField(input));
    input.addEventListener('input', () => clearError(input));
  });
});

async function handleSubmit(e) {
  e.preventDefault();
  const form = e.target;

  if (!validateForm(form)) return;

  const btn = form.querySelector('.btn-submit');
  const lang = window.DitzNet ? window.DitzNet.currentLang() : 'id';
  const t = window.DitzNet ? window.DitzNet.i18n[lang] : {};

  // Loading state
  btn.disabled = true;
  btn.innerHTML = `<i class="fas fa-spinner fa-spin"></i> <span>${t.form_sending || 'Mengirim...'}</span>`;

  const params = {
    from_name: form.querySelector('#form-name').value.trim(),
    from_email: form.querySelector('#form-email').value.trim(),
    subject: form.querySelector('#form-subject').value.trim(),
    message: form.querySelector('#form-message').value.trim(),
    to_name: 'DITZNET TECHNOLOGY',
    reply_to: form.querySelector('#form-email').value.trim(),
  };

  try {
    if (typeof emailjs === 'undefined') {
      throw new Error('EmailJS not loaded');
    }
    await emailjs.send(EMAILJS_CONFIG.serviceId, EMAILJS_CONFIG.templateId, params);
    handleSuccess(form, btn, lang);
  } catch (err) {
    console.error('EmailJS error:', err);
    handleError(btn, lang);
  }
}

function handleSuccess(form, btn, lang) {
  form.reset();
  btn.disabled = false;
  btn.innerHTML = `<i class="fas fa-check"></i> <span>${lang === 'en' ? 'Message Sent!' : 'Pesan Terkirim!'}</span>`;
  btn.style.background = 'linear-gradient(135deg, #22c55e, #16a34a)';
  if (window.DitzNet) window.DitzNet.showToast(
    lang === 'en' ? 'Message sent successfully!' : 'Pesan berhasil terkirim!',
    'fa-check-circle'
  );
  setTimeout(() => {
    btn.innerHTML = `<i class="fas fa-paper-plane"></i> <span>${lang === 'en' ? 'Send Message' : 'Kirim Pesan'}</span>`;
    btn.style.background = '';
  }, 4000);
}

function handleError(btn, lang) {
  btn.disabled = false;
  btn.innerHTML = `<i class="fas fa-exclamation-circle"></i> <span>${lang === 'en' ? 'Failed to Send' : 'Gagal Mengirim'}</span>`;
  btn.style.background = 'linear-gradient(135deg, #ef4444, #dc2626)';
  if (window.DitzNet) window.DitzNet.showToast(
    lang === 'en' ? 'Failed to send. Please try again.' : 'Gagal mengirim. Silakan coba lagi.',
    'fa-exclamation-circle'
  );
  setTimeout(() => {
    btn.innerHTML = `<i class="fas fa-paper-plane"></i> <span>${lang === 'en' ? 'Send Message' : 'Kirim Pesan'}</span>`;
    btn.style.background = '';
  }, 4000);
}

// ── Validation ─────────────────────────────────────────────
function validateForm(form) {
  let valid = true;
  form.querySelectorAll('.form-control[required]').forEach(input => {
    if (!validateField(input)) valid = false;
  });
  return valid;
}

function validateField(input) {
  clearError(input);
  const val = input.value.trim();
  let error = '';

  if (input.hasAttribute('required') && !val) {
    error = input.dataset.lang === 'en' ? 'This field is required.' : 'Field ini wajib diisi.';
  } else if (input.type === 'email' && val && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val)) {
    error = 'Format email tidak valid.';
  }

  if (error) {
    showFieldError(input, error);
    return false;
  }
  return true;
}

function showFieldError(input, msg) {
  input.style.borderColor = '#ef4444';
  const err = document.createElement('span');
  err.className = 'field-error';
  err.style.cssText = 'display:block;font-size:0.75rem;color:#ef4444;margin-top:0.3rem;';
  err.textContent = msg;
  input.parentNode.appendChild(err);
}

function clearError(input) {
  input.style.borderColor = '';
  const err = input.parentNode.querySelector('.field-error');
  if (err) err.remove();
}