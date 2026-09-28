// ===== Footer year =====
document.getElementById('year').textContent = new Date().getFullYear();

// ===== Dark / Light theme toggle (Phase 2) =====
const themeToggle = document.getElementById('themeToggle');
const iconSun = document.getElementById('iconSun');
const iconMoon = document.getElementById('iconMoon');
const body = document.body;

function applyTheme(isDark) {
  body.classList.toggle('dark', isDark);
  iconSun.style.display = isDark ? 'none' : 'block';
  iconMoon.style.display = isDark ? 'block' : 'none';
  localStorage.setItem('prodesk-theme', isDark ? 'dark' : 'light');
}

// Respect saved preference, otherwise respect system preference
const saved = localStorage.getItem('prodesk-theme');
const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
applyTheme(saved ? saved === 'dark' : systemPrefersDark);

themeToggle.addEventListener('click', () => {
  applyTheme(!body.classList.contains('dark'));
});

// ===== Mobile hamburger menu (Phase 1 requirement) =====
const burgerBtn = document.getElementById('burgerBtn');
const navLinks = document.getElementById('navLinks');

burgerBtn.addEventListener('click', () => {
  const isOpen = navLinks.classList.toggle('open');
  burgerBtn.classList.toggle('open', isOpen);
  burgerBtn.setAttribute('aria-expanded', isOpen);
});

// Close mobile menu after clicking a link
navLinks.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
    burgerBtn.classList.remove('open');
    burgerBtn.setAttribute('aria-expanded', false);
  });
});
