(function initMobileMenu() {
  const btnNavOpen = document.querySelector(".header__nav-control--open");
  const btnNavClose = document.querySelector(".header__nav-control--close");
  const navMenu = document.querySelector(".header__nav");
  const pageBody = document.querySelector("body");

  const navVisible = "header__nav--mobile";
  const bodyNavVisible = "nav-open";

  let lastScrollX, lastScrollY;

  btnNavOpen.addEventListener("click", (e) => {
    if (!navMenu.classList.contains(navVisible)) {
      lastScrollX = window.scrollX;
      lastScrollY = window.scrollY;
      navMenu.classList.add(navVisible);
      btnNavOpen.ariaExpanded = true;
      btnNavClose.ariaExpanded = true;
      pageBody.classList.add(bodyNavVisible);
      navMenu.focus();
    }
  });

  btnNavClose.addEventListener("click", (e) => {
    navMenu.classList.remove(navVisible);
    btnNavOpen.ariaExpanded = false;
    btnNavClose.ariaExpanded = false;
    pageBody.classList.remove(bodyNavVisible);
    window.scrollTo(lastScrollX, lastScrollY);
    pageBody.focus();
  });
})();
