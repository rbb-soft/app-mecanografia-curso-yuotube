// Funcion que genera los ejercicios de tipeo
export function ejerciciosTipeo(indice = 0){
    const ejercicios = [
        "asdf fdsa asdf fdsa jklñ ñlkj jklñ ñlkj",
        "qwer rewq qwer rewq uiop poiu uiop poiu",
        "zxcv vcxz zxcv vcxz mñlk lkmñ mñlk lkmñ",
        "asdf jklñ asdf jklñ qwer uiop qwer uiop",
        "qazx xzaq qazx xzaq wsdc cdws wsdc cdws",
        "wert trew wert trew iopñ ñpoi iopñ ñpoi",
        "asdf fdsa qazx xzaq wsdc cdws asdf fdsa",
        "zxcv vcxz asdf fdsa qwer rewq zxcv vcxz",
        "mñlk lkmñ jklñ ñlkj mñlk lkmñ jklñ ñlkj",
        "qwer rewq jklñ ñlkj qazx xzaq wsdc cdws",
        "asdf fdsa jklñ ñlkj uiop poiu zxcv vcxz",
        "wsdc cdws asdf fdsa lkmñ mñlk wsdc cdws",
        "lkjh hjkl lkmñ mñlk qazx xzaq wsdc cdws",
        "asdf qwer zxcv jklñ uiop lkmñ qazx wsdc",
        "mñlk ñlkj lkmñ ñlkj qazx xzaq wsdc cdws",
        "asdf jklñ qwer uiop zxcv mñlk qazx wsdc",
        "asdf fdsa qazx xzaq jklñ ñlkj asdf fdsa",
        "qwer rewq uiop poiu lkmñ mñlk qazx xzaq",
        "asdf fdsa jklñ ñlkj mñlk lkmñ wsdc cdws",
        "zxcv asdf jklñ uiop qwer lkmñ qazx wsdc",
        "asdf qazx qwer zxcv jklñ lkmñ wsdc cdws",
        "qwer jklñ uiop lkmñ asdf mñlk wsdc qazx",
        "asdf jklñ qwer zxcv qazx lkmñ mñlk cdws",
        "zxcv qazx asdf jklñ qwer lkmñ wsdc mñlk",
        "wsdc cdws qazx xzaq lkmñ mñlk jklñ ñlkj",
        "asdf qwer jklñ uiop mñlk lkmñ wsdc cdws",
        "qazx wsdc jklñ lkmñ asdf zxcv qwer uiop",
        "asdf jklñ qwer uiop lkmñ mñlk qazx xzaq",
        "asdf qazx wsdc jklñ qwer zxcv uiop mñlk",
        "qwer jklñ asdf uiop zxcv lkmñ wsdc cdws"
    ].map(ej => ej.split(""));
    ejercicios[indice].forEach(
    (letra)=>{
        const span = document.createElement("span");
        span.textContent = letra;
        document.getElementById("ejercicioTeclas").appendChild(span)
    });
}

// funcion que compara el ejercicio de tipeo con lo que se ha escrito
export function compararTipeo() {
    const ejercicio = document.getElementById('ejercicioTeclas').childNodes;
    const pantalla = document.getElementById('pantallaTeclas').childNodes;

    pantalla.forEach((span, i) => {
        if (ejercicio[i] && span.textContent === ejercicio[i].textContent) {
            span.style.color = 'black'; // Coincide: color normal
        } else {
            span.style.color = 'red'; // No coincide: marcar en rojo
        }
    });
}
