let numeroSecreto = 0;
let intentos = 0;
let listasNumerosSorteados= [];
let numeroMaximo= 10;

function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento(){
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);

    //console.log(intentos);
    if(numeroDeUsuario===numeroSecreto){
        asignarTextoElemento('p',`Acertaste el número en ${intentos} ${(intentos===1) ? 'vez':'veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }else {
        if(numeroDeUsuario>numeroSecreto){
            asignarTextoElemento('p','El número secreto es menor')
        }else{
            asignarTextoElemento('p','El número secreto es mayor')
        }
        intentos++;
        limpiarCaja();
    }
    return;
}

function limpiarCaja(){
    document.querySelector('#valorUsuario').value = ''
}

function generarNumeroSecreto() {
     
    let numeroGenerado = Math.floor(Math.random()*10)+1;
    //Si ya usamos todos los numeros
    if(listasNumerosSorteados.length == numeroMaximo){
        asignarTextoElemento('p','Ya se sortearon todos los numeros posibles')
    } else {
        //Si el numero generado esta incluido en la lista
        if(listasNumerosSorteados.includes(numeroGenerado)){
            return generarNumeroSecreto();

        }else {
            listasNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
}
function CondicionesIniciales(){
    asignarTextoElemento('h1','Juego del número secreto!');
    asignarTextoElemento('p','Indicar un número del 1 al 10');
    numeroSecreto= generarNumeroSecreto();
    intentos = 1;
    console.log(numeroSecreto);
}
function reiniciarJuego(){
    //limpiar caja
    limpiarCaja();
    //Indicar mensaje de intervalo de numeros
    //Generar el numéro aleatorio
    CondicionesIniciales();
    //Iniciar el numero de intentos
    document.querySelector('#reiniciar').setAttribute('disabled','true');
    //Deshabilitar el boton de nuevo juego
}
CondicionesIniciales();
