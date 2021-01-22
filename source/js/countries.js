const about = document.querySelectorAll(".site__link");
const nav = document.querySelectorAll(".tours__element");
const countries = document.querySelectorAll(".round__element");

for (let i = 0; i < about.length; i++) {
  about[i].addEventListener("click", function () {
    nav.forEach(function (navigation) {
      navigation.classList.remove("tours__element--active");
    });
    nav[i].classList.add("tours__element--active");
    countries.forEach(function (country) {
      country.classList.remove("round__element--active");
    })
    countries[i].classList.add("round__element--active");
  });
};

for (let i = 0; i < nav.length; i++) {
  nav[i].addEventListener("click", function () {
    nav.forEach(function (navigation) {
      navigation.classList.remove("tours__element--active");
    });
    nav[i].classList.add("tours__element--active");
    countries.forEach(function (country) {
      country.classList.remove("round__element--active");
    })
    countries[i].classList.add("round__element--active");
  });
};
