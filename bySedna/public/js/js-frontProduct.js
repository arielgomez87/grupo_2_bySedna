window.addEventListener("load", function(){

const form = document.querySelector("form");

    const nameField = document.querySelector("input.name");
    const priceField = document.querySelector("input.price");
    const discountField = document.querySelector("input.discount");
    const sizesField = document.querySelector("select.sizes");
    const descriptionField = document.querySelector("textarea.description");
    const productImageField = document.querySelector("input.productImage");
    
    const errorFrontProduct = false;

    const validacionCampoNombre = (e) => {
            const campo = e.target;
            const valorDelCampo = e.target.value;
            if (valorDelCampo.trim().length < 5){
                errorFrontProduct = true
                campo.classList.add("invalid");
                campo.nextElementSibling.classList.add("error");
                campo.nextElementSibling.innerText = "Completa el nombre del producto con minimo 5 caracteres";
            } else{
                campo.classList.remove("invalid");
                campo.nextElementSibling.classList.remove("error");
                campo.nextElementSibling.innerText = "";
            }
    };
    
    const validacionCampoPrecio = (e) => {
        const campo = e.target;
        const valorDelCampo = e.target.value;
        if (valorDelCampo.trim().length < 4){
            errorFrontProduct = true
            campo.classList.add("invalid");
            campo.nextElementSibling.classList.add("error");
            campo.nextElementSibling.innerText = "Completa el valor del producto con minimo 4 digitos";
        } else{
            campo.classList.remove("invalid");
            campo.nextElementSibling.classList.remove("error");
            campo.nextElementSibling.innerText = "";
        }
};

    const validacionCampoDescuento = (e) => {
        const campo = e.target;
        const valorDelCampo = e.target.value;
        if (valorDelCampo.trim().length < 1){
            errorFrontProduct = true
            campo.classList.add("invalid");
            campo.nextElementSibling.classList.add("error");
            campo.nextElementSibling.innerText = "Completa el descuento del producto con minimo 1 digito";
        } else{
            campo.classList.remove("invalid");
            campo.nextElementSibling.classList.remove("error");
            campo.nextElementSibling.innerText = "";
    }
}

    const validacionCampoTalle = (e) => {
        const campo = e.target;
        const valorDelCampo = e.target.value;
        if (valorDelCampo == ""){
            errorFrontProduct = true
            campo.classList.add("invalid");
            campo.nextElementSibling.classList.add("error");
            campo.nextElementSibling.innerText = "Elige un talle o mas del producto";
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
        errorFrontProduct = true
        campo.classList.add("invalid");
        campo.nextElementSibling.classList.add("error");
        campo.nextElementSibling.innerText = `Las extensiones de archivos permitidas son:  ${validExtension.join(", ")}`;
    } else{
        campo.classList.remove("invalid");
        campo.nextElementSibling.classList.remove("error");
        campo.nextElementSibling.innerText = "";
    }
    }
    
    const validacionCampoDescripcion = (e) => {
        const campo = e.target;
        const valorDelCampo = e.target.value;
        if (valorDelCampo.trim().length < 10){
            errorFrontProduct = true
            campo.classList.add("invalid");
            campo.nextElementSibling.classList.add("error");
            campo.nextElementSibling.innerText = "Completa una descripcion del producto con minimo 10 caracteres";
        } else{
            campo.classList.remove("invalid");
            campo.nextElementSibling.classList.remove("error");
            campo.nextElementSibling.innerText = "";
        }
    };

    form.addEventListener("submit", (e)=>{
        if (errorFrontProduct){
            e.preventDefault()
        }
    })

    
    nameField.addEventListener("blur", validacionCampoNombre);
    priceField.addEventListener("blur", validacionCampoPrecio);
    discountField.addEventListener("blur", validacionCampoDescuento);
    sizesField.addEventListener("blur", validacionCampoTalle);
    productImageField.addEventListener("change", validacionCampoImagen);
    descriptionField.addEventListener("blur", validacionCampoDescripcion);
    })