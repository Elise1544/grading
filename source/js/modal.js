const formModal = document.querySelector(".success-form");
const buyModal = document.querySelector(".buy-tour");
const buyButton = document.querySelectorAll(".buy-button");
const formButton = document.querySelector(".form__button");
const modalWrapper = document.querySelector(".modal-wrapper");

const closeButton = document.querySelectorAll(".close-button");

buyButton.forEach(function (buy) {
  buy.addEventListener("click", function (evt) {
    evt.preventDefault();
    buyModal.classList.remove("modal--unactive");
    modalWrapper.classList.add("modal-wrapper--active");

    const modalFormButton = document.querySelector(".modal-form__button");
    const phoneInput = buyModal.querySelector(".form__input--phone");
    phoneInput.focus();

    modalFormButton.addEventListener("click", function (evt) {
      evt.preventDefault();
      formModal.classList.remove("modal--unactive");
      modalWrapper.classList.add("modal-wrapper--active");
    });
  });
});

formButton.addEventListener("click", function (evt) {
  evt.preventDefault();
  formModal.classList.remove("modal--unactive");
  modalWrapper.classList.add("modal-wrapper--active");
});

closeButton.forEach(function (close) {
  close.addEventListener("click", function (evt) {
    evt.preventDefault();
    modalWrapper.classList.remove("modal-wrapper--active");
    buyModal.classList.add("modal--unactive");
    formModal.classList.add("modal--unactive");
  });
});

window.addEventListener("keydown", function (evt) {
  if (evt.key === `Escape`) {
    evt.preventDefault();
    modalWrapper.classList.remove("modal-wrapper--active");
    buyModal.classList.add("modal--unactive");
    formModal.classList.add("modal--unactive");
  }
});

modalWrapper.addEventListener("click", function (evt) {
  evt.preventDefault();
  buyModal.classList.add("modal--unactive");
  formModal.classList.add("modal--unactive");
  modalWrapper.classList.remove("modal-wrapper--active");
});
