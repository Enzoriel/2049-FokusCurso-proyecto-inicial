const html = document.querySelector("html");
const botonEnfoque = document.querySelector(".app__card-button--enfoque");
const botonCorto = document.querySelector(".app__card-button--corto");
const botonLargo = document.querySelector(".app__card-button--largo");

botonCorto.addEventListener("click", () => {
  html.setAttribute("data-contexto", "descanso-corto");
});

botonEnfoque.addEventListener("click", () => {
  html.setAttribute("data-contexto", "enfoque");
});

botonLargo.addEventListener("click", () => {
  html.setAttribute("data-contexto", "descanso-largo");
});
