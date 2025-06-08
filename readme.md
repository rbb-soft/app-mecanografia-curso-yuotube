# 🧠 App de Mecanografía con Teclado Virtual

Este es el proyecto final del curso completo de JavaScript desde cero, publicado en YouTube.  
Una aplicación web interactiva para practicar mecanografía, que incluye un teclado virtual en español extendido, detección de teclas presionadas y evaluación en tiempo real.

📺 **Video del proyecto**: [https://youtu.be/UgGkwEk-B60](https://youtu.be/UgGkwEk-B60)

[Demo](https://rbb-soft.github.io/app-mecanografia-curso-yuotube)

---

## ✨ Características

- Visualización en tiempo real del teclado virtual.
- Detección de errores al escribir.
- Conteo de palabras por minuto (WPM).
- Modo oscuro.
- Detección de teclas especiales (incluyendo `Shift`, `Enter`, `Backspace`, etc).
- Manejo parcial de `Caps Lock` (limitado por el navegador).
- 100% JavaScript puro (sin frameworks).

---

## 🧩 Estructura del proyecto

```bash
.
└── index.html/
    ├── js/
    │   ├── config.js
    │   ├── main.js
    │   ├── kb_render.js
    │   ├── handler.js
    │   └── exercises.js
    └── css/
        └── style.css

