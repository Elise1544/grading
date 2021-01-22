const menuButton = document.querySelector(".page-header__button");
const navigation = document.querySelector(".page-header__nav");

document.addEventListener("DOMContentLoaded", function(evt) {
  navigation.classList.remove("page-header__nav--mobile");
  menuButton.classList.add("page-header__button--closed");
});

menuButton.addEventListener("click", function(evt) {
  if (menuButton.classList.contains("page-header__button--closed")) {
    evt.preventDefault();
    menuButton.classList.remove("page-header__button--closed");
    menuButton.classList.add("page-header__button--opened");
    navigation.classList.add("page-header__nav--mobile");
  } else {
    evt.preventDefault();
    menuButton.classList.remove("page-header__button--opened");
    menuButton.classList.add("page-header__button--closed");
    navigation.classList.remove("page-header__nav--mobile");
  }
});
