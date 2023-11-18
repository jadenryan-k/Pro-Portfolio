document.querySelector(".menu-icon").addEventListener("click", function () {
  var navbar = document.querySelector(".navbar");

  if (window.getComputedStyle(navbar).display === "none") {
    navbar.style.display = "flex";
  } else {
    navbar.style.display = "none";
  }
});

let navbarLinks = document.querySelectorAll(".navbar a");
navbarLinks.forEach(function (link) {
  link.addEventListener("click", function () {
    if (window.innerWidth <= 886) {
      closeNavbar();
    }
  });
});

if (window.innerWidth <= 886) {
  window.addEventListener("scroll", function () {
    closeNavbar();
  });
}

function closeNavbar() {
  var navbar = document.querySelector(".navbar");
  navbar.style.display = "none";
}
