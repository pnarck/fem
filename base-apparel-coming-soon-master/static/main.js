// Main
document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("email-form");
  const emailInput = document.querySelector(".content__input");
  const errorIcon = document.querySelector(".error-icon");
  const errorMessage = document.querySelector(".error-message");

  // Check on input
  emailInput.addEventListener(
    "input",
    () => {
      if (validateEmail(emailInput.value)) {
        errorIcon.style.display = "none";
        errorMessage.style.display = "none";
        emailInput.classList.remove("error");
      } else {
        errorIcon.style.display = "block";
        errorMessage.style.display = "block";
        emailInput.classList.add("error");
      }
    },
    false
  );

  // Check on submit
  form.addEventListener(
    "submit",
    function (event) {
      if (!validateEmail(emailInput.value)) {
        errorIcon.style.display = "block";
        errorMessage.style.display = "block";
        emailInput.classList.add("error");
        event.preventDefault();
      }
    },
    false
  );
});

// Email validation based on RegExp
function validateEmail(email) {
  const emailRegExp =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  return emailRegExp.test(email);
}
