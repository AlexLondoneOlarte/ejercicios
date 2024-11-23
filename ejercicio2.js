let edad = parseInt(prompt('Ingresa tu edad'));
let ingreso = parseFloat(prompt('Cual es tu ingreso mensual'));

if (edad < 18) {
    if (ingreso < 500) {
        console.log('Eres menor de edad y tus ingresos están por debajo de 500.');
    } else if(ingreso >= 2000){
        console.log('Eres menor de edad y ademas tus ingresaos estan por encima del rango')
    }
    else {
        console.log('Tus ingresos están dentro del rango, pero eres menor de edad.');
    }
} else { // Edad >= 18 si es mayor de edad
    if (ingreso < 500) {
        console.log('Eres mayor de edad, pero tus ingresos están por debajo de 500.');
    } else if (ingreso >= 500 && ingreso <= 2000) {
        console.log('Eres mayor de edad y tus ingresos están en el rango, así que puedes acceder al subsidio.');
    } else {
        console.log('Eres mayor de edad, pero tus ingresos están por encima del rango permitido.');
    }
}
