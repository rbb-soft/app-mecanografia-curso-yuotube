import { renderizarTeclado } from "./kb_render.js";
import {  manejarPulsacionTecla } from "./handler.js";
import { ejerciciosTipeo } from "./exercises.js";
import { infoTeclaPresionada, distribucionTeclado,btnReiniciarEjercicio, btnSiguienteEjercicio, btnEliminarHistorial, pantallaTeclas, ejercicioTeclas} from "./config.js";


let shiftActivado   =   false;
let capsLockActivado=   false;
let nroEjercicio = localStorage.getItem("nroEjercicio") ? parseInt(localStorage.getItem("nroEjercicio")) : 0;


// funcion que maneja la pulsacion de teclas
document.addEventListener('keydown', function(event) {
    // Prevenir comportamiento por defecto
    event.preventDefault();

   // Obtener el código de la tecla presionada
   const codigoTeclaPresionada = event.code; 

   // Encontrar la tecla virtual correspondiente en el DOM
   const teclaVirtual = document.querySelector('.tecla[data-codigo="' + codigoTeclaPresionada + '"]');
   
    // Mostrar información de la tecla presionada
    if (teclaVirtual) {
        let infoTeclaFisica = null;

        // Iterar sobre las filas del teclado
        for (const fila of distribucionTeclado) { 
            const encontrada = fila.find(t => t.codigo === codigoTeclaPresionada);
            if (encontrada) {
                infoTeclaFisica = encontrada;
                break;
        
            }
        }

        // si infoTeclaFisica es null, no se encontró la tecla en la distribución del teclado
        if (infoTeclaFisica) {
            // Si es Shift o CapsLock, manejar su estado interno y re-renderizar
            if (infoTeclaFisica.principal === 'Shift') {
               shiftActivado = true; // Mantener activo mientras se presiona físicamente
               renderizarTeclado(shiftActivado,capsLockActivado);
               teclaVirtual.classList.add('activa'); // Solo efecto visual
               infoTeclaPresionada.textContent = 'Shift: Presionado (físico)';
               return;

            }
            manejarPulsacionTecla(infoTeclaFisica, teclaVirtual,shiftActivado,capsLockActivado);

        }
    }   

});

// funcion que maneja la pulsación de teclas al soltarla
document.addEventListener('keyup', function(event) {
    const codigoTeclaLiberada = event.code;
    const teclaVirtual = document.querySelector('.tecla[data-codigo="' + codigoTeclaLiberada + '"]');
    if (teclaVirtual) {
        teclaVirtual.classList.remove('activa'); // Quitar efecto visual

        if (codigoTeclaLiberada === 'ShiftLeft' || codigoTeclaLiberada === 'ShiftRight') {
            shiftActivado = false;
            renderizarTeclado(shiftActivado,capsLockActivado);
            infoTeclaPresionada.textContent = 'Shift: Liberado (físico)';
            
        }
        if(event.getModifierState('CapsLock')){
            capsLockActivado = true;
            renderizarTeclado(shiftActivado,capsLockActivado);
        }else{
            capsLockActivado = false;
            renderizarTeclado(shiftActivado,capsLockActivado);
        }

    }
});

// empezar desde cero
btnEliminarHistorial.addEventListener("click",function(e){
    e.preventDefault();
    nroEjercicio = 0;
    localStorage.removeItem("nroEjercicio");
    ejercicioTeclas.innerHTML = "";
    ejerciciosTipeo(0);
});
// reiniciar el ejercicio
btnReiniciarEjercicio.addEventListener("click",function(e){
    e.preventDefault();
    pantallaTeclas.innerHTML = "";
});
// pasar al siguiente ejercicio
btnSiguienteEjercicio.addEventListener("click",function(e){
    e.preventDefault();
    nroEjercicio++;
    ejercicioTeclas.innerHTML = "";
    ejerciciosTipeo(nroEjercicio);
    pantallaTeclas.innerHTML="";
    localStorage.setItem("nroEjercicio",JSON.stringify(nroEjercicio));
});

renderizarTeclado(shiftActivado,capsLockActivado);
ejerciciosTipeo(nroEjercicio);