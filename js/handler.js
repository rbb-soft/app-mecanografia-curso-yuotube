import { renderizarTeclado } from "./kb_render.js"
import { pantallaTeclas } from "./config.js";
import { compararTipeo } from "./exercises.js";

// funcion que maneja la pulsación de teclas
export function manejarPulsacionTecla(teclaInfo, teclaElement,shiftActivado,capsLockActivado) {
    let valorTecla = teclaInfo.principal;
    // evaluar si es letra con expresion regular
    const esLetra = valorTecla.length === 1 && valorTecla.match(/[a-zñ]/i);
    
    // Lógica para Shift y Bloq Mayús
    if (teclaInfo.principal === 'Bloq Mayús') {
        capsLockActivado = !capsLockActivado;
        renderizarTeclado(shiftActivado,capsLockActivado); 
        infoTeclaPresionada.textContent = 'Bloq Mayús:' + capsLockActivado ? 'Activado' : 'Desactivado';
        return;
    }

    // si la tecla es Shift, alternar su estado
    if (teclaInfo.principal === 'Shift') {
        shiftActivado = !shiftActivado;
        renderizarTeclado(shiftActivado,capsLockActivado);
        infoTeclaPresionada.textContent = 'Shift: ' + shiftActivado ? 'Activado' : 'Presionado' ;
        return;
    }
     
    // Determinar el carácter a mostrar
    if (shiftActivado && teclaInfo.shift) {
        valorTecla = teclaInfo.shift;
    }// Si Shift está activo y es una letra, convertir a mayúscula
    else if (shiftActivado && esLetra) { 
        valorTecla = valorTecla.toUpperCase();
    }// Si Bloq Mayús está activo y es una letra, convertir a mayúscula
    else if (capsLockActivado && esLetra) { 
        valorTecla = shiftActivado ? valorTecla.toLowerCase() : valorTecla.toUpperCase();
    }

    // Actualizar información de la tecla presionada
    infoTeclaPresionada.textContent = valorTecla;
    
    const span = document.createElement("span");

    switch (valorTecla) {
        case 'Back':
            // para eliminar el ultimo span si existe!
            if (pantallaTeclas.lastChild) {
                pantallaTeclas.removeChild(pantallaTeclas.lastChild);
            }
            break;
        case 'Espacio':
            // para agragar el espacio al text content del span
            span.textContent = " ";
            pantallaTeclas.appendChild(span);
            break;
        case 'Alt':
        case 'Ctrl':
        case 'Tab' :
        case 'Menu':
        case 'Alt Gr':
        case 'Enter':
            break;
        default:
            // para agragar el el resto de los caracteres al text content del span
            span.textContent = valorTecla;
            pantallaTeclas.appendChild(span);
            break;
    }

    // Efecto visual en la tecla presionada
    if (teclaElement && teclaInfo.principal !== 'Bloq Mayús' && teclaInfo.principal !== 'Shift') {
        teclaElement.classList.add('activa');
        setTimeout(() => {
            teclaElement.classList.remove('activa');
        }, 150);
    }
    compararTipeo();
}