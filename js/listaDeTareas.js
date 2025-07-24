function agregarTarea(){
    // optenes el valor del campo de la tarea o el input 
    let nuevaTareaTexto = document.getElementById("nuevaTarea").value; // al agregart value estoy obteniendo el valor del input y no el input en si
    
    // validamos que el valor del input no sea vacio o string vacio
    if(nuevaTareaTexto === ""){ // al poner === "" se usa para especificar un string vacio
        alert("Por favor,ingrese una tarea.");
        return;
    }

    // crear elementos en la lista
    let nuevaTarea = document.createElement("li"); // creamos un elemento li
    nuevaTarea.textContent = nuevaTareaTexto + " "; // le asignamos el valor del input al li

    // crear un boton de Eliminar
    let botonEliminar = document.createElement("button");
    botonEliminar.textContent = "Eliminar";
    botonEliminar.onclick = function(){
        nuevaTarea.remove(); // al hacer click en el boton eliminar, se elimina la tarea
    }

    // agregar boton de eliminar al elemento de la lista
    nuevaTarea.appendChild(botonEliminar);  // aqui estamos diciendo que nueva tarea es padre de botonEliminar

    // agregar el elemento o tarea a la lista
    document.getElementById("listaTareas").appendChild(nuevaTarea); // aqui que lista de tareas es padre de nuevaTarea

    // limpiar el cuadro de texto del nombre de la tarea
    document.getElementById("nuevaTarea").value = ""; // aqui lipiamos el contenido del input para poder agregar una nueva tarea
    
}