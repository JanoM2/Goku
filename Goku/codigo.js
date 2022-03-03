/* Notas para entender lo que voy haciendo */

// Seleccionando Canvas y dandole contexto 2d

let canvas = document.getElementById("escenario");
let escenario = canvas.getContext("2d");

// creando variables fondo y Goku

let fondo = new Image();
fondo.src = "fondo.png";

let goku = new Image();
goku.src = "goku.png";

// controladores de evento ("load", al cargar se ejecuta el code)

fondo.addEventListener("load", () => {
  dibujar();
});

goku.addEventListener("load", () => {
  dibujar();
});

// posicion inicial de Goku

let xgoku = 100;
let ygoku = 100;

// dibujar el fondo y a goku

const dibujar = () => {
  escenario.drawImage(fondo, 0, 0);
  escenario.drawImage(goku, xgoku, ygoku);
};

// funcion que cambia a goku

const cambiarGoku = (goku, xgoku, ygoku, source) => {
  goku.src = source;
  escenario.drawImage(goku, xgoku, ygoku);
};

// contador para la barra de progreso
let contador = 0;

// evento que cambia a goku

document.querySelector(".KI").addEventListener("click", () => {
  let progreso = (document.querySelector("#progreso").value = contador++);

  if (progreso < 15)
    cambiarGoku(goku, (xgoku = 100), (ygoku = 100), "gokuCargando.png");
  if (progreso >= 20)
    cambiarGoku(goku, (xgoku = 40), (ygoku = 20), "gokuKi1.png");
  if (progreso >= 35)
    cambiarGoku(goku, (xgoku = 40), (ygoku = 20), "gokuKi2.png");
  if (progreso >= 50)
    cambiarGoku(goku, (xgoku = 40), (ygoku = 20), "gokuKi3.png");
  if (progreso >= 70)
    cambiarGoku(goku, (xgoku = 40), (ygoku = 20), "gokuKi4.png");
  if (progreso >= 90)
    cambiarGoku(goku, (xgoku = 90), (ygoku = 110), "gokuTransform.png");
  if (progreso >= 95)
    cambiarGoku(goku, (xgoku = 60), (ygoku = 60), "gokuSSJ.png");
});
