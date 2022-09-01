window.addEventListener("load", function() {

    let formulario = document.querySelector (".formulario")



  formulario.addEventListener("submit", (e) => {
      e.preventDefault ();

     let campoNombre = document.querySelector("input#name");
     
     if (campoNombre.value == "") {
        alert("El campo de nombre y apellido tiene que estar completo");

     } else if (campoNombre.value.length < 4)
     alert("El campo de nombre y apellido debe tener almenos 4 caracteres");
    

     let campoEmail = document.querySelector("input#mail");
     
     if (campoEmail.value == "") {
        alert("El campo email tiene que estar completo");

     } else if (campoEmail.value.length < 4)
     alert("El campo de email debe tener almenos 4 caracteres");

     let campoMensaje = document.querySelector("input#mensaje");
     
     if (campoMensaje.value == "") {
        alert("El campo de mensaje tiene que estar completo");

     } else if (campoMensaje.value.length < 4)
     alert("El campo de mensaje debe tener almenos 4 caracteres");
    });
})