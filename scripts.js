console.log(document.title);

const parrafo = document.getElementById("gen-1")
parrafo.textContent = 'Generasión 1 Pokimon';

//cambiar fondo con id
const elemento = document.getElementById("gen1");
elemento.style.backgroundColor = "#bc5ae9"; 

console.log(document.title);

//Enlace Pokedex
console.log(window.location.href)

//Enlace Dominio
console.log(window.location.hostname)

const para = document.getElementsByClassName("infocard");
const node = document.getElementsByClassName("infocard-lg-img")

console.log(node)
//Cambiar TODAS las imagenes por otras, URL usando un recorrido bucle for
let images = document.getElementsByClassName("img-fixed");
    for (let i = 0; i < images.length; i++) {
        images[i].src = "https://media.giphy.com/media/2v170e71aanfi/giphy.gif";
    }
//Para cambiar TODOS los stilos haz la misma funcion bucle colocando 
// la extension correspondiente que pueden ser varias a la vez .style.background
const fly = document.getElementsByClassName("itype flying")

let volador = document.getElementsByClassName("itype flying");
    for (let i = 0; i < fly.length; i++) {
        fly[i].style.background = "blue";
    }