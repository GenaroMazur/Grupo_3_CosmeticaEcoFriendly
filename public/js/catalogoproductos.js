//icono de corazon
let corazon = document.querySelector(".boton.heartBoton");

corazon.addEventListener("click", function () {
    let icono = this.querySelector("ion-icon");
    icono.setAttribute("name", "heart");
    myP = document.querySelector("ion-icon.heartbuton.md.hydrated");
    myP.style.color = "hotpink";
});
//carousel de produtos
let flecha = document.querySelector(".flecha");
let caja = document.querySelector(".caja");
let posicion = 2;
let valor = -15.52;

let multiplicacion = posicion * valor;
flecha.addEventListener("click", function () {
    caja.style.transform = `translateX(${multiplicacion}vw)`
});

caja.addEventListener("click", function () {
    caja.style.transform = `translateX(${valor}vw)`;
});


