/*Cálculo de la cantidad de agua diaria**:

Escribe un programa que pregunte al usuario su peso en kilogramos y calcule la cantidad de
agua recomendada en litros que debe consumir diariamente, usando la fórmula: agua (litros) =
peso (kg) * 0.033. Muestra el resultado por pantalla. Además, muestra un mensaje indicándole
si debe aumentar su ingesta de agua si el resultado es menor a 2 litros.*/

let peso = parseFloat(prompt('Ingresa tu peso en kilogramos'));

let agua_recomendado = peso * 0.033;

console.log(`Segun tu peso debes consumir : ${agua_recomendado.toFixed(2)} litros de agua diarimente`);

if(agua_recomendado < 2){
    console.log('Debes aumentar tu ingesta de agua porque es menor a 2 litros');
}



