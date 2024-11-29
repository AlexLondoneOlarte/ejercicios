//funcion para verificar si un numero es par

function numero_par(numero){
    
    if(numero %2 === 0 ){
        return 'par';
    }else{
        return 'impar';
    }
   
      

}
let num = 9;
let par = numero_par(num);

console.log(`El numero ${num} es ${par}`)