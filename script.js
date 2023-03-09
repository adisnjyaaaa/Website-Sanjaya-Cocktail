// toglle class active
const navbarNav = document.querySelector(".navbar-nav");

// ketika hamburger menu di klik maka akan muncul sebuah navbar
document.querySelector("#hamburger-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

// menghilangkan sidebar tanpa mengklik menu hamburger
const hamburger = document.querySelector("#hamburger-menu");

document.addEventListener("click", function (e) {
  if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});
