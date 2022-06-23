<<<<<<< HEAD
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
=======
let Aceites = [
    {
        id: 0,
        marca: "Castrol",
        descripcion: "10w-40",
        tipo: "Semisintetico",
        precio: 1500,
    },
    {
        id: 1,
        marca: "Mobil",
        descripcion: "10w-50",
        tipo: "Sintetico",
        precio: 1000,
    },
    {
        id: 2,
        marca: "Total",
        descripcion: "5w-40",
        tipo: "Semisintetico",
        precio: 1800,
    },
    {
        id: 3,
        marca: "YPF",
        descripcion: "10w-60",
        tipo: "Sintetico",
        precio: 800,
    },
];


Aceites.push({ id: 4,  marca: "Shell", descripcion: "10w-50", tipo: "Semisintetico", precio: 1500 })

console.log(Aceites);

let filtroCostos = {
    aceite: 1200,
    aire: 800,
    combustible: 2000,
    habitáculo: 800,
}

function cotizador() {
    let nombre = prompt ("Bienvenido, ingrese su nombre y apellido")
    let filtro = prompt("Bienvenido: " + nombre + " " + "\n Ingrese la opción deseada \n"  + "¿Qué filtro necesita? \n - 1 Filtro de aceite \n - 2 Filtro de aire \n - 3 Filtro de combustible \n - 4 Filtro de habitáculo \n - 5 Salir")
    if (filtro == 1) {
        alert("El precio del filtro es " + "$" + (filtroCostos.aceite*1.25))
    } else if (filtro == 2) {
        alert("El precio del filtro es " + "$" + (filtroCostos.aire*1.25))
    } else if (filtro == 3) {
        alert("El precio del filtro es " + "$" + (filtroCostos.combustible*1.25))
    } else if (filtro == 4) {
        alert("El precio del filtro es " + "$" + (filtroCostos.habitáculo*1.25))
    } else if (filtro == 5) {
        return
    } else {
        alert("Número incorrecto. Por favor ingrese una de las opciones")
    }
}

cotizador();


for (let i = 0; i < Aceites.length; i++) {
    console.log(Aceites[i]);
}

let PrecioNuevoEjemplo1 = []

PrecioNuevoEjemplo1 = Aceites.map((aceite) => {
    aceite.precio = aceite.precio * 1.25
    return aceite
})
>>>>>>> 04650fa5e5d4a0972336851292b96309fa1d37f9
