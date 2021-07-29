import menuTemplate from './partials/card.hbs';
import menuItems from './menu.json';
import './sass/main';

function setTheme(trigger) {
  const theme = window.localStorage.getItem('theme') || 'ligth-theme';
  document.body.classList.add(theme);
  trigger.checked = theme === 'dark-theme';
}

const container = document.querySelector('.js-menu');
const items = createMenu(menuItems);

container.innerHTML = items;

function createMenu(data) {
  return data.map(menuTemplate).join('');
}

const trigger = document.querySelector('.theme-switch__toggle');
setTheme(trigger);

function toggleTheme(event) {
  if (event.target.checked) {
    document.body.classList.remove('light-theme');
    document.body.classList.add('dark-theme');
    window.localStorage.setItem('theme', 'dark-theme');
  } else {
    document.body.classList.remove('dark-theme');
    document.body.classList.add('light-theme');
    window.localStorage.setItem('theme', 'light-theme');
  }
}

trigger.addEventListener('change', toggleTheme);
