const buttonMenu = document.querySelector(".button-menu");
const navbar = document.querySelector(".navbar");
const itemsMenu = document.querySelectorAll(".item-menu");
const btnCopy = document.getElementById("btn-copy");

buttonMenu.addEventListener("click", () => {
  navbar.classList.toggle("open-menu");
});

itemsMenu.forEach((link) => {
  link.addEventListener("click", () => {
    navbar.classList.remove("open-menu");
  });
});

btnCopy.addEventListener("click", copyText);
btnCopy.addEventListener("mouseleave", () => {
  setTimeout(() => {
    btnCopy.setAttribute("data-tooltip", "Copiar email");
  }, 400);
});

async function copyText() {
  let textEmail = document.getElementById("text-email").innerHTML;
  try {
    await navigator.clipboard.writeText(textEmail);
    btnCopy.setAttribute("data-tooltip", "Copiado");
  } catch (error) {
    console.error("Error al copiar al portapapeles:", error);
  }
}
