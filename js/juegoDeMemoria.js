// inicializacion de variables

let tarjetasDestapadas = 0;
let tarjeta1 = null;
let tarjeta2 = null;
let primerResultado = null;
let segundoResultado = null;
let movimientos = 0;
let aciertos = 0;
let temporizador = false;
let tiempo = 30;

// Apuntando a documento HTML

let mostrarMovimientos = document.getElementById("movimientos");
let mostrarAciertos = document.getElementById("aciertos");
let mostrarTiempo = document.getElementById("t-restante");

let numeros = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8];

// para crear un arreglo ordenados aleatoriamente usamos .sort()

for (let i = numeros.length - 1; i > 0; i--) {
  const j = Math.floor(Math.random() * (i + 1));
  [numeros[i], numeros[j]] = [numeros[j], numeros[i]];
}

console.log(numeros); // Ejemplo de resultado: [3, 1, 5, 2, 4]

// Para entender esto hay que buscar algortimo Fisher-Yates o tambien Knuth shuffle

//funcion contartiempo
function contarTiempo() {
  setInterval(() => {
    tiempo--;
    mostrarTiempo.innerHTML = `Tiempo:${tiempo} segundos`;
  }, 1000);
}

function destapar(id) {
  tarjetasDestapadas++;
  console.log(tarjetasDestapadas);

  if (temporizador == false) {
    contarTiempo();
    temporizador = true;
  }
  if (tarjetasDestapadas == 1) {
    // Mostrar primer numero
    tarjeta1 = document.getElementById(id);
    primerResultado = numeros[id];
    tarjeta1.innerHTML = primerResultado;

    //desabilitar primer boton
    tarjeta1.Disabled = true;
  } else if (tarjetasDestapadas == 2) {
    //Mostrar segundo numero
    tarjeta2 = document.getElementById(id);
    segundoResultado = numeros[id];
    tarjeta2.innerHTML = segundoResultado;

    tarjeta2.Disabled = true;

    // incrementar movimiento
    movimientos++;
    mostrarMovimientos.innerHTML = `Movimientos: ${movimientos}`;
    if (primerResultado == segundoResultado) {
      // encerrar contador tarjetas destapadas
      tarjetasDestapadas = 0;

      // aumentar aciertos

      aciertos++;
      mostrarAciertos.innerHTML = `Aciertos: ${aciertos}`;

      if (aciertos == 8) {
        alert("Ganaste¡¡");
      }
    } else {
      //Mostrar momentaniamente valores y volver a tapar
      setTimeout(() => {
        tarjeta1.innerHTML = "";
        tarjeta2.innerHTML = "";
        tarjeta1.Disabled = false;
        tarjeta2.Disabled = false;
        tarjetasDestapadas = 0;
      }, 500);
    }
  }
}
