console.log(document.title);

const parrafo = document.getElementById("gen-1")
parrafo.textContent = 'Generasión 1 Pokimon';

//cambiar fondo con id
const elemento = document.getElementById("gen1");
elemento.style.backgroundColor = "#bc5ae9"; 

//Enlace Pokedex
console.log(window.location.href)
// console.log(document.ULR) es lo mismo

//Enlace Dominio
console.log(window.location.hostname)

//Nodos
console.log(document.querySelectorAll("img"))

//Tambien funciona
/* const para = document.getElementsByClassName("infocard");
const node = document.getElementsByClassName("infocard-lg-img")

console.log(node) */
//Cambiar TODAS las imagenes por otras, URL usando un recorrido bucle for
let images = document.getElementsByClassName("img-fixed");
    for (let i = 0; i < images.length; i++) {
        images[i].src = "https://media.giphy.com/media/2v170e71aanfi/giphy.gif";
    }
//Para cambiar TODOS los stilos haz la misma funcion bucle colocando en
// la extension correspondiente, modifiv¡calo con varios parametros varias a la vez 
// .style.background
const pokemon = document.querySelectorAll(".infocard")

    pokemon.forEach((pokemon) => {
        if (pokemon.innerHTML.includes("Flying")) {
            pokemon.style.backgroundColor = "blue"
        }
    })