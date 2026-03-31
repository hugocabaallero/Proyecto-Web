const USUARIO_1 = "hugo";
const PASS_1 = "caballero";

const USUARIO_2 = "user";
const PASS_2 = "user";

function verificarCredenciales() {
    let usuarioInput = document.getElementById("usuario").value;
    let passInput = document.getElementById("password").value;
    let mensajeError = document.getElementById("mensaje-error");

    if ( (usuarioInput === USUARIO_1 && passInput === PASS_1) || 
         (usuarioInput === USUARIO_2 && passInput === PASS_2) ) {

        document.getElementById("pantalla-login").style.display = "none";
        document.getElementById("contenido-principal").classList.remove("oculto");

    } else {
        
        mensajeError.innerHTML = "Contraseña o usuario incorrecto. Acceso denegado.";
        
        document.getElementById("password").value = "";
    }
}

function cerrarSesion() {
    location.reload();
}