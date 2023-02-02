document.getElementById("menu__btn").addEventListener("click", mostrarMenu);
document.getElementById("menu__back").addEventListener("click", ocultarMenu);
var inputs = document.getElementsByClassName('formulario__input');


nav = document.getElementById("nav");
background_menu = document.getElementById("menu__back");

function mostrarMenu() {
  nav.style.right = "0px";
  background_menu.style.display = "block";
}

function ocultarMenu() {
  nav.style.right = "-250px";
  background_menu.style.display = "none";
}

