const form = document.querySelector(".login-form");
const profile = {};
form.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  const {
    elements: { email, password }
  } = event.currentTarget;

  if (email.value === "" || password.value === "") {
    return alert("Всі поля повинні бути заповнені!");
  }
  else {
        profile.email = email.value;
        profile.password = password.value;
        console.log(profile);
  }
      event.currentTarget.reset();
}
