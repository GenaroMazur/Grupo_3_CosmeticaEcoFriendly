
let corazon = document.querySelector(".boton.heartBoton");

corazon.addEventListener("click", function () {
    let icono = this.querySelector("ion-icon");
    icono.setAttribute("name", "heart");
    myP = document.querySelector("ion-icon.heartbuton.md.hydrated");
    myP.style.color = "hotpink";
});


//carousel de produtos
let flecha = document.querySelectorAll(".flecha");
let caja = document.querySelectorAll(".caja");
let productos = document.querySelectorAll(".productos");

//shampoo
function nextA(){
    caja[0].style.transform  = `translateX(-77.5vw)`;
    caja[0].style.transition = "all 0.5s";
}

flecha[1].addEventListener("click", function () {
nextA()
});

function prevA(){
    caja[0].style.transform  = `translateX(0vw)`;
    caja[0].style.transition = "all 0.5s";
}

flecha[0].addEventListener("click", function () {
    prevA()
});
//acondicionador
function nextB(){

    caja[1].style.transform  = `translateX(-77.5vw)`;
    caja[1].style.transition = "all 0.5s";
}

flecha[3].addEventListener("click", function () {
nextB()
});

function prevB(){
    caja[1].style.transform  = `translateX(0vw)`;
    caja[1].style.transition = "all 0.5s";
}

flecha[2].addEventListener("click", function () {
    prevB()
});
//jabon
function nextC(){

    caja[2].style.transform  = `translateX(-77.5vw)`;
    caja[2].style.transition = "all 0.5s";
}

flecha[5].addEventListener("click", function () {
nextC()
});

function prevC(){
    caja[2].style.transform  = `translateX(0vw)`;
    caja[2].style.transition = "all 0.5s";
}

flecha[4].addEventListener("click", function () {
    prevC()
});

//desodorante
function nextD(){

    caja[3].style.transform  = `translateX(-77.5vw)`;
    caja[3].style.transition = "all 0.5s";
}

flecha[7].addEventListener("click", function () {
nextD()
});

function prevD(){
    caja[3].style.transform  = `translateX(0vw)`;
    caja[3].style.transition = "all 0.5s";
}

flecha[6].addEventListener("click", function () {
    prevD()
});

/*let valor = "-15.52";
let contrario = "15.52";
productos.forEach((producto,i) => {
    let x = i;
        for (i=1; i<x.length; i++){
            flecha[0].addEventListener("click", function () {
            } 
            });
        }
});
 */

let filter = document.querySelector(".iconoFIlter")
let contenido = document.querySelector(".contenido");

filter.addEventListener("click", function(){
  contenido.classList.toggle("contenido_ver")
})

