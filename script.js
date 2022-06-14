const saludarProspectoNuevo = (nombre, apellido, edad) => {
    alert (`Bienvenid@ ${nombre} ${apellido}, tienes ${edad}.`);
}
let nombreProspecto = prompt ("Ingresa tu nombre");
let apellidoProspecto = prompt ("Ingresa tu apellido");
let edadProspecto = prompt ("Ingresa tu edad");

const mensajeDeIdentidad = () => {
    alert("Comencemos");
}

saludarProspectoNuevo (nombreProspecto, apellidoProspecto, edadProspecto);


let notaEsperada = Number(prompt("Qué número deberías obtener sumadas las notas para aprobar?"));
alert("Veamos tus calificaciones")

for (let i = 1; i <= 1; i++){
    
    let notaUno = Number(prompt("Cuanto te sacaste en el primer examen?"));
    if (!parseInt(notaUno)){
        alert("no ingresaste un numero");
        break;
    } else if (notaUno >= notaEsperada ) {
        alert("aprobado" + (notaEsperada- notaUno));
        break;
    } 
    let notaDos = Number(prompt("Cuánto te sacaste en el segundo examen?"));
    if (!parseInt (notaDos)) {
        alert("no ingresaste un numero");
        break;
    } else if (notaDos >= notaEsperada ) {
        alert("aprobado" + (notaEsperada - notaDos));
        break;
    }
    let notaTres = Number(prompt("Cuánto te sacaste en el tercer examen?"));
    if (!parseInt (gastoTres)) {
        alert("no ingresaste un numero");
        break;
    } else if (notaTres >= notaEsperada ) {
        alert("aprobado" + (notaEsperada - notaTres));
        break;
    }
  
let notaFinal = (notaUno + notaDos + notaTres);
let notaFaltante = notaFinal - notaEsperada;

alert("Tu nota final es de " + notaFinal );
alert(`Te faltaron ${notaFaltante}.`);
}
