// botones izq. superior derecha
export const btnReiniciarEjercicio = document.getElementById('btnReiniciarEjercicio');
export const btnSiguienteEjercicio = document.getElementById('btnSiguienteEjercicio');
export const btnEliminarHistorial = document.getElementById('btnEliminarHistorial');

// divs que muestra> ejercicio a hacer y teclas pulsadas
export const ejercicioTeclas = document.getElementById('ejercicioTeclas');
export const pantallaTeclas = document.getElementById('pantallaTeclas');


// div para el teclado virtual
export const tecladoVirtual = document.getElementById('tecladoVirtual');


// div para mostrar la tecla pulsada
export const infoTeclaPresionada = document.getElementById('infoTeclaPresionada');

// Distribucion de teclado
export const distribucionTeclado = [
    [
        { principal: 'ESC', clase: 'tecla-esc', codigo: 'Escape'},
        { principal: 'º', shift: 'ª', altGr: '\\', codigo: 'Backquote'},
        { principal: '1', shift: '!', altGr: '|', codigo: 'Digit1'},
        { principal: '2', shift: '"', altGr: '@', codigo: 'Digit2'},
        { principal: '3', shift: '·', altGr: '#', codigo: 'Digit3'},
        { principal: '4', shift: '$', altGr: '~', codigo: 'Digit4'},
        { principal: '5', shift: '%', altGr: '€', codigo: 'Digit5'},
        { principal: '6', shift: '&', altGr: '¬', codigo: 'Digit6'},
        { principal: '7', shift: '/', codigo: 'Digit7'},
        { principal: '8', shift: '(', codigo: 'Digit8'},
        { principal: '9', shift: ')', codigo: 'Digit9'},
        { principal: '0', shift: '=', codigo: 'Digit0'},
        { principal: "'", shift: '?', codigo: 'Minus'},
        { principal: '¡', shift: '¿', codigo: 'Equal'},
        { principal: 'Back', clase: 'tecla-backspace', codigo: 'Backspace'}
    ],
    [
        { principal: 'Tab', clase: 'tecla-tab', codigo: 'Tab'},
        { principal: 'q', shift: 'Q', codigo: 'KeyQ'},
        { principal: 'w', shift: 'W', codigo: 'KeyW'},
        { principal: 'e', shift: 'E', altGr: '€', codigo: 'KeyE'},
        { principal: 'r', shift: 'R', codigo: 'KeyR'},
        { principal: 't', shift: 'T', codigo: 'KeyT'},
        { principal: 'y', shift: 'Y', codigo: 'KeyY'},
        { principal: 'u', shift: 'U', codigo: 'KeyU'},
        { principal: 'i', shift: 'I', codigo: 'KeyI'},
        { principal: 'o', shift: 'O', codigo: 'KeyO'},
        { principal: 'p', shift: 'P', codigo: 'KeyP'},
        { principal: '`', shift: '^', altGr: '[', codigo: 'BracketLeft'},
        { principal: '+', shift: '*', altGr: ']', codigo: 'BracketRight'},
        { principal: 'Enter', clase: 'tecla-enter', codigo: 'Enter.'}
        
    ],
    [
        { principal: 'Bloq Mayús', clase: 'tecla-caps', codigo: 'CapsLock'},
        { principal: 'a', shift: 'A', codigo: 'KeyA'},
        { principal: 's', shift: 'S', codigo: 'KeyS'},
        { principal: 'd', shift: 'D', codigo: 'KeyD'},
        { principal: 'f', shift: 'F', codigo: 'KeyF'},
        { principal: 'g', shift: 'G', codigo: 'KeyG'},
        { principal: 'h', shift: 'H', codigo: 'KeyH'},
        { principal: 'j', shift: 'J', codigo: 'KeyJ'},
        { principal: 'k', shift: 'K', codigo: 'KeyK'},
        { principal: 'l', shift: 'L', codigo: 'KeyL'},
        { principal: 'ñ', shift: 'Ñ', codigo: 'Semicolon'},
        { principal: '´', shift: '¨', altGr: '{', codigo: 'Quote'},
        { principal: 'ç', shift: 'Ç', altGr: '}', codigo: 'Backslash'},
        { principal: 'Enter', clase: 'tecla-enter', codigo: 'Enter'}
        
    ],
    [
        { principal: 'Shift', clase: 'tecla-shift', codigo: 'ShiftLeft'},
        { principal: '', shift: '', codigo: ''}, 
        { principal: 'z', shift: 'Z', codigo: 'KeyZ'},
        { principal: 'x', shift: 'X', codigo: 'KeyX'},
        { principal: 'c', shift: 'C', codigo: 'KeyC'},
        { principal: 'v', shift: 'V', codigo: 'KeyV'},
        { principal: 'b', shift: 'B', codigo: 'KeyB'},
        { principal: 'n', shift: 'N', codigo: 'KeyN'},
        { principal: 'm', shift: 'M', codigo: 'KeyM'},
        { principal: ',', shift: ';', codigo: 'Comma'},
        { principal: '.', shift: ':', codigo: 'Period'},
        { principal: '-', shift: '_', codigo: 'Slash'},
        { principal: 'Shift', clase: 'tecla-shift', codigo: 'ShiftRight'}
    ],
    [
        { principal: 'Ctrl', clase: 'tecla-ctrl', codigo: 'ControlLeft'},
        { principal: 'Win', clase: 'tecla-meta', codigo: 'MetaLeft'},
        { principal: 'Alt', clase: 'tecla-alt', codigo: 'AltLeft'},
        { principal: 'Espacio', clase: 'tecla-espacio', codigo: 'Space'},
        { principal: 'Alt Gr', clase: 'tecla-alt', codigo: 'AltRight'},
        { principal: 'Win', clase: 'tecla-meta', codigo: 'MetaRight'}, 
        { principal: 'Menu', clase: 'tecla-fn', codigo: 'ContextMenu'},
        { principal: 'Ctrl', clase: 'tecla-ctrl', codigo: 'ControlRight'}
    ]
];