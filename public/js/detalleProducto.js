let menos = document.querySelector("i.fa-solid.fa-minus");
let mas =  document.querySelector("i.fa-solid.fa-plus");
let cantidad =  document.querySelector("#input_product");

let cantidadProductos = 0;

mas.addEventListener("click", ()=>{
    cantidadProductos++;
    if(cantidadProductos >= 100)
    {
        cantidadProductos = 100;
    }
    cantidad.value = cantidadProductos;
    console.log(cantidadProductos);
});

menos.addEventListener("click", ()=>{
    cantidadProductos--;
    if(cantidadProductos <= 0)
    {
        cantidadProductos = 0;
    }
    cantidad.value = cantidadProductos;
    console.log(cantidadProductos);
})
//guardar producto

let corazon = document.querySelector("i.fa-regular.fa-heart");

corazon.addEventListener("click", function () {
 corazon.style.color = "hotpink";
});