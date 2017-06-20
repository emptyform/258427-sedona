var modalFailure = document.querySelector(".modal-form--failure");
var modalSuccess = document.querySelector(".modal-form--success");
var btnFailure = document.querySelector(".btn--modal-failure");
var btnSuccess = document.querySelector(".btn--modal-success");
var btnSubmit = document.querySelector(".btn--feedback-sent");
var formFeedback = document.querySelector(".feedback__form");
var fieldTel = document.querySelector("[name = tel]");
var fieldEmail = document.querySelector("[name = email]");
var fieldFirstName = document.querySelector("[name = first-name]");
var fieldSecondName = document.querySelector("[name = second-name]");
var labelErrorTel = document.querySelector(".feedback__label--error-tel");
var labelErrorEmail = document.querySelector(".feedback__label--error-email");


btnSubmit.addEventListener("click", function (event) {
  event.preventDefault();
  if (!fieldFirstName.value) {
    modalFailure.classList.add('modal-form--show');
    btnFailure.focus();
    fieldFirstName.classList.add('feedback__input--error');
  }
  if (!fieldSecondName.value) {
    modalFailure.classList.add('modal-form--show');
    fieldSecondName.classList.add('feedback__input--error');
  }
  if (!validateForm()) {
    modalFailure.classList.add('modal-form--show');
    return;
  }
  formFeedback.reset();
  modalSuccess.classList.add("modal-form--show");
  btnSuccess.focus();
  fieldFirstName.classList.remove('feedback__input--error');
  fieldSecondName.classList.remove('feedback__input--error');
});

fieldFirstName.addEventListener("click", function (event) {
  fieldFirstName.classList.remove('feedback__input--error');
});

fieldSecondName.addEventListener("click", function (event) {
  fieldSecondName.classList.remove('feedback__input--error');
});

btnFailure.addEventListener("click", function (event) {
  event.preventDefault();
  modalFailure.classList.remove("modal-form--show");
});

btnSuccess.addEventListener("click", function (event) {
  event.preventDefault();
  modalSuccess.classList.remove("modal-form--show");
});

function validateForm() {

  if (!fieldTel.checkValidity()) {
    labelErrorTel.classList.add('feedback__label--error-show');
  } else {
    labelErrorTel.classList.remove('feedback__label--error-show');
  }

  if (!fieldEmail.checkValidity()) {
    labelErrorEmail.classList.add('feedback__label--error-show');
  } else {
    labelErrorEmail.classList.remove('feedback__label--error-show');
  }

  if (!fieldTel.checkValidity() || !fieldEmail.checkValidity()) {
    return false;
  }

  return true;
}