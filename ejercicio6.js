/*Escribe un programa que pregunte al usuario su nota final (de 0 a 10) y muestre la
clasificación correspondiente: "Suspenso" (menos de 5), "Aprobado" (de 5 a 6.9), "Notable"
(de 7 a 8.9) o "Sobresaliente" (9 o más)*/

alert("Ingresa tu nota, según sea el caso:\n" +
    "- Si tu nota es menor a 5 estás SUSPENDIDO\n" +
    "- Si tu nota es de 5 a 6.9 estás APROBADO\n" +
    "- Si tu nota es de 7 a 8.9 tu calificación es NOTABLE\n" +
    "- Si tu nota es de 9 a más tu calificación es SOBRESALIENTE");

let nota = parseFloat(prompt('Ingresa tu nota'));

if(nota < 5){
    console.log(`Estas SUSPENDIDO ya que tu nota es: ${nota}`);

} else if(nota >=5 && nota <= 6.9){
    console.log(`Segun tu calificacion estas APROBADO: ${nota}`);

} else if(nota >=7 && nota <= 8.9){
    console.log(`Segun tu calificacion tu nota es NOTABLE: ${nota}`);

} else if(nota >= 9 && nota <=10){
    console.log(`Segun tu calificacion tu nota es SOBRESALIENTE: ${nota}`);
}else{
    console.log('Ingresate un valor incorrecto')
}