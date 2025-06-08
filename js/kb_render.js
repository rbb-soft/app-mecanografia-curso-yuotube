import { distribucionTeclado } from "./config.js";

export function renderizarTeclado(shiftActivado,capsLockActivado) {
    
    // Limpiar teclado existente
    tecladoVirtual.innerHTML = '';

    // Crear teclado virtual 
    distribucionTeclado.forEach(fila => {

        // Crear un div para cada fila del teclado
        const filaDiv = document.createElement('div');
        
        // Añadir clase para estilo
        filaDiv.classList.add('fila-teclado');

        // Iterar sobre cada tecla en la fila
        fila.forEach(teclaInfo => {

            // Crear un elemento de botón para la tecla
            const teclaElement = document.createElement('button');
            teclaElement.classList.add('tecla'); // Añadir clase base para estilo

            // Añadir clases específicas si existen
            if (teclaInfo.clase) { 
                teclaInfo.clase.split(' ').forEach(c => teclaElement.classList.add(c));
            }
            // Añadir atributos de datos para identificar la tecla
            teclaElement.dataset.codigo = teclaInfo.codigo; // Para mapeo con teclado físico

            // Añadir texto de la tecla 
            let textoTecla = teclaInfo.principal;

            // Lógica para manejar Shift y Bloq Mayús
            if (capsLockActivado && textoTecla.length === 1 && textoTecla.match(/[a-zñ]/i)) {
                textoTecla = shiftActivado ? textoTecla.toLowerCase() : textoTecla.toUpperCase();
            } // Si Bloq Mayús está activo y Shift también, se invierte el caso
              else if (shiftActivado && teclaInfo.shift) {
                textoTecla = teclaInfo.shift;
            }   // Si Shift está activo y es una letra, se usa el carácter secundario
                else if (shiftActivado && textoTecla.length === 1 && textoTecla.match(/[a-zñ]/i)){
                    textoTecla = textoTecla.toUpperCase();
            }


            // Si la tecla tiene un carácter secundario (Shift), mostrar ambos
            if (teclaInfo.shift && teclaInfo.principal.length === 1 && textoTecla !== teclaInfo.shift) {
                const charPrincipalSpan = document.createElement('span');
                charPrincipalSpan.classList.add('char-principal');
                charPrincipalSpan.textContent = textoTecla;
                
                // Crear un span para el carácter secundario
                const charSecundarioSpan = document.createElement('span');
                charSecundarioSpan.classList.add('char-secundario');
                charSecundarioSpan.textContent = shiftActivado ? teclaInfo.principal : teclaInfo.shift;
                
                // Añadir ambos spans al botón de la tecla
                teclaElement.appendChild(charSecundarioSpan); // Secundario primero para que quede arriba
                teclaElement.appendChild(charPrincipalSpan);
                teclaElement.style.position = 'relative'; // Para posicionar el secundario
            } else {
                teclaElement.textContent = textoTecla;
            }

            // Añadir clase activa si la tecla está activa
            if (teclaInfo.principal === 'Bloq Mayús' && capsLockActivado) {
                teclaElement.classList.add('activa');
            }
            // Añadir clase activa si Shift está activo
            if (teclaInfo.principal === 'Shift' && shiftActivado) {
                teclaElement.classList.add('activa');
            }

            
            filaDiv.appendChild(teclaElement);
        });
        tecladoVirtual.appendChild(filaDiv);
    });
}