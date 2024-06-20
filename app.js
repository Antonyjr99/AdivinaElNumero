//alert('Hola mundo');
//let mensajeDeBienvenida = 'Bienvenido a la aplicación';
//Variables
let numeroInicial = parseInt(prompt("Ingrese el numero inicial del rango a adivinar"));
let numeroFinal = parseInt(prompt("Ingrese el numero final del rango a adivinar"));
let numeroSecreto = Math.floor(Math.random()*(numeroFinal-numeroInicial)+numeroInicial)+1;

let numeroDeUsuario = 0;
let intentos= 1;
//let palabraVeces = 'vez';
let maximosIntentos =3;

while (numeroDeUsuario!=numeroSecreto){
    console.log(numeroSecreto);
    
    numeroDeUsuario = parseInt(prompt(`Me indicas un numero entre ${numeroInicial} y ${numeroFinal} por favor: `));
    if (numeroDeUsuario==numeroSecreto){
        alert('Acertaste el número el numero secreto es : ' + numeroSecreto + `,Lo hiciste en ${intentos} ${intentos == 1 ? 'vez':'veces'} `);
    } else {
        if (numeroDeUsuario > numeroSecreto){
            alert('El numero secreto es menor')
        }else
        alert('El numero secreto es Mayor')
    }
    //intentos= intentos + 1
    //intentos += 1;
    intentos++;
    //palabraVeces = 'veces';
    if (intentos > maximosIntentos){
        alert(`Llegaste al numero maximo de ${maximosIntentos} intentos`);
        break;
    }
}