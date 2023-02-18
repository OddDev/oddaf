const options = new Map();

window.addEventListener("DOMContentLoaded", function () {
  initEventListeners();
  initSettingsButton();
});

const settings = new Map();
settings.set("theme", ["dark", "light"]);
settings.set("motion", ["normal", "reduced"]);

function initEventListeners() {
  settings.forEach(
    (optionIdentifiers, groupIdentifier) =>
      initEventListener(groupIdentifier) ||
      optionIdentifiers.forEach((optionIdentifier) =>
        initEventListener(groupIdentifier, optionIdentifier)
      )
  );
}

function initEventListener(groupIdentifier, option = "system") {
  console.log(`${groupIdentifier}-switcher-option-${option}`);
  const radioButtonElement = document.getElementById(
    `${groupIdentifier}-switcher-option-${option}`
  );
  radioButtonElement.addEventListener("change", () =>
    setAttribute(groupIdentifier, option)
  );
  initButtonState(groupIdentifier, option, radioButtonElement);
}

function initButtonState(groupIdentifier, option, buttonSourceElement) {
  const storageEntry = localStorage.getItem(groupIdentifier),
    isActive =
      (option === "system" && storageEntry === null) || storageEntry === option;

  if (isActive) {
    setAttribute(groupIdentifier, option);
  }
  buttonSourceElement.checked = isActive;
}

function setAttribute(name, value) {
  document.body.setAttribute(`data-${name}`, value);
  localStorage.setItem(name, value);
}

function initSettingsButton() {
  const settingsButton = document.querySelector(".settings-toggle"),
    settingsFlyIn = document.querySelector("aside");

  settingsButton.addEventListener("click", () =>
    settingsFlyIn.classList.toggle("open")
  );
}
