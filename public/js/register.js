let ojo = document.querySelector(".eye");

ojo.addEventListener("click", function() {
    let icon = this.querySelector("ion-icon")
    if(this.nextElementSibling.type === "password"){
        this.nextElementSibling.type = "text";
        icon.setAttribute("name", "eye-outline");
        icon.setAttribute("name", "eye-off-outline");
       }else{
        this.nextElementSibling.type = "password";
        icon.setAttribute("name", "eye-off-outline");
        icon.setAttribute("name", "eye-outline");
       }
});

let ojos = document.querySelector(".eyes");

ojos.addEventListener("click", function() {
    let icon = this.querySelector("ion-icon")
   if(this.nextElementSibling.type === "password"){
    this.nextElementSibling.type = "text";
    icon.setAttribute("name", "eye-outline");
    icon.setAttribute("name", "eye-off-outline");
   }else{
    this.nextElementSibling.type = "password";
    icon.setAttribute("name", "eye-off-outline");
    icon.setAttribute("name", "eye-outline");
   }
});