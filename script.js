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
  // Get the loading overlay element
  const loadingOverlay = document.getElementById("loading-overlay");
  const wholeContainer = document.getElementById("whole-container");
  wholeContainer.style.display = "none";

  window.addEventListener("load", () => {
    loadingOverlay.style.display = "none";
    wholeContainer.style.display = "block";

    // Show the page content once the loading overlay is hidden
    // document.getElementById("page-content").style.display = "block";
  });

  // document.querySelectorAll("a.nav-link.active").forEach((li) => {
  //   li.classList.remove("active");
  //   li.attributes.removeNamedItem("aria-current");
  // });

  // // find the link to the current page and make it active
  // document
  //   .querySelectorAll(`a[href="${location.pathname}"].nav-link`)
  //   .forEach((a) => {
  //     a.classList.add("active");
  //     a.setAttribute("aria-current", "page");
  //   });
});
