'use strict';

const documentReady = () => {
    const formCalculadora = document.querySelector('#formCalculadora');
    const limpiar = document.querySelector('#limpiar')
    

    const calcular = (e) => {
        e.preventDefault();

        const numero1 = parseInt(document.querySelector('#numero1').value);
        const numero2 = parseInt(document.querySelector('#numero2').value);
        const operador = document.querySelector('#operador').value;
        const resultado = document.querySelector('#resultado');
        
        
        if (isNaN(numero1) || isNaN(numero2)) {
            mostrarError('Completar el formulario')

            
        } else {
            let respuesta = 0;
            // error.innerHTML = '';
            switch (operador) {
                case '+':
                    respuesta = (numero1 + numero2);
                    break;
                case '-':
                    respuesta = (numero1 - numero2);    
                    break;
                case '*':
                    respuesta = (numero1 * numero2);    
                    break;
                case '/':
                    if (numero1 === 0 || numero2 === 0) {
                        mostrarError('Los operadores no pueden ser cero')

                    } else {
                        respuesta = (numero1 / numero2);
                    }    
                    break;

                default:
                    mostrarError('Seleccionar una operación válida')
                    break;
            }
            
            resultado.innerHTML = 'Resultado: ' + Intl.NumberFormat('de-DE').format(respuesta);
            resultado.classList.add('resultado')
        }

    } 
    formCalculadora.addEventListener('submit', calcular);
    limpiar.addEventListener('click', resetarFormulario)

    function mostrarError(mensaje) {
        const mensajeError = document.querySelector('#error');
        mensajeError.textContent = mensaje;   
        mensajeError.classList.add('error')
        setTimeout(() => {
            mensajeError.remove();
        }, 3000);
        
    }

    function resetarFormulario() {
        location.reload();

    }

}

document.addEventListener('DOMContentLoaded', documentReady);