/*Realizar el siguiente ejercicio, trabajando con las estaciones del año. 
La tarea es escribir el nombre de una estación en minúsculas cuando se te solicite. 
A continuación, el programa te mostrará la fecha de inicio y fin de esa estación. Poner como default "Eso no es una estación."
Las estaciones y sus fechas son las siguientes:
•    Invierno: Inicio el 21 de junio, fin el 22 de septiembre.
•    Primavera: Inicio el 22 de septiembre, fin el 21 de diciembre.
•    Verano: Inicio el 21 de diciembre, fin el 21 de marzo.
•    Otoño: Inicio el 21 de marzo, fin el 21 de junio.
Recordar escribir el nombre de la estación en minúsculas.  Usar prompt y alerts. 
Hacer 2 versiones: una con if else y switch.*/
/* let nombre = prompt("Ingrese un nombre: ");
alert("Ingresaste el nombre: "+nombre); */

let estacion = prompt("Ingrese el nombre de una estacion (en minusculas): ");
switch(estacion)
{
    case "invierno":
        alert ("fecha inicio: 21 de junio. Fecha fin de estacion: 22 de septiembre.");
        break;
    case "primavera":
        alert ("fecha inicio: 22 de septiembre. Fecha fin de estacion: 21 de diciembre.");
        break;
    case "verano":
        alert ("fecha inicio: 21 de diciembre. Fecha fin de estacion: 21 de marzo.");
        break;
    case "otoño":
        alert ("fecha inicio: 21 de marzo. Fecha fin de estacion: 21 de junio.");
        break;
    default:
        alert("Eso no es una estación.");
        break;
}