//click usuario
let foto = document.querySelector(".foto.usuario");
let menu = document.querySelector("div#menu");


  foto.addEventListener("click", function() {
        menu.classList.toggle("mostrar")
    });

menu.addEventListener("mouseleave", function() {
    menu.classList.remove("mostrar");
});

