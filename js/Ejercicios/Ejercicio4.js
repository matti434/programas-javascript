const result = document.getElementById("resultado");

let nombre , email;

nombre = prompt(`Dime tu nombre: `);
email = prompt(`Dime tu email: `);

result.innerHTML = ` Su nombre es: ${nombre} y su email es ${email}`;