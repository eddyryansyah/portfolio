const menu = document.querySelector(".menu-links");
const menuButton = document.querySelector(".hamburger-icon");
const menuLinks = document.querySelectorAll(".menu-links a");

function closeMenu() {
  menu.classList.remove("open");
  menuButton.classList.remove("open");
  menuButton.setAttribute("aria-expanded", "false");
}

function toggleMenu() {
  const isOpen = menu.classList.contains("open");

  if (isOpen) {
    closeMenu();
  } else {
    menu.classList.add("open");
    menuButton.classList.add("open");
    menuButton.setAttribute("aria-expanded", "true");
  }
}

menuButton.addEventListener("click", toggleMenu);

menuLinks.forEach((link) => {
  link.addEventListener("click", closeMenu);
});
