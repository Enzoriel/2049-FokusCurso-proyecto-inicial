const html = document.querySelector("html");
const botonEnfoque = document.querySelector(".app__card-button--enfoque");
const botonCorto = document.querySelector(".app__card-button--corto");
const botonLargo = document.querySelector(".app__card-button--largo");
const imagen = document.querySelector(".app__image");
const titulo = document.querySelector(".app__title");
const botones = document.querySelectorAll(".app__card-button");
const musica = new Audio("./sonidos/luna-rise-part-one.mp3");
const inputMusica = document.getElementById("alternar-musica");
const botonStartPause = document.getElementById("start-pause");
const textoStartPause = document.querySelector("#start-pause span");
const imagenStartPause = document.querySelector(".app__card-primary-butto-icon");
const sonidoPlay = new Audio("./sonidos/play.wav");
const sonidoPause = new Audio("./sonidos/pause.mp3");
const sonidoAlerta = new Audio("./sonidos/beep.mp3");
let idSonido = 1;
let tiempoTranscurrido = 10;
let idIntervalo = null;

musica.loop = true;

inputMusica.addEventListener("change", () => {
  if (musica.paused) {
    musica.play();
  } else {
    musica.pause();
  }
});

function cambiarContexto(contexto) {
  botones.forEach(function (boton) {
    boton.classList.remove("active");
  });

  html.setAttribute("data-contexto", contexto);
  imagen.setAttribute("src", `./imagenes/${contexto}.png`);

  switch (contexto) {
    case "descanso-corto":
      titulo.innerHTML = `
      ¿Qué tal tomar un respiro?,<br />
            <strong class="app__title-strong">¡Haz una pausa corta!.</strong>
      `;
      break;
    case "descanso-largo":
      titulo.innerHTML = `
      Hora de volver a la superficie,<br />
      <strong class="app__title-strong">¡Haz una pausa larga!.</strong>
      `;
      break;
    case "enfoque":
      titulo.innerHTML = `
        Optimiza tu productividad,<br />
        <strong class="app__title-strong">sumérgete en lo que importa.</strong>
        `;
      break;
  }
}

botonCorto.addEventListener("click", () => {
  cambiarContexto("descanso-corto");
  botonCorto.classList.add("active");
});

botonLargo.addEventListener("click", () => {
  cambiarContexto("descanso-largo");
  botonLargo.classList.add("active");
});

botonEnfoque.addEventListener("click", () => {
  cambiarContexto("enfoque");
  botonEnfoque.classList.add("active");
});

const cuentaRegresiva = () => {
  if (tiempoTranscurrido <= 0) {
    sonidoAlerta.play();
    alert("El tiempo ha finalizado");
    reiniciar();
    return;
  }
  tiempoTranscurrido -= 1;
  console.log(`Temporizador = ${tiempoTranscurrido}`);
};

botonStartPause.addEventListener("click", () => {
  IniciarPausar();
});

function IniciarPausar() {
  if (idIntervalo) {
    sonidoPause.play();
    imagenStartPause.setAttribute("src", "./imagenes/play_arrow.png");
    textoStartPause.textContent = "Comenzar";
    reiniciar();
    return;
  }
  imagenStartPause.setAttribute("src", "./imagenes/pause.png");
  textoStartPause.textContent = "Pausar";
  sonidoPlay.play();
  idIntervalo = setInterval(cuentaRegresiva, 1000);
}

function reiniciar() {
  clearInterval(idIntervalo);
  idIntervalo = null;
}
