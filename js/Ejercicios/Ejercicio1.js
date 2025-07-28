const DOM = document.getElementById("DOM");
const BOM = document.getElementById("BOM");


DOM.innerHTML = `<h2>DOM (Document Object Model)</h2>
Es una interfaz que representa la estructura de un documento HTML o XML como un árbol de nodos.

Permite a JavaScript manipular el contenido, la estructura y el estilo de una página web de forma dinámica.

Cada elemento HTML (etiquetas, atributos, texto) es un nodo en este árbol.`

BOM.innerHTML = `<h2>BOM (Browser Object Model)</h2>
Es una interfaz que permite interactuar con el navegador (no está estandarizado, a diferencia del DOM).

Incluye objetos como window, navigator, screen, location, history, etc.

El objeto principal es window, que representa la ventana del navegador y también actúa como el objeto global en JavaScript.`