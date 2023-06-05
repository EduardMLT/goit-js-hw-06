const elInput = document.querySelector("#name-input");
const elOutput = document.querySelector("#name-output");
elInput.addEventListener("input", (el) => {
  elOutput.textContent = el.currentTarget.value;
  if (el.currentTarget.value === "") {
    elOutput.textContent = "Anonymous";
  }
});