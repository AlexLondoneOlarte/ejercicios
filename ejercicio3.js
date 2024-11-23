let calcula_iva = null;
let total = null;

let importe = prompt('ingresa el importe de tu compra');
let iva = prompt('¿que tipo de iva esta aplicado  "basico", "reducido", "super reducido"?')
importe = parseFloat(importe);

if(iva === "basico"){
 calcula_iva = importe * 0.10;
 total = calcula_iva + importe;
 console.log(`El importe del producto es ${importe}, el IVA es ${calcula_iva} entonces el total incluido IVA seria ${total}` );

} else if( iva === "reducido"){
calcula_iva = importe * 0.05;
total = calcula_iva + importe;
  console.log(`El importe del producto es ${importe}, el IVA es ${calcula_iva} entonces el total incluido IVA seria ${total}`);  

} else if( iva === "super reducido"){
    calcula_iva = importe * 0.02;
    total = calcula_iva + importe;
      console.log(`El importe del producto es ${importe}, el IVA es ${calcula_iva} entonces el total incluido IVA seria ${total}`);

}else {
    console.log("Tipo de IVA no reconocido. Por favor ingresa 'básico', 'reducido' o 'super reducido'.");
}
