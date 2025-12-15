const registerForm = document.getElementById("registrationForm");

const inputPassword = document.getElementById("password");
const confirmInputPassword = document.getElementById("confirmPassword");

confirmInputPassword.addEventListener("input", () => {
  if (confirmInputPassword.value !== inputPassword.value) {
    confirmInputPassword.setCustomValidity("Passwrds do not match");
  } else {
    confirmInputPassword.setCustomValidity("");
  }
});

document.getElementById("showPassword").addEventListener("change", function () {
  const type = this.checked ? "text" : "password";
  inputPassword.type = type;
  confirmInputPassword.type = type;
});
