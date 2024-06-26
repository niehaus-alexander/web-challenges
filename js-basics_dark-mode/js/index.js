console.clear();

const bodyElement = document.querySelector('[data-js="body"]');

const darkButton = document.querySelector("[data-js=dark-mode-button]");
darkButton.addEventListener("click", function () {
  bodyElement.classList.add("dark");
});

const lightButton = document.querySelector("[data-js=light-mode-button]");
lightButton.addEventListener("click", function () {
  bodyElement.classList.remove("dark");
});

const toggleButton = document.querySelector("[data-js=toggle-button]");
toggleButton.addEventListener("click", function () {
  bodyElement.classList.toggle("dark");
});
