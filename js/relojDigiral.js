//primero declaro la variable const o let despues se enlaza con document.getElementById("el id");
const fecha = document.getElementById("date");
const hora = document.getElementById("hours");
const minutos = document.getElementById("min");
const segundos = document.getElementById("sec");

// en la funcin clock() vamos a crear dos arrays de meses y dias
function clock() {
  let months = [
    "enero",
    "febrero",
    "marzo",
    "abril",
    "mayo",
    "junio",
    "julio",
    "agosto",
    "septiembre",
    "octubre",
    "noviembre",
    "diciembre",
  ];
  let days = [
    "domingo",
    "lunes",
    "martes",
    "miercoles",
    "jueves",
    "viernes",
    "sabado",
    "domingo",
  ];

  let today = new Date();
  //Se crea un objeto Date, que contiene la fecha y hora actuales del sistema. o Estás creando una instancia del objeto Date, que representa la fecha y hora actual.

  //  < 10 ? "0" + today.getDate() : today.getDate() aqui es una forma de condicionar si el dia es menor a 10, entonces le agregamos un 0 al inicio, como si fuera un if
  fecha.textContent = `${days[today.getDay()]} ${
    today.getDate() < 10 ? "0" + today.getDate() : today.getDate()
  } de ${months[today.getMonth()]} del ${today.getFullYear()}
    `;

  /*
    dislozamos por partes
      today.getDay() → Devuelve el número del día de la semana (0 = domingo, 1 = lunes, etc.).
      days[...] → Traduce ese número al nombre del día.
      today.getDate() → Devuelve el día del mes (1 a 31).
      Se agrega un 0 si es menor a 10 (por estética: "03" en lugar de "3").
      today.getMonth() → Devuelve el número del mes (0 = enero, 11 = diciembre).
      months[...] → Traduce ese número al nombre del mes.
     today.getFullYear() → Año completo (ej. 2025).

    */

     hora.textContent = today.getHours() < 10 ? "0" + today.getHours() : today.getHours();
     minutos.textContent = today.getMinutes() < 10 ? "0"+ today.getMinutes() : today.getMinutes();
     segundos.textContent = today.getSeconds() < 10 ? "0"+ today.getSeconds() : today.getSeconds();   
}
let interval = setInterval(clock, 1000); // llama a la funcin clock cada 1000 milisegundos (1 segundo)
/*
let interval = setInterval(clock, 1000);
Esto hace que la función clock() se ejecute cada 1000 milisegundos (1 segundo).
Es útil para que el reloj se actualice en tiempo real.
*/
