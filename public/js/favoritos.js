let menos = document.querySelector("i.fa-solid.fa-minus");
let mas =  document.querySelector("i.fa-solid.fa-plus");
let cantidad =  document.querySelector("#numero");

let cantidadProductos = 0;

mas.addEventListener("click", ()=>{
    cantidadProductos++;
    if(cantidadProductos >= 100)
    {
        cantidadProductos = 100;
    }
    cantidad.value = cantidadProductos;
});

menos.addEventListener("click", ()=>{
    cantidadProductos--;
    if(cantidadProductos <= 0)
    {
        cantidadProductos = 0;
    }
    cantidad.value = cantidadProductos;
})