let corazon = document.querySelector(".boton.heartBoton");

corazon.addEventListener("click", function() {
let icono = this.querySelector("ion-icon");    
    icono.setAttribute("name", "heart-outline");
    icono.setAttribute("name", "heart");
    myP = document.querySelector ("ion-icon.heartbuton.md.hydrated");
    myP.style.color = "hotpink";
});