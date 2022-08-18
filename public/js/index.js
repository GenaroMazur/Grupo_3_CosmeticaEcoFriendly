//click usuario
let logo = document.querySelector(".foto.usuario");
let menu = document.getElementById("menu");


  logo.addEventListener("click", function() {
        menu.classList.toggle("mostrar")
    });

menu.addEventListener("mouseleave", function() {
    menu.classList.remove("mostrar");
});

