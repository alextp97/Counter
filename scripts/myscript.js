//Con window.onload evito el error de que addEventListener tiene valor nulo
window.onload = function () {


//Zona de declaración de variables
//Asigno una constante a cada elemento del html que me hace falta
const num = document.getElementById('counter');

const start = document.querySelector('#start');
const pause = document.querySelector('#pause');
const reset = document.querySelector('#reset');

const countUp = document.querySelector('#count-up');
const countDown = document.querySelector('#count-down');

const setTo = document.getElementById('set-input');
const step = document.getElementById('step-input');

const setButton =  document.querySelector('#setButton');

//Declaro las variables que necesitan ser inicializadas
let count = 0; //Inicializo el contador a 0
let pausado = false; //El contador al inicio no puede estar pausado, por eso lo inicializo a false
let uCountUp = true; //Al inicio, el contador se inicializa hacia delante, por lo que lo pongo true directamente
let uCountDown = false; //El contador hacia atrás se pone false al inicio, pues no tiene sentido un contador negativo
let contador;

//Código del método para cuando pulse el botón de Start
start.addEventListener('click', () => {

    //Con la función setInterval establezco a 1000 ms que es lo mismo que 1 segundo
    contador = setInterval(() => {

        //Si el botón de contar hacia delante está activo, el contador empieza a sumar los segundos
        if(uCountUp) {
            count += parseInt(step.value);
        }
        //Sino, si el botón de contar hacia atrás es el que está activo, se empieza a ejecutar este código
        else if (uCountDown) {
            count -= parseInt(step.value);

            //Si el contador llega a ser un número menor que 0, el contador no muestra los números negativos
            if (count < 0) {
                
                count = 0;
            }
        }
        else {
            count = 0;
        }

        //Igualo num al resultado del count para mostrarlo en la caja de texto
        num.value = count;
        
    }, 1000);

});

//Cuando el usuario pulse el botón de pause, se ejecutará este método
pause.addEventListener('click', () => {

    //Si el botón es seleccionado, se pone pausado en true y se detiene el intervalo y el contador se detiene
    if (pausado = true) {
        clearInterval(contador)
    }
    else {
        pausado = false;
    }
});

//Código para cuando el usuario hace click en el botón de resetear
reset.addEventListener('click', () => {

    //El valor de la variable count pasa a ser 0 y se le asigna a num.value para que así se le muestre al usuario 0 en el contador
    count = 0;
    num.value = count;
});


//Código para el evento de contar hacia delante
countUp.addEventListener('click', () => {
    
    //Si el botón de contar hacia delante está en false se pone true el botón de contar hacia atrás
    if (uCountUp = false) {
        
        uCountDown = true;
    } 
    else {
        uCountUp = true;
        uCountDown = false;
    }
});

//Código para el evento de contar hacia delante
countDown.addEventListener('click', () => {

    //Si el botón de contar hacia atrás está false, entonces el botón de contar hacia delante se pone true
    if (uCountDown = false) {
        uCountUp = true;
    
    } else {
        uCountDown = true;
        uCountUp = false;
    }
});

//Código del evento para el botón de donde quiero que empieze a contar 
setButton.addEventListener('click', () => {
    
    //Convierto la string de la caja de texto a número para que se muestre y sume o reste segundos correctamente
    count = parseInt(setTo.value);
    num.value = count; //Le paso a num el número almacenado y convertido en count

});

}