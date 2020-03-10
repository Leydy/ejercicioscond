// 1) Si hay Sandia en el mercado mostrar en pantalla la cantidad
// de sandias que hay disponibles
var cantidad = 50;

if (cantidad >0 ){
    console.log("Si hay sandias");
}else{
    console.log("No hay sandias");
}

// 2) teniendo 95 soles en la billetera quiero comprar (20, 10, 5, 10, 50) 
// un pantalon que cuesta 15 retornar el monto del vuelto y mostrarlo en pantalla
// si el monto es mayor o igual a 20 indicar que no tienes cambio (Sencillo)
// sino retornar el monto del cambio.
const billetera = 20;

const pantalon = 15;
var vuelto = billetera-pantalon;
console.log(vuelto);
if (vuelto >= 20){
    console.log("No tengo cambio");
}