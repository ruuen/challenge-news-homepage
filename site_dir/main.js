const btnNavOpen = document.querySelector(".header__nav-control");
const btnNavClose = document.querySelector(".header__nav-mobile-control");
const navMenu = document.querySelector(".header__nav-mobile");
const navVisible = "header__nav-mobile--visible";

btnNavOpen.addEventListener("click", (e) => {
  if (!navMenu.classList.contains(navVisible)) {
    navMenu.classList.add(navVisible);
    navMenu.focus();
  }
});

btnNavClose.addEventListener("click", (e) => {
  navMenu.classList.remove(navVisible);
  navMenu.blur();
});
