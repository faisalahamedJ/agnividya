document.addEventListener("DOMContentLoaded", function () {
  AOS.init();
  const navbar = document.querySelector(".navbar-container");
  if (window.innerWidth > 992) {
    navbar.classList.remove("sticky-top");
  }

  const mybutton = document.querySelector(".move-to-top");

  window.onscroll = function () {
    scrollFunction();
  };
  function scrollFunction() {
    if (
      document.body.scrollTop > 20 ||
      document.documentElement.scrollTop > 150
    ) {
      mybutton.style.display = "block";
    } else {
      mybutton.style.display = "none";
    }
  }

  mybutton.addEventListener("click", () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  });
});
