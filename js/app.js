let nombre; // Nombre de usuario
let edad; // Edad del usuario
let ocupacion; // Ocupacion de usuario
let porcentajeOcupacion; // Porcentaje de interes para el prestamo
let montoPrestamo; // Cuanto es que quiere de dinero el usuario
let montoInteres; // monto con los interes agregados
let cuotas; // cuotas en la que el usuario quiere devolver el dinero
let montoEnCuotas; 




do{ // Verificador cantidad de caracteres ingresados y la edad minima
    nombre = prompt("Ingresar nombre: ");
    edad = parseInt(prompt("Ingresa tu edad: "));

    if (nombre.length >= 10){
        alert("Error: El nombre debe tener 10 caracteres o menos."); // Error de nombre demaciado largo.
    }

    if(edad <= 18){
        alert("Error: La edad minima para solicitar un prestamo es de 18 años.")
    }

}while (nombre.length > 10 || edad <= 18);

alert("A continuacion le haremos unas preguntas.");


while(true){ // Menu para asigignar un porcentaje de interes al usuario
    ocupacion = parseInt(prompt("Seleciones una opcion.\nYo soy:\n1 - Emplador.\n2 - Emplado\n 3 - Autonomo\nIngresar opcion: ")); // Menu 
    
    if(ocupacion === 1 || ocupacion === 2 || ocupacion === 3){
        break; // Rompe el ciclo al ser verdadera una opcion ingresada
    }else{
        alert("Opcion invalida, por favor ingrese el numero de la opcion deseada."); // alerta de opcion invalida
    };
};

// Asignador de porcentaje dependiendo de la opcion ingresada 
if (ocupacion === 1) { 
    porcentajeOcupacion = 40;
  } else if (ocupacion === 2) {
    porcentajeOcupacion = 60;
  } else {
    porcentajeOcupacion = 90;   
};

function asignador(valorA, valorB){
    if (valorA === 1){
        
    }

}


while(true){
    montoPrestamo = parseInt(prompt("Ingrea el monto del prestamo deseado: "));
    
    if(montoPrestamo >= 10000 && montoPrestamo <= 5000000){
        break;
    }else{
        alert("Error: Monto inavalindo, ingre un monto entre 20.000 y 5.000.000.");
    };
};

let opcionCuotas;
while(true){ // Menu para asigignar un porcentaje de interes al usuario
    opcionCuotas = parseInt(prompt("Selecciones en cuatas cuotas desea pagar. \nCuotas:\n1 - 12.\n2 - 24\n 3 - 36\nIngresar opcion: ")); // Menu 
    
    if(opcionCuotas >= 1 && opcionCuotas <= 3){
        break; // Rompe el ciclo al ser verdadera una opcion ingresada
    }else{
        alert("Opcion invalida, por favor ingrese el numero de la opcion deseada."); // alerta de opcion invalida
    };
};

if (opcionCuotas === 1) { 
    cuotas = 12;
  } else if (opcionCuotas === 2) {
    cuotas = 24;
  } else {
    cuotas = 36;   
}

montoInteres = montoPrestamo * (1 + porcentajeOcupacion / 100);
montoEnCuotas = montoInteres / cuotas;

alert(`Su prestamo seria de $${montoInteres} en ${cuotas} de $${parseInt(montoEnCuotas)}`)

