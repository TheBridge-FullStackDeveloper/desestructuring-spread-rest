const personas = ["Juan", "Laura", "Patricia", "María", "Paula"];

// console.log(personas[3]);

const [persona1, , , persona] = personas;

// const [p1,p2,p3,p4,p5,p6] = personas
// console.log(p6)

// console.log(personas)
// console.log(persona)
personas.unshift("jose");
// console.log(personas);
// const [p1] = personas;
// console.log(p1);
// console.log(persona1)

const Usuario = {
  nombre: "Javier",
  email: "javi@gmail.com",
  edad: 23,
  registrado: true,
  seguidores: ["Ger", "Gabriel", "Jorge", "Rebeca", "Xavi"],
};

// const {hobbies = ["programacion","ir a clase"],email:correo } = Usuario

// const {nombre, registrado,seguidores} = Usuario
// const [,,,p4] = seguidores
// console.log(p4)

const Pokemon = {
    "count": 1126,
    "next": "https://pokeapi.co/api/v2/pokemon/?offset=20&limit=20",
    "previous": null,
    "results": [
        {
            "name": "bulbasaur",
            "url": "https://pokeapi.co/api/v2/pokemon/1/",
            "type":["plant","poison"]
        },
        {
            "name": "ivysaur",
            "url": "https://pokeapi.co/api/v2/pokemon/2/"
        },
        {
            "name": "venusaur",
            "url": "https://pokeapi.co/api/v2/pokemon/3/"
        }
    ]
}
const {results } = Pokemon
const [pokePlant] = results
const {type} = pokePlant
const [p] = type
// console.log(p)

let arrayMin = [2, 5, 7, 1, 9];
let minimo = Math.min(...arrayMin);
// console.log(minimo)
const array1 = ['patata', 'tomate', 'lechuga'];
const array2 = [1, true, 'chocolate']
const array3 = [...array1,...array2]//concatenar
// console.log(array3)

const objeto1 = {
    a: 10,
    b: 'caracola'
}

const objeto2 = {
    c: 2,
    d: 'cocacola'
}

const objeto3 = {...objeto1,...objeto2} //mergear
// console.log(objeto3)

const Usuario2 = {
    nombre: 'Laura',
    email: 'laura@gmail.com',
    edad: 31,
    registrado: false,
    seguidores: ['Ger', 'Gabriel', 'Angela']
}

const {edad,nombre,email,seguidores,  ...losdemas} = Usuario2

const [p1, ...resto] = seguidores
// console.log(resto)
function listarArticulos(...articulos){//spread
    console.log(articulos);
    const arrayNueva = ["valor",...articulos]//rest
    console.log(arrayNueva)
}

// listarArticulos('Hola', 2, true, {a:3, c:17}, [1,2,3,4])
listarArticulos('Tarjeta de credito', 'Paragüas', 'Mochila')
// listarArticulos(2)








