/*•    Invierno: Inicio el 21 de junio, fin el 22 de septiembre.
•    Primavera: Inicio el 22 de septiembre, fin el 21 de diciembre.
•    Verano: Inicio el 21 de diciembre, fin el 21 de marzo.
•    Otoño: Inicio el 21 de marzo, fin el 21 de junio. */

let estacion = prompt("Ingrese el nombre de una estacion (en minusculas): ");

if (estacion == "invierno")
    {
        alert ("fecha inicio: 21 de junio. Fecha fin de estacion: 22 de septiembre.");
    }
else if (estacion == "primavera")
    {
        alert ("fecha inicio: 22 de septiembre. Fecha fin de estacion: 21 de diciembre.");
    }
else if (estacion == "verano")
    {
        alert ("fecha inicio: 21 de diciembre. Fecha fin de estacion: 21 de marzo.");
    }
else if(estacion == "otoño")
    {
        alert ("fecha inicio: 21 de marzo. Fecha fin de estacion: 21 de junio.");
    }
 else
 {
    alert("Eso no es una estación.");
 }
