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
  });
});

function showPreview(event) {
  if (event.target.files.length > 0) {
    var src = URL.createObjectURL(event.target.files[0]);
    var preview = document.getElementById("file-ip-1-preview");
    preview.src = src;
    preview.style.display = "block";
  }
}
