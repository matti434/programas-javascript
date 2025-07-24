const pantalla = document.querySelector(".pantalla"); // llamamos a div pantalla
const botones = document.querySelectorAll(".btn"); // llamamos a todos los botones

botones.forEach((boton) => {
  boton.addEventListener("click", () => {
    const botonApretado = boton.textContent; // mostamos en consola el texto del boton

    if (boton.id === "c") {
      // si el boton apretado es c, limpiamos la pantalla
      pantalla.textContent = "0"; // si el boton apretado es c, mostramos 0 en pantalla
      return; // salimos de la funcion
    } // retornamos la funcion para que no sigua con el siguiente codigo ya que de seguir el teclado mostraria el boton apretado osea C

    if (boton.id === "borrar") {
      if (
        pantalla.textContent.length === 1 ||
        pantalla.textContent === "Error") 
        {
        pantalla.textContent = "0";
        } 
         else if (pantalla.textContent.length > 1) {
         pantalla.textContent = pantalla.textContent.slice(0, -1); // si el boton apretado es borrar, eliminamos el ultimo caracter de la pantalla
        }
        return;
    }

    if (boton.id === "igual") {
      try {
        pantalla.textContent = eval(pantalla.textContent); // si el boton apretado es igual, evaluamos la expresion y mostramos el resultado en pantalla
        return;
      } catch {
        pantalla.textContent = "Error"; // si hay un error en la evaluacion, mostramos Error en pantalla
        return;
      }
    }

    if (pantalla.textContent === "0" || pantalla.textContent === "Error") {
      pantalla.textContent = botonApretado; // si la pantalla es 0, reemplazamos el 0 por el texto del boton apretado
    } else {
      pantalla.textContent += botonApretado; // mostramos en pantalla el texto del boton apretado sumando mas texto
    }
  });
});
