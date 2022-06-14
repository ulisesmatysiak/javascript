const saludarProspectoNuevo = (nombre, apellido, edad) => {
    alert (`Bienvenid@ ${nombre} ${apellido}, tienes ${edad}.`);
}
let nombreProspecto = prompt ("Ingresa tu nombre");
let apellidoProspecto = prompt ("Ingresa tu apellido");
let edadProspecto = prompt ("Ingresa tu edad");

const mensajeDeIdentidad = () => {
    alert("Comencemos, crea tu propio estilo.");
}

saludarProspectoNuevo (nombreProspecto, apellidoProspecto, edadProspecto);


let notaFinal = Number(prompt("Qué nota necesitas para aprobar?"));
alert("Organicemos tu economia")

for (let i = 1; i <= 1; i++){
    
    let notaUno = Number(prompt("Cuanto te sacaste en el primer examen?"));
    if (!parseInt(notaUno)){
        alert("no ingresaste un numero");
        break;
    } else if (notaUno >= notaFinal ) {
        alert("Te gastataste todo tu sueldo, total $" + (sueldoNeto - gastoUno));
        break;
    } 
    let notaDos = Number(prompt("Cuánto te sacaste en el segundo examen?"));
    if (!parseInt (notaDos)) {
        alert("no ingresaste un numero");
        break;
    } else if (gastoDos >= sueldoNeto ) {
        alert("Te gastataste todo tu sueldo, total $" + (sueldoNeto - gastoDos));
        break;
    }
    let notaTres = Number(prompt("Cuánto te sacaste en el tercer examen?"));
    if (!parseInt (gastoTres)) {
        alert("no ingresaste un numero");
        break;
    } else if (gastoTres >= sueldoNeto ) {
        alert("Te gastataste todo tu sueldo, total $" + (sueldoNeto - gastoTres));
        break;
    }
  
let notaFinal = (notaUno + notaDos + notaTres);
let resto = sueldoNeto - gastoTotal;

alert("Tu gasto total es de " + gastoTotal );
alert(`Te quedan ${resto}.`);
}

mensajeDeIdentidad ();