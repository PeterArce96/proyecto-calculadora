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
            setTimeout(() => {
                location.reload();
            }, 3000);
            
        } else {
            let respuesta = 0;
            error.innerHTML = '';
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
                        setTimeout(() => {
                            location.reload();
                        }, 3000);
                    } else {
                        respuesta = (numero1 / numero2);
                    }    
                    break;

                default:
                    error.innerHTML = 'Seleccionar una operación válida'
                    break;
            }
            resultado.innerHTML = 'Resultado: ' + respuesta;
        }

    } 
    formCalculadora.addEventListener('submit', calcular);
    limpiar.addEventListener('click', resetarFormulario)

    function mostrarError(mensaje) {
        const mensajeError = document.querySelector('#error');
        mensajeError.textContent = mensaje;   
        mensajeError.style.display = 'block'

        
    }

    function resetarFormulario() {
        location.reload();

    }

}

document.addEventListener('DOMContentLoaded', documentReady);