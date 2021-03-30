const options = new Map();

window.addEventListener("DOMContentLoaded", function () {
  initThemeSwitcher();
  // Settings default values
  setLocalStorageItem(
    "lightTheme",
    !matchMedia("(prefers-color-scheme: dark)").matches
  );
  initSettingsButton();
});

function initThemeSwitcher() {
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
