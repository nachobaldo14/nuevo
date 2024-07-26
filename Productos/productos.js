"use strict";


let arrayProductos = ["fideosTirabuzon", "arroz", "galletitasRumba", "cocaCola", "levite", "limpiadorFabuloso", "hamburguesasPaty", "aceiteNatura", "yogurtIlolay", "harinaPureza"];
let arrayPrecios = [1400, 2100 , 700, 2800, 1370, 2300, 3400, 1700, 1950, 1100];
let arrayCantidad = [28, 50, 25, 34, 20, 15, 37, 21, 40, 22];

let cantidadBotones = document.querySelectorAll("button");

for (let i = 0; i < cantidadBotones.length; i++) {
    cantidadBotones[i].addEventListener("click", ()=> {
        let cantidad = document.querySelectorAll("input")[i].value; //asignamos la cantidad en el valor i del input/boton
        if (cantidad > 0 && arrayCantidad[i] - cantidad >= 0) {
            agregarCarrito(i, cantidad);
            arrayCantidad[i] = arrayCantidad[i] - cantidad          //restas la cantidad y se sigue guardando en el mismo array
            ocultarMensajeError(i);
        } else if (cantidad > arrayCantidad[i]) {
            mostrarMensajeError(i)
        }
    });
}

function agregarCarrito(i, cantidad) {
    let subtotal = cantidad * arrayPrecios[i];
    let totalActual =+ document.getElementById("total").innerText;  //=+ para que sea tipo numerico
    document.getElementById("total").innerText = totalActual + subtotal;
}

function mostrarMensajeError(i){
    let elemento = document.getElementById("errorMensaje" + i);     //con esto simulamos que tenemos los ID "errorMensaje0-1-2" etc     
    elemento.classList.add("ocultarMensaje");
}

function ocultarMensajeError(i){
    let elemento = document.getElementById("errorMensaje" + i);
    elemento.classList.remove("ocultarMensaje");
}