/* AmomosFX starter site: no tracking, no cookies, no account system. */
(() => {
  const menuButton = document.querySelector('.menu-toggle');
  const nav = document.querySelector('#primary-nav');
  if (menuButton && nav) {
    menuButton.addEventListener('click', () => {
      const isOpen = menuButton.getAttribute('aria-expanded') === 'true';
      menuButton.setAttribute('aria-expanded', String(!isOpen));
      nav.classList.toggle('is-open', !isOpen);
    });
  }

  document.querySelectorAll('[data-year]').forEach((el) => {
    el.textContent = new Date().getFullYear();
  });

  /*
   * IMPORTANT:
   * Replace the empty string below ONLY with your actual approved Deriv referral URL.
   * Do not use a guessed URL, password, API token, or private credential here.
   */
  const APPROVED_DERIV_REFERRAL_URL = '';

  if (APPROVED_DERIV_REFERRAL_URL.startsWith('https://')) {
    document.querySelectorAll('[data-deriv-link]').forEach((link) => {
      link.href = APPROVED_DERIV_REFERRAL_URL;
      link.classList.remove('button-disabled');
      link.classList.add('button-gold');
      link.removeAttribute('aria-disabled');
      link.removeAttribute('tabindex');
      link.textContent = 'Explore trading with our partner ↗';
      link.target = '_blank';
      link.rel = 'noopener noreferrer sponsored';
    });
  }
})();