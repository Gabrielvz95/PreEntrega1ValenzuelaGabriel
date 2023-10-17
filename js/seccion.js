// Iniciar session


const iniciarSeccion = document.getElementById("form_inicio_session");

iniciarSeccion.addEventListener("submit", function(e){
    e.preventDefault(); // Aquí se corrige el nombre del parámetro

    const UsuarioSeccion = document.getElementById("usuarioIngresado").value;
    const contraseñaIngresada = document.getElementById("passwordIngresada").value;

    console.log(UsuarioSeccion);
    console.log(contraseñaIngresada);
});
