//funcion para cacular el  cuadrado de un numero

function cuadrado(numero){
    let resultado = numero ** 2;
    return resultado;

}

let ingreso_numero = 2;
let numeroin = cuadrado(ingreso_numero);

console.log('el cuadrado de: ' + ingreso_numero +' es: ' + numeroin);