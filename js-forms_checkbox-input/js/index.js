console.clear();

const form = document.querySelector('[data-js="form"]');
const tosError = document.querySelector('[data-js="tos-error"]');
const tosCheckbox = document.querySelector('[data-js="tos"]');

hideTosError();

function hideTosError() {
  tosError.setAttribute("hidden", "");
}

function showTosError() {
  tosError.removeAttribute("hidden");
}

form.addEventListener("submit", (event) => {
  event.preventDefault();

  // --v-- write your code here --v--
  if (event.target.elements.tos.checked == false) {
    return;
  } else {
    alert("Form submitted");
  }
});

tosCheckbox.addEventListener("input", (event) => {
  console.log(tosCheckbox.checked);
  if (event.target.checked === false) {
    showTosError();
  } else {
    hideTosError();
  }
});
// --^-- write your code here --^--

// eslint-disable-next-line no-alert;
