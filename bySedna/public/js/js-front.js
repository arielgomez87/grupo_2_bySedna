window.addEventListener("load", function(){

const form = document.querySelector("form-register");

const fullNameField = document.querySelector("input.fullName");
const addressField = document.querySelector("input.address");
const provinceField = document.querySelector("select.province");
const imageUserField = document.querySelector("input.imageUser");
const phoneNumberField = document.querySelector("input.phoneNumber");
const emailField = document.querySelector("input.email");
const passwordField =  document.querySelector("input.password");

const errorFrontUser = false;

const validacionCampoNombre = (e) => {
        const campo = e.target;
        const valorDelCampo = e.target.value;
        if (valorDelCampo.trim().length < 2){
            const errorFrontUser = true;
            campo.classList.add("invalid");
            campo.nextElementSibling.classList.add("error");
            campo.nextElementSibling.innerText = "Nombre y apellido debe tener minimo 2 caracteres";
        } else{
            campo.classList.remove("invalid");
            campo.nextElementSibling.classList.remove("error");
            campo.nextElementSibling.innerText = "";
        }
};

const validacionCampoVacio = (mensaje, e) => {
    const campo = e.target;
    const valorDelCampo = e.target.value;
    if (valorDelCampo.trim().length < 5){
        const errorFrontUser = true;
        campo.classList.add("invalid");
        campo.nextElementSibling.classList.add("error");
        campo.nextElementSibling.innerText = mensaje;
    } else{
        campo.classList.remove("invalid");
        campo.nextElementSibling.classList.remove("error");
        campo.nextElementSibling.innerText = "";
    }
}

const validacionCampoProvincia = (e) => {
    const campo = e.target;
    const valorDelCampo = e.target.value;
    if (valorDelCampo == ""){
        const errorFrontUser = true;
        campo.classList.add("invalid");
        campo.nextElementSibling.classList.add("error");
        campo.nextElementSibling.innerText = "Debe seleccionar una provincia";
    } else{
        campo.classList.remove("invalid");
        campo.nextElementSibling.classList.remove("error");
        campo.nextElementSibling.innerText = "";
    }
};

const validacionCampoImagen= (e)=> {
const campo = e.target;
const fileExtension = e.target.files[0].name.split(".").pop().toLowerCase();
const validExtension = ["jpg", "jpeg", "png", "gif"];
if (!validExtension.includes(fileExtension)){
    const errorFrontUser = true;
    campo.classList.add("invalid");
    campo.nextElementSibling.classList.add("error");
    campo.nextElementSibling.innerText = `Las extensiones de archivos permitidas son:  ${validExtension.join(", ")}`;
} else{
    campo.classList.remove("invalid");
    campo.nextElementSibling.classList.remove("error");
    campo.nextElementSibling.innerText = "";
}
}

const validacionCampoTelefono = (e) => {
    const campo = e.target;
    const valorDelCampo = e.target.value;
    if (valorDelCampo.trim().length < 8){
        const errorFrontUser = true;
        campo.classList.add("invalid");
        campo.nextElementSibling.classList.add("error");
        campo.nextElementSibling.innerText = "Telefono debe tener minimo 8 numeros";
    } else{
        campo.classList.remove("invalid");
        campo.nextElementSibling.classList.remove("error");
        campo.nextElementSibling.innerText = "";
    }
};

const validacionEmailValido = e => {
    const campo = e.target;
    const valorDelCampo = e.target.value;
    const regex = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;
    if (valorDelCampo.trim().length < 5 && !regex.test(valorDelCampo)){
        const errorFrontUser = true;
        campo.classList.add("invalid");
        campo.nextElementSibling.classList.add("error");
        campo.nextElementSibling.innerText = "Por favor ingrese un email valido";
    } else{
        campo.classList.remove("invalid");
        campo.nextElementSibling.classList.remove("error");
        campo.nextElementSibling.innerText = "";
    }
}

const validacionCampoContraseña = (e) => {
    const campo = e.target;
    const valorDelCampo = e.target.value;
    if (valorDelCampo.trim().length < 8){
        const errorFrontUser = true;
        campo.classList.add("invalid");
        campo.nextElementSibling.classList.add("error");
        campo.nextElementSibling.innerText = "Contraseña debe tener minimo 8 caracteres";
    } else{
        campo.classList.remove("invalid");
        campo.nextElementSibling.classList.remove("error");
        campo.nextElementSibling.innerText = "";
    }
};

form.addEventListener("submit", (e)=>{
    if (errorFrontUser){
        e.preventDefault()
    }
})

fullNameField.addEventListener("blur", validacionCampoNombre);
phoneNumberField.addEventListener("blur", validacionCampoTelefono);
provinceField.addEventListener("blur", validacionCampoProvincia);
imageUserField.addEventListener("change", validacionCampoImagen);
addressField.addEventListener("blur", (e) => validacionCampoVacio("Domicilio debe tener minimo 5 caracteres", e));
emailField.addEventListener("blur", (e) => validacionCampoVacio("Completa tu email con minimo 5 caracteres validos", e));
emailField.addEventListener("input", validacionEmailValido);
passwordField.addEventListener("blur", validacionCampoContraseña);


})