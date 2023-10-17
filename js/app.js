let nombre; // Nombre de usuario
let edad; // Edad del usuario
let ganaciasMensuales; // Cuanto gana el usuario por mes
let ocupacion; // Ocupacion de usuario
let porcentajeOcupacion; // Porcentaje de interes para el prestamo
let montoPrestamo; // Cuanto es que quiere de dinero el usuario
let montoInteres; // monto con los interes agregados
let cuotas; // cuotas en la que el usuario quiere devolver el dinero
let montoEnCuotas; 



// Verificador cantidad de caracteres ingresados y la edad minima
do{ 
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

// Verifica si los ingresos mensuales son suficientes para solicitar un préstamo
do {
    ganaciasMensuales = parseInt(prompt("¿Cuanto gana por mes "));

    if ( ganaciasMensuales < 200000){
        alert("Sus ganacias mensaules no son suficiente para solicitar un prestamo");

    }
} while( ganaciasMensuales < 200000)

// Menu para asigignar un porcentaje de interes al usuario

do {
    ocupacion = parseInt(prompt("Seleccione una opción:\n1 - Empleador\n2 - Empleado\n3 - Autónomo\nIngresar opción: ")); // Menú 

    if (ocupacion >= 1 && ocupacion <= 3) {
        // Asignador de porcentaje dependiendo de la opción ingresada 
        if (ocupacion === 1) {
            porcentajeOcupacion = 40;
        } else if (ocupacion === 2) {
            porcentajeOcupacion = 60;
        } else {
            porcentajeOcupacion = 90;
        }
    } else {
        alert("Opción inválida, por favor ingrese el número de la opción deseada."); // Alerta de opción inválida
    }
} while (ocupacion < 1 || ocupacion > 3);


// Asigna el monto solicitado por el usuario a una variable y verifica que sea dentro de lo permitido

do {
    montoPrestamo = parseInt(prompt("Ingresa el monto del prestamo deseado: "));

    if ( montoPrestamo < 10000 || montoPrestamo > 500000) {
        alert(" Error: Monto invalido, ingrese un monto entre $10.000 y $5.000.000")
    }
} while (montoPrestamo < 10000 || montoPrestamo > 5000000);

// Menu para asigignar un porcentaje de interes al usuario
let opcionCuotas;

do {
    opcionCuotas = parseInt(prompt("Seleccione en cuantas cuotas desea pagar:\n1 - 12\n2 - 24\n3 - 36\nIngresar opción: ")); // Menú 

    if (opcionCuotas >= 1 && opcionCuotas <= 3) {
        // Asigna el valor de la cuota elegida en una variable para ser un divisor
        if (opcionCuotas === 1) {
            cuotas = 12;
        } else if (opcionCuotas === 2) {
            cuotas = 24;
        } else {
            cuotas = 36;
        }
    } else {
        alert("Opción inválida, por favor ingrese el número de la opción deseada."); // Alerta de opción inválida
    }
} while (opcionCuotas < 1 || opcionCuotas > 3);


// Calculula el interes y las cuotas
montoInteres = montoPrestamo * (1 + porcentajeOcupacion / 100);
montoEnCuotas = montoInteres / cuotas;

// Muestra el prestamo con intereses y las cuotas a pagar 
alert(`Su prestamo seria de $${montoInteres} en ${cuotas} de $${parseInt(montoEnCuotas)}`)

