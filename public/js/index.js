//click usuario
let foto = document.querySelector(".div-user-img");
let menu = document.querySelector("#menu");


  foto.addEventListener("click", function() {
        menu.classList.toggle("mostrar")
    });

menu.addEventListener("mouseleave", function() {
    menu.classList.remove("mostrar");
});

