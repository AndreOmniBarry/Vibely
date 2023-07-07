// script.js
const modeSwitch = document.getElementById('modeSwitch');
const body = document.body;

modeSwitch.addEventListener('change', () => {
  body.classList.toggle('dark-mode');
  if (body.classList.contains('dark-mode')) {
    localStorage.setItem('mode', 'dark');
  } else {
    localStorage.setItem('mode', 'light');
  }
});

// Check if the user has a preferred mode saved in localStorage
const preferredMode = localStorage.getItem('mode');
if (preferredMode === 'dark') {
  body.classList.add('dark-mode');
  modeSwitch.checked = true;
}
