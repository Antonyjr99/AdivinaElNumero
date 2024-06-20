//alert('Hola mundo');
//let mensajeDeBienvenida = 'Bienvenido a la aplicación';
//Variables
let numeroSecreto = 3;
let numeroDeUsuario = 0;
let intentos= 1;
let palabraVeces = 'vez';

while (numeroDeUsuario!=numeroSecreto){
    console.log(numeroDeUsuario);
    
    numeroDeUsuario = prompt("Me indicas un numero entre 1 y 10 por favor: ")
    if (numeroDeUsuario==numeroSecreto){
        alert('Acertaste el número el numero secreto es : ' + numeroSecreto + `,Lo hiciste en ${intentos} ${palabraVeces} `);
    } else {
        if (numeroDeUsuario > numeroSecreto){
            alert('El numero secreto es menor')
        }else
        alert('El numero secreto es Mayor')
    }
    intentos= intentos + 1
    palabraVeces = 'veces';
}