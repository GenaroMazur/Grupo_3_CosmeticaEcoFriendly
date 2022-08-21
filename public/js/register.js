let ojo = document.querySelectorAll(".eye");
let password = document.querySelectorAll(".password")

ojo[0].addEventListener("click", function() {
    let icon = this.querySelector("ion-icon")
    // if(this.nextElementSibling.type === "password"){
    //     this.nextElementSibling.type = "text";
    //     icon.setAttribute("name", "eye-outline");
    //     icon.setAttribute("name", "eye-off-outline");
    //    }else{
    //     this.nextElementSibling.type = "password";
    //     icon.setAttribute("name", "eye-off-outline");
    //     icon.setAttribute("name", "eye-outline");
    //    }
    if (password[0].type == "password"){
        password[0].type = "text"
    }else{
        password[0].type = "password"
    }
});

// let ojos = document.querySelector(".eyes");

ojo[1].addEventListener("click", function() {
//     let icon = this.querySelector("ion-icon")
//    if(this.nextElementSibling.type === "password"){
//     this.nextElementSibling.type = "text";
//     icon.setAttribute("name", "eye-outline");
//     icon.setAttribute("name", "eye-off-outline");
//    }else{
//     this.nextElementSibling.type = "password";
//     icon.setAttribute("name", "eye-off-outline");
//     icon.setAttribute("name", "eye-outline");
//    }
   if (password[1].type == "password"){
    password[1].type = "text"
}else{
    password[1].type = "password"
}
});