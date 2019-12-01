'use strict'

const openMenuButton = document.getElementById("menu-button");
const sideMenu = document.getElementById("side-menu");
const closeMenuButton = document.getElementById("close-button");
const modal = document.getElementById("modal");
const bodyMenuButton = document.getElementById("body-menu-button");
const toTopButton = document.getElementById("to-top");

const closeMenu = () => {
	sideMenu.style.width = "0";
	sideMenu.style.padding = "0";
	modal.style.display = "none";
	modal.style.cursor = "initial";
}

closeMenuButton.onclick = closeMenu;
modal.onclick = closeMenu;

const openMenu = () => {
	sideMenu.style.width = "20rem";
	sideMenu.style.padding = "3rem 2rem";
	modal.style.display = "block";
	modal.style.cursor = "crosshair";
bodyMenuButton.style.display = "none"
}

openMenuButton.onclick = openMenu;
bodyMenuButton.onclick = openMenu;



window.onscroll = function(e) {scrollFunction(e)};

function scrollFunction(e) {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    bodyMenuButton.style.display = "flex";
    toTopButton.style.display = "block";
  } else {
    bodyMenuButton.style.display = "none";
    toTopButton.style.display = "none";
  }

if (sideMenu.style.width == "20rem" || sideMenu.style.padding == "3rem 2rem") {
bodyMenuButton.style.display = "none"}
}
