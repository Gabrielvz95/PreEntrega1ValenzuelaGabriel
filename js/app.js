let nombre; // Nombre de usuario
let ocupacion; // Ocupacion de usuario
let porcentajeOcupacion; // Porcentaje de interes para el prestamo
let montoPrestamo;
let montoInteres; 

do{ // Verificador cantidad de caracteres ingresados
    nombre = prompt("Ingresar nombre: ");

    if (nombre.length >= 10){
        alert("Error: El nombre debe tener 10 caracteres o menos."); // Error de nombre demaciado largo.
    }

}while (nombre.length > 10);

alert("A continuacion le haremos unas preguntas.");

while(true){ // Menu para asigignar un porcentaje de interes al usuario
    ocupacion = parseInt(prompt("Seleciones una opcion.\nYo soy:\n1 - Emplador.\n2 - Emplado\n 3 - Autonomo\nIngresar opcion: ")); // Menu 
    
    if(ocupacion === 1 || ocupacion === 2 || ocupacion === 3){
        break; // Rompe el ciclo al ser verdadera una opcion ingresada
    }else{
        alert("Opcion invalida, por favor ingrese el numero de la opcion deseada."); // alerta de opcion invalida
    };
};

if (ocupacion === 1) { // Asignador de porcentaje dependiendo de la opcion ingresada 
    porcentajeOcupacion = 40;
  } else if (ocupacion === 2) {
    porcentajeOcupacion = 60;
  } else {
    porcentajeOcupacion = 90;   
  }

while(true){
    montoPrestamo = parseInt(prompt("Ingrea el monto del prestamo deseado: "));
    
    if(montoPrestamo >= 10000 || montoPrestamo <= 5000000){
        break;
    }else{
        alert("Error: Monto inavalindo, ingre un monto entre 20.000 y 5.000.000.");
    };
};

montoInteres = montoPrestamo * porcentajeOcupacion / 100

console.log(montoInteres)

