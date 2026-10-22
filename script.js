const passwordInput = document.getElementById('password');
const toggleButton = document.querySelector('.toggle-password');
const form = document.getElementById('signInForm');

if (toggleButton && passwordInput) {
  const eyeIcon = `
    <svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
      <path d="M2 12s3.5-6 10-6 10 6 10 6-3.5 6-10 6S2 12 2 12Z"/>
      <circle cx="12" cy="12" r="3.25"/>
    </svg>
  `;

  const eyeOffIcon = `
    <svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
      <path d="M3 3l18 18"/>
      <path d="M10.58 10.58A2 2 0 0 0 13.42 13.42"/>
      <path d="M9.88 5.35A10.94 10.94 0 0 1 12 5c6.5 0 10 7 10 7a16.2 16.2 0 0 1-4.08 5.14M6.61 6.62A16.4 16.4 0 0 0 2 12s3.5 7 10 7a10.77 10.77 0 0 0 5.37-1.52"/>
    </svg>
  `;

  const updateIcon = () => {
    const isVisible = passwordInput.type === 'text';
    toggleButton.classList.toggle('is-visible', isVisible);
    toggleButton.innerHTML = isVisible ? eyeOffIcon : eyeIcon;
    toggleButton.setAttribute('aria-label', isVisible ? 'Hide password' : 'Show password');
  };

  updateIcon();

  toggleButton.addEventListener('click', () => {
    const isHidden = passwordInput.type === 'password';
    passwordInput.type = isHidden ? 'text' : 'password';
    updateIcon();
  });
}

if (form) {
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const email = document.getElementById('email')?.value || '';
    alert(`Sign in submitted for: ${email || 'your account'}`);
  });
}
