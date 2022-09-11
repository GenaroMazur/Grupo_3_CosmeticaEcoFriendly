let ojo = document.querySelectorAll(".eye");
let password = document.querySelectorAll("#password");
let icon = document.querySelectorAll(".eyeIcon");

ojo.forEach((eye,index) => {
    eye.addEventListener("click",function(){
        if (icon[index].attributes.name.value == "eye-outline") {
            icon[index].setAttribute("name", "eye-off-outline");
            password[index].type = "text"
        }
        else {
            icon[index].setAttribute("name", "eye-outline");
            password[index].type = "password"
        }
    })
})