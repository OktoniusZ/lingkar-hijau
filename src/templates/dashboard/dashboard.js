const menu = document.querySelector("#hamburgerButton");
const main = document.querySelector("main");
const footer = document.querySelector("footer");
const drawer = document.querySelector("#navigationDrawer");

menu.addEventListener("click", function (event) {
  drawer.classList.toggle("open");
  event.stopPropagation();
});

main.addEventListener("click", function () {
  drawer.classList.remove("open");
});