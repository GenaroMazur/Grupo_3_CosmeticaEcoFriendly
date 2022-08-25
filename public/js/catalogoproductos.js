
let corazon = document.querySelector(".boton.heartBoton");

corazon.addEventListener("click", function () {
    let icono = this.querySelector("ion-icon");
    icono.setAttribute("name", "heart");
    myP = document.querySelector("ion-icon.heartbuton.md.hydrated");
    myP.style.color = "hotpink";
});

//carousel de produtos
let flecha = document.querySelectorAll(".flecha");
let caja = document.querySelector(".caja");
let productos = document.querySelectorAll(".productos");

function next(){
    caja.style.transform  = `translateX(-15.52vw)`;
    caja.style.transition = "all 0.5s";
}
flecha[1].addEventListener("click", function () {
next()
});
function prev(){
    caja.style.transform  = `translateX(0vw)`;
    caja.style.transition = "all 0.5s";
}
flecha[0].addEventListener("click", function () {
    prev()
});

/*let valor = "-15.52";
let contrario = "15.52";
productos.forEach((producto,i) => {
    let x = i;
        for (i=1; i<x.length; i++){
            flecha[0].addEventListener("click", function () {
            if(x===[1])
            { 
                let multiplicacion = x * valor;
                caja.style.transform = `translateX(${ multiplicacion }vw)`;
            }else
            {
                let derecha = x * contrario;
                flecha[1].addEventListener("click", function () {
                    caja.style.transform = `translateX(${ derecha }vw)`;
                    });
            } 
            });
        }
});
 */



let numero = "-15.52";
caja.addEventListener("click", function () {
    caja.style.transform = `translateX(${ numero }vw)`;
});


