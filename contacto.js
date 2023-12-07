let btnEnviar = document.getElementById("btn-forms");
let txtNombre = document.getElementById("form-nombre");
let txtCorreo = document.getElementById("form-email");
let txtAsunto = document.getElementById("form-asunto");
let txtMensaje = document.getElementById("form-mensaje");


function validarCorreo() {
    let re = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
    return re.test(txtCorreo.value);
}

btnEnviar.addEventListener("click", function (event) {
    event.preventDefault();

    isValid = true;
    alertValidaciones.innerHTML = "";
    alertValidaciones.style.display = "none";
    txtNombre.style.border = "";
    txtCorreo.style.border = "";
    txtAsunto.style.border = "";
    txtMensaje.style.border = "";

    
        if (txtNombre.value.length < 3) {
            alertValidaciones.innerHTML = "El campo <strong> Nombre </strong> es requerido <br/>";
            alertValidaciones.style.display = "block";
            txtNombre.style.border = "solid thin red";
            isValid = false;
        }
    
        
        if (!validarCorreo()) {
            alertValidaciones.innerHTML += "El campo <strong>Email</strong> es requerido <br/>";
            alertValidaciones.style.display = "block";
            txtCorreo.style.border = "solid thin red";
            isValid = false;
        }
    
        if (txtAsunto.value.length < 3) {
            alertValidaciones.innerHTML += "El campo <strong> Asunto </strong> es requerido <br/>";
            alertValidaciones.style.display = "block";
            txtAsunto.style.border = "solid thin red";
            isValid = false;
        }
    
        if (txtMensaje.value.length < 10) {
            alertValidaciones.innerHTML += "El campo <strong> Mensaje </strong> es requerido <br/>";
            alertValidaciones.style.display = "block";
            txtMensaje.style.border = "solid thin red";
            isValid = false;
        }
    
});
