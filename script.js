function toggleNavbar() {
  var navbar = document.querySelector(".navbar");
  navbar.style.display = navbar.style.display === "none" ? "block" : "none";
}

function closeNavbar() {
  var navbar = document.querySelector(".navbar");
  navbar.style.display = "none";
}

let navbarLinks = document.querySelectorAll(".navbar a");
navbarLinks.forEach(function (link) {
  link.addEventListener("click", function () {
    closeNavbar();
  });
});

window.addEventListener("scroll", function () {
  closeNavbar();
});
