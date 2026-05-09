document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.querySelector('.menu-toggle');
  const menu = document.querySelector('.menu');
  if (toggle && menu) {
    toggle.addEventListener('click', () => {
      menu.classList.toggle('open');
      const expanded = menu.classList.contains('open');
      toggle.setAttribute('aria-expanded', expanded);
    });
  }

  const form = document.querySelector('form[data-contact]');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const status = form.querySelector('.form-status');
      if (status) {
        status.textContent = 'Mesajınız alındı. En kısa sürede size dönüş yapacağız.';
        status.style.color = '#1f3460';
      }
      form.reset();
    });
  }
});
