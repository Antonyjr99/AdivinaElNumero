/*function holaMundo(){
    console.log('Hola Mundo')
}

holaMundo();*/
/*
function mostrarHolaNombre(nombre) {
    console.log(`¡Hola, ${nombre}!`);
  }
  
  mostrarHolaNombre("Alice");
*/
/*
function multipicar(numero){

    resultado= numero * 2;
    console.log(`total ${resultado}`)
}

multipicar(3);
*/
/*
function promedio(numero1,numero2,numero3){

    resultado= (numero1+numero2+numero3)/3;
    console.log(`total ${resultado}`)
}

promedio(3,3,3);*/

function promedio(numero1,numero2){

    if (numero1>numero2){
        resultado=numero1
    }else
    resultado=numero2
      
    console.log(`total ${resultado}`)
}

promedio(2,3);

function cuadrado(numero) {
    return numero * numero;
  }
  
  let resultado = cuadrado(2);
  console.log(resultado);