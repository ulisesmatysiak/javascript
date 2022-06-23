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

function datosDelProspecto (nombre, edad, localidad, calle) {
    this.nombre = nombre;
    this.edad = edad;
    this.localidad = localidad;
    this.calle = calle;
}
const prospecto1 = new datosDelProspecto (nombreProspecto, edadProspecto, localidadProspecto, calleProspecto);

console.log(prospecto1);

function productos (producto) {
    this.producto = producto.nombre
}

const producto1 = new productos ({nombre : "hamburguesa"});
const producto2 = new productos ({nombre : "papas fritas"});
const producto3 = new productos ({nombre : "bastones"});
const producto4 = new productos ({nombre : "Aros de cebolla"});
const producto5 = new productos ({nombre : "gaseosa"});
const producto6 = new productos ({nombre : "chocotorta"});
const producto7 = new productos ({nombre : "helado"});


console.log(producto1);
console.log(producto2);
console.log(producto3);
console.log(producto4);
console.log(producto5);
console.log(producto6);
console.log(producto7);


const productosSeleccionados = [producto1, producto2, producto3, producto4, producto5];
console.log(productosSeleccionados);


const productosGuardadosEnFavoritos = [producto6, producto7];
console.log(productosGuardadosEnFavoritos);

const totalProductos = productosGuardadosEnFavoritos.concat(productosSeleccionados);
console.log(totalProductos);

for (const misProductos of totalProductos) {
    console.log(`Tus productos son ${misProductos}`);

}

totalProductos.splice (3, 2);
console.log(totalProductos);