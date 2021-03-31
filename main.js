const options = new Map();

window.addEventListener("DOMContentLoaded", function () {
  initThemeSwitcher();
  initEventListeners();
  // Settings default values
  setLocalStorageItem(
    "lightTheme",
    !matchMedia("(prefers-color-scheme: dark)").matches
  );
  initSettingsButton();
});

function initEventListeners() {
  document.getElementById('theme-switcher-option-system').addEventListener('change', () => {
    localStorage.removeItem('theme');
    document.body.removeAttribute('data-theme');
  });
  document.getElementById('theme-switcher-option-light').addEventListener('change', () => {
    localStorage.setItem('theme', 'light');
    document.body.setAttribute('data-theme', 'light');
  });
  document.getElementById('theme-switcher-option-dark').addEventListener('change', () => {
    localStorage.setItem('theme', 'dark');
    document.body.setAttribute('data-theme', 'dark');
  });
}

function initThemeSwitcher() {
  const entry = localStorage.getItem('theme');
  if (entry === null) {
    document.getElementById('theme-switcher-option-system').checked = true;
    return;
  }
  if (entry === 'light') {
    document.getElementById('theme-switcher-option-light').checked = true;
    document.body.setAttribute('data-theme', 'light');
    return
  } 
  document.getElementById('theme-switcher-option-dark').checked = true;
  document.body.setAttribute('data-theme', 'dark');
  
  /* const themeSwitcherCheckBox = document.querySelector(
    ".checkbox--theme-switcher"
  );
  options.set("lightTheme", themeSwitcherCheckBox);
  themeSwitcherCheckBox.addEventListener("click", (clickEvent) => {
    clickEvent.preventDefault();
    console.log(clickEvent.target);
    changeLocalStorageItem("lightTheme", clickEvent.target.checked);
  }); */
}

function initSettingsButton() {
  const settingsButton = document.querySelector(".settings"),
    settingsFlyIn = document.querySelector("aside");

  settingsButton.addEventListener("click", () =>
    settingsFlyIn.classList.toggle("open")
  );
}

function setLocalStorageItem(itemName, defaultValue) {
  let currentValue = localStorage.getItem(itemName);
  if (currentValue === null) {
    changeLocalStorageItem(itemName, defaultValue);
  }
}

function changeLocalStorageItem(key, value) {
  console.log(key, value);
  localStorage.setItem(key, value);
  // console.log(options.get(key));
  // options.get(key).checked = value;
}

/* setLocalStorageItem(
  "noAnimations",
  matchMedia("(prefers-reduced-motion)").matches
);
setLocalStorageItem("nerdLevel", 0); */
