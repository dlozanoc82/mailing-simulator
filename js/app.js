document.addEventListener('DOMContentLoaded', function(){

    const email = {
        email: '',
        asunto: '',
        mensaje: ''
    }

    //Elements 
    const inputEmail = document.querySelector('#email');
    const inputAsunto = document.querySelector('#asunto');
    const inputMensaje = document.querySelector('#mensaje');
    const formulario = document.querySelector('#formulario');
    const btnSubmit = document.querySelector('#formulario button[type="submit"]')

    //Listeners
    inputEmail.addEventListener('input', validar);
    inputAsunto.addEventListener('input', validar);
    inputMensaje.addEventListener('input', validar)

    function validar(e){
        if (e.target.value.trim() === '') {
            showAlerts(`El campo ${e.target.id} es obligatorio`, e.target.parentElement);
            email[e.target.name] = '';
            comprobarEmail();
            return;
        }

        if (e.target.id === 'email' && !validarEmail(e.target.value)) {
            showAlerts('El email no es valido', e.target.parentElement);
            email[e.target.name] = '';
            comprobarEmail();
            return;
        }
        
        limpiarAlerta(e.target.parentElement);

        email[e.target.name] = e.target.value.trim().toLowerCase();
        console.log(email);

        comprobarEmail();

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

    function comprobarEmail(){
        if(Object.values(email).includes('')){
            btnSubmit.classList.add('opacity-50');
            btnSubmit.disabled = true;
        }else{
            btnSubmit.classList.remove('opacity-50');
            btnSubmit.disabled = false;
        }
    }
    
})