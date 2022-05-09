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

let count = 0; //Inicializo el contador a 0
let pausado = false; //El contador al inicio no puede estar pausado, por eso lo inicializo a false
let uCountUp = true; //Al inicio, el contador se inicializa hacia delante, por lo que lo pongo true directamente
let uCountDown = false; //El contador hacia atrás se pone false al inicio, pues no tiene sentido un contador negativo
let contador;

//Código del método para cuando pulse el botón de Start
start.addEventListener('click', () => {

    console.log(start.value);
    contador = setInterval(() => {

        if(uCountUp) {
            count += parseInt(step.value);
        }
        else if (uCountDown) {
            count -= parseInt(step.value);

            if (count < 0) {
                
                count = 0;
            }
        }
        else {
            count = 0;
        }

        num.value = count;
        
    }, 1000);

});

pause.addEventListener('click', () => {

    if (pausado = true) {
        clearInterval(contador)
    }
    else {
        pausado = false;
    }
});

reset.addEventListener('click', () => {

    count = 0;
    num.value = count;
})


countUp.addEventListener('click', () => {
    //console.log('+1')
    if (uCountUp) {
        uCountUp = false;
        uCountDown = true;
    } else {
        uCountUp = true;
        uCountDown = false;
    }
})

countDown.addEventListener('click', () => {
    if (uCountDown) {
        uCountDown = false;
        uCountUp = true;
    } else {
        uCountDown = true;
        uCountUp = false;
    }
})

setButton.addEventListener('click', () => {
    
    count = parseInt(setTo.value);
    num.value = count;
    setTo.value = '';
})

}