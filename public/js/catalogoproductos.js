
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


function next(i){
    caja[i].style.transform  = `translateX(-77.5vw)`;
    caja[i].style.transition = "all 0.5s";
}

function prev(i){
    caja[i].style.transform  = `translateX(0vw)`;
    caja[i].style.transition = "all 0.5s";
}

flecha.forEach((arrow,indice)=>{
    
    if(indice % 2 == 0){
        arrow.addEventListener("click",function(){
            prev(Math.trunc(indice/2))
        })
    } else {
        arrow.addEventListener("click",function(){
            next(Math.trunc(indice/2))
        })
    }
})

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

