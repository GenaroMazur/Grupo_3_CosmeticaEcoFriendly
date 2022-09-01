let ojo = document.querySelectorAll(".eye");
let password = document.querySelectorAll("#password");
let icon = document.querySelectorAll(".eyeIcon");
function ojos(indice) {
    if (icon[indice].attributes.name.value == "eye-outline") {
        icon[indice].setAttribute("name", "eye-off-outline");
    }
    else {
        icon[indice].setAttribute("name", "eye-outline");
    }

}

ojo[0].addEventListener("click", function () {

    if (password[0].type == "password") {
        password[0].type = "text"
        ojos(0)
    } else {
        password[0].type = "password"
        ojos(0)
    }
});

ojo[1].addEventListener("click", function () {

    if (password[1].type == "password") {
        password[1].type = "text"
        ojos(1)
    } else {
        password[1].type = "password"
        ojos(1)
    }
});