/*Escribe un programa que pregunte al usuario una temperatura en grados Celsius y 
la convierta a grados Fahrenheit, 
usando la fórmula: °F = °C * 9/5 + 32. Muestra el resultado al usuario y también indícale 
si la temperatura es cálida (mayor o igual a 32 °F) o fría (menor que 32 °F)*/


let temperatura = parseFloat(prompt('Ingresa la temperatura en grado celsuis'));

let conver_faren = (temperatura * 9/5) + 32;

console.log('La temperatura en Fahrenheit es: ' + 'º'+conver_faren);

if(conver_faren >= 32){
    console.log('La termperatura es calida');
} else if(conver_faren < 32){
    console.log('La temperatura es fria');
}

