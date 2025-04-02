function initializeSettings() {
  const navItems = document.querySelectorAll('.settings__nav-item');
  const sections = document.querySelectorAll('.settings__section');

  if (!navItems.length || !sections.length) {
    console.error("Settings navigation items or sections not found.");
    return;
  }

  navItems.forEach(item => {
    item.addEventListener('click', () => {
      const targetId = item.getAttribute('data-target');

      navItems.forEach(nav => nav.classList.remove('active'));
      sections.forEach(section => section.classList.remove('active'));

      item.classList.add('active');

      const targetSection = document.getElementById(targetId);
      if (targetSection) {
        targetSection.classList.add('active');
      }
    });
  });

  const themeButtons = document.querySelectorAll('.theme-btn');
  themeButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      themeButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const selectedTheme = btn.getAttribute('data-theme');
      document.documentElement.setAttribute('data-theme', selectedTheme);
    });
  });

  const fontSlider = document.querySelector('.font-size-slider input');
  const fontSizeValue = document.querySelector('.font-size-value');
  if (fontSlider && fontSizeValue) {
    fontSlider.addEventListener('input', (e) => {
      const size = e.target.value;
      fontSizeValue.textContent = `${size}px`;
      document.documentElement.style.fontSize = `${size}px`;
    });
  }
}