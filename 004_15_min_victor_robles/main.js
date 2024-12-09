// alertas
// alert("Hola Mundo");

//Variables
let nombre = "Emmanuel";     // recomendable usar let, no var, ya que let estan limitadas el bloque
let apellido = "Sierra";

// Mostrar por consola
console.log(nombre);

// Constantes
const altura = 170;
console.log(altura);
let indice_fuerza = 150

// Concatenación
let concatenacion = nombre + " " + apellido; 
console.log(concatenacion);

// seleccionar elementos del DOM
let datos = document.querySelector("#datos");
datos.innerHTML = `
    <hr>
    <h2>Soy la Caja de Datos</h2>
    <h3>Mi nombre es: ${concatenacion}, yo mido: ${altura} cms</h3>
`;

// Condicionales
if (indice_fuerza >= 170) {
    datos.innerHTML += "<h4>Eres muy fuerte</h4>";  // con += agrego al elemento datos
} else {
    datos.innerHTML += "<h4>Eres un poco débil</h4>";  // con += agrego al elemento datos

};

// Bucles
for (let year = 2020; year <= 2024; year++) {
    datos.innerHTML += `<h4>Estamos en el año: ${year}</h4>`;
}

// Arrays
let nombres = ["Victor", "Francisco", "Pepe"]
let divNombres = document.querySelector("#nombres");

// divNombres.innerHTML = nombres[2];
divNombres.innerHTML = "<h2>Listado de Nombres</h2><ul>";

nombres.forEach(nombre => {     // la función forEach recorre un arreglo
    divNombres.innerHTML += `<li>${nombre}</li>`;
});

// otra forma de hacerlo

for (let nombre of nombres) {
    divNombres.innerHTML += `<li>${nombre}</li>`;
}

divNombres.innerHTML += "</ul>";

// funciones

const miInformacion = (nombre, altura) => {
    let mis_datos = `
        <h2>Soy una caja, proveniente de una función</h2>
        <h3>Mi nombre es ${nombre}</h3>
        <h3>Tengo una altura ${altura}</h3>
    `;

    return mis_datos;
};

console.log(miInformacion("Coco", 50));
const imprimir = () => {    
    let datos = document.querySelector("#funcion");
    datos.innerHTML = miInformacion("Coco", 50);;
};

imprimir();



