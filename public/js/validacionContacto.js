window.addEventListener("load", function() {

    let formulario = document.querySelector (".formulario")



  formulario.addEventListener("submit", (e) => {  
   let errores = [];

     let campoNombre = document.querySelector("input#name");
     
     if (campoNombre.value == "") {
       errores.push("El campo de Nombre y Apellido tiene que estar completo");

     } else if (campoNombre.value.length < 2) {
      errores.push("El campo de Nombre y Apellido debe tener almenos 4 caracteres");
     }

     let campoEmail = document.querySelector("input#mail");
     
     if (campoEmail.value == "") {
      errores.push("El campo Email tiene que estar completo");

     } else if (campoEmail.value.length < 5){
      errores.push("El campo de Email debe tener almenos 4 caracteres");
     }

     let campoMensaje = document.querySelector("input#mensaje");
     
     if (campoMensaje.value == "") {
      errores.push("El campo de Consulta tiene que estar completo");

     } else if (campoMensaje.value.length < 8){
      errores.push("El campo de Consulta debe tener almenos 8 caracteres");
     }

     if (errores.length > 0 ){
      e.preventDefault ();

      let ulErrores = document.querySelector(".errores ul");
      
      errores.forEach(error => {
         ulErrores.innerHTML += `<li>${error}</li>`
      });

   }
 });
})