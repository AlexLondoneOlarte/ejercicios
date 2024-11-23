let desc10= null;
let desc20=null;
let precio_con_descuento = null;

let total_compra = parseFloat(prompt('Ingresa el total de tu compra'));
let tiene_descuento = pro('¿Tienes un codigo de descuento?, igresa "SI" o "NO"')
//let tiene_descuento = null;

if(tiene_descuento === "SI"){
    if( descuento1 === "DESCUENTO10"){
        precio_con_descuento = total_compra * 0.10;
        console.log('Aplicaste el 10% de decuento, el total de tu compra seria' + precio_con_descuento);

    } 

} else{
    console('No puedes aplicar al descuento');
}