const validacionCampoVacio = (mensaje, e) => {
    const campo = e.target;
    const valorDelCampo = e.target.value;
    if (valorDelCampo.trim().length == 0){
        campo.nextElementSibling.classList.add("error");
        campo.nextElementSibling.innerText = mensaje;
    } else{
        campo.nextElementSibling.classList.remove("error");
        campo.nextElementSibling.innerText = "";
    }
}

const validacionEmailValido = e => {
    const campo = e.target;
    const valorDelCampo = e.target.value;
    const regex = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;
    if (valorDelCampo.trim().length > 5 && !regex.test(valorDelCampo)){
        campo.nextElementSibling.classList.add("error");
        campo.nextElementSibling.innerText = "Por favor ingrese un email valido";
    } else{
        campo.nextElementSibling.classList.remove("error");
        campo.nextElementSibling.innerText = "";
    }

}


fullNameField.addEventListener("blur", (e) => validacionCampoVacio("Completa tu nombre y apellido", e));
addressField.addEventListener("blur", (e) => validacionCampoVacio("Completa tu direccion", e));
phoneNumberField.addEventListener("blur", (e) => validacionCampoVacio("Completa tu numero de telefono", e));
emailField.addEventListener("blur", (e) => validacionCampoVacio("Completa tu email", e));
passwordField.addEventListener("blur", (e) => validacionCampoVacio("Completa tu contraseña", e));
emailField.addEventListener("input", validacionEmailValido)
