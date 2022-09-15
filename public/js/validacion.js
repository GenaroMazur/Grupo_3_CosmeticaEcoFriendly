const formulario = document.getElementById('formulario');
const inputs = document.querySelectorAll('#formulario input');
let prueba = document.querySelectorAll("#password");
let con = document.querySelectorAll(".formulario__validacion-estado");
let imagen = document.querySelector("#file");
let ext = [".jpg", ".png", ".jpeg"]

const expresiones = {
    name: /^[a-zA-Zà-ü\s]{2,16}$/, // acepta-letras,acentos,pueden llevar espacios,acepta de 4 a 16
    lastname:/^[a-zA-Zà-ü\s]{2,16}$/,// acepta-letras,acentos,pueden llevar espacios,acepta de 4 a 16
	password: /^.{8,15}$/, // acepta de 6 a 15 digitos.
	userEmail: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,// acepta todo tipo de caracter numero e simbolo
}

const campos = {
	lastname: false,
	name: false,
	password: false,
	userEmail: false,
    user: false
}

const validarFormulario = (e) => {
	switch (e.target.name) {
		case "lastname":
			validarCampo(expresiones.lastname, e.target, 'lastname');
		break;
		case "name":
			validarCampo(expresiones.name, e.target, 'name');
		break;
		case "password":
			validarCampo(expresiones.password, e.target, 'password');
			validarPassword2();
		break;
		case "coPass":
			validarPassword2();
		break;
		case "userEmail":
			validarCampo(expresiones.userEmail, e.target, 'userEmail');
		break;
	}
}




const validarCampo = (expresion, input, campo) => {
	if(expresion.test(input.value)){
		document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-incorrecto');
		document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-correcto');
		document.querySelector(`#grupo__${campo} i`).classList.add('fa-check-circle');
		document.querySelector(`#grupo__${campo} i`).classList.remove('fa-times-circle');
		document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.remove('formulario__input-error-activo');
		campos[campo] = true;
	} else {
		document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-incorrecto');
		document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-correcto');
		document.querySelector(`#grupo__${campo} i`).classList.add('fa-times-circle');
		document.querySelector(`#grupo__${campo} i`).classList.remove('fa-check-circle');
		document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.add('formulario__input-error-activo');
		campos[campo] = false;
	}
}

const validarPassword2 = () => {
	const inputPassword1 = prueba[0]
	const inputPassword2 = prueba[1]

	if(inputPassword2.value === '' || inputPassword1.value !== inputPassword2.value){
		document.getElementById(`grupo__coPass`).classList.add('formulario__grupo-incorrecto');
		document.getElementById(`grupo__coPass`).classList.remove('formulario__grupo-correcto');
		document.querySelector(`#grupo__coPass i`).classList.add('fa-times-circle');
		document.querySelector(`#grupo__coPass i`).classList.remove('fa-check-circle');
		document.querySelector(`#grupo__coPass .formulario__input-error`).classList.add('formulario__input-error-activo');
		campos['password'] = false;
	} else {
		document.getElementById(`grupo__coPass`).classList.remove('formulario__grupo-incorrecto');
		document.getElementById(`grupo__coPass`).classList.add('formulario__grupo-correcto');
		document.querySelector(`#grupo__coPass i`).classList.remove('fa-times-circle');
		document.querySelector(`#grupo__coPass i`).classList.add('fa-check-circle');
		document.querySelector(`#grupo__coPass .formulario__input-error`).classList.remove('formulario__input-error-activo');
		campos['password'] = true;
	}
}
imagen.addEventListener("blur", function(){
	if (!ext.some(exts=>{
		return imagen.value.endsWith(exts)
	})){
		document.querySelector(`#grupo__image .formulario__input-error`).classList.add('formulario__input-error-activo');
		document.getElementById(`grupo__image`).classList.add('formulario__grupo-incorrecto');
	} 
})


inputs.forEach((input) => {
	input.addEventListener('keyup', validarFormulario);
	input.addEventListener('blur', validarFormulario);
});

formulario.addEventListener('submit', (e) => {

	if(campos.lastname && campos.name && campos.password && campos.userEmail ){

		document.getElementById('formulario__mensaje-exito').classList.add('formulario__mensaje-exito-activo');
		setTimeout(() => {
			document.getElementById('formulario__mensaje-exito').classList.remove('formulario__mensaje-exito-activo');
		}, 5000);

		document.querySelectorAll('.formulario__grupo-correcto').forEach((icono) => {
			icono.classList.remove('formulario__grupo-correcto');
		});
	} else {
		e.preventDefault();
		document.getElementById('formulario__mensaje').classList.add('formulario__mensaje-activo');
		setTimeout(() => {
			document.getElementById('formulario__mensaje').classList.remove('formulario__mensaje-activo');
		}, 10000);
	}
});

