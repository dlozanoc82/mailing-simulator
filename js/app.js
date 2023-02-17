document.addEventListener('DOMContentLoaded', function(){

    //Elements 
    const inputEmail = document.querySelector('#email');
    const inputAsunto = document.querySelector('#asunto');
    const inputMensaje = document.querySelector('#mensaje');
    const formulario = document.querySelector('#formulario');

    //Listeners
    inputEmail.addEventListener('blur', validar);
    inputAsunto.addEventListener('blur', validar);
    inputMensaje.addEventListener('blur', validar)

    function validar(e){
        if (e.target.value.trim() === '') {
            showAlerts(`El campo ${e.target.id} es obligatorio`, e.target.parentElement);
            return;
        }

        if (e.target.id === 'email' && !validarEmail(e.target.value)) {
            showAlerts('El email no es valido', e.target.parentElement);
            return;
        }
        
        limpiarAlerta(e.target.parentElement);
    }

    function showAlerts(mensaje, referencia) {

        limpiarAlerta(referencia);

        const error = document.createElement('p');
        error.textContent = mensaje;
        error.classList.add('bg-red-600', 'text-white', 'p-2', 'text-center')

        referencia.appendChild(error);

    }
    
    function limpiarAlerta(referencia) {
        const alerta = referencia.querySelector('.bg-red-600');
        if (alerta) {
            alerta.remove();
        }
    }

    function validarEmail(email) {
        const regex =  /^\w+([.-_+]?\w+)@\w+([.-]?\w+)(\.\w{2,10})+$/;
        const resultado = regex.test(email);
        return resultado;
    }
    
})