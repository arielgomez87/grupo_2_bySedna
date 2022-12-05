window.addEventListener("load", function(){
    let formulario = document.querySelector(".form-register");

    
    
    
    // Validacion Email
    const EMAIL_REGEXP = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;
    const input = document.querySelector('input.email');

    function isEmailValid(value) {
 	    return EMAIL_REGEXP.test(value);
        }

    function onInput() {
	    if (isEmailValid(input.value)) {
		input.style.borderColor = 'green';
	} else {
		input.style.borderColor = 'red';
	    }
}

    input.addEventListener('input', onInput);

    // Fin validacion Email


    formulario.addEventListener("submit", function(e){
        e.preventDefault();

        let fullName = document.querySelector("input.fullName" );

        if(fullName.value == ""){
            alert("el campo de Nombre tiene que estar completo");
        } else if( fullName.value.length < 3){
            alert("El campo de Nombre tiene que ser mayor a 3 caracteres")
        }
        
        let address = document.querySelector("input.address" );

        if(address.value == ""){
            alert("el campo del Domicilio tiene que estar completo");
        } else if( address.value.length < 3){
            alert("El campo del Domicilio tiene que ser mayor a 3 caracteres")
        }

        let phoneNumber = document.querySelector("input.phoneNumber" );

        if(phoneNumber.value == ""){
            alert("el campo del Telefono tiene que estar completo");
        } else if( phoneNumber.value.length < 8){
            alert("El campo del Telefono tiene que ser mayor a 8 caracteres")
        }

      
        let password = document.querySelector("input.password" );

        if(password.value == ""){
            alert("el campo del Contraseña tiene que estar completo");
        } else if( password.value.length < 8){
            alert("El campo del Contraseña tiene que ser mayor a 8 caracteres")
        }
        
        
    })
})