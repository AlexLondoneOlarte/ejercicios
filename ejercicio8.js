/*Escribe un programa que pida al usuario que ingrese una contraseña. Si la contraseña es
"seguro123", muestra un mensaje de bienvenida. Si no, indica que la contraseña es incorrecta
y permite al usuario volver a intentarlo hasta que ingrese la contraseña correcta. */

let contraseña = prompt('Ingresa la contraseña');

while (contraseña !== "seguro123") {
    alert('Contraseña incorrecta, intenta nuevamente.');
    contraseña = prompt('Ingresa la contraseña'); // Usa la misma variable sin redeclarar
}

alert('Bienvenido, es la contraseña correcta.'); // Se muestra al final, solo si la contraseña es correcta
