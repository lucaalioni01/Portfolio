document.getElementById("enviar").addEventListener("click", function(event) {//selecciona el elemno del html y le pone el evento click
    event.preventDefault();//llama al evento

    //Busca los elementos, toma su valor y con saca los espacios vacios
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();
    let errors = [];//almacena los mensajes de error

    // Valida el nombre, solo admite letras y espacios
    const nameRegex = /^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$/;
    if (!name) {//si el campo esta vacio 
        errors.push("El nombre es obligatorio.");
    } else if (!nameRegex.test(name)) {
        errors.push("El nombre solo debe contener letras y espacios.");//Si el nombre es falso entra al error
    }

    // Lo mismo que el name pero con el email
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!email) {
        errors.push("El email es obligatorio.");
    } else if (!emailRegex.test(email)) {
        errors.push("El email no es válido.");
    }

    //Valida que no este vacio sino te deja entrar 
    if (!message) {
        errors.push("El mensaje es obligatorio.");
    }

    // Muestra todos los errores en un alert
    if (errors.length > 0) {
        alert(errors.join("\n"));
    } else {
        alert("Formulario enviado correctamente.");
        console.log("Nombre:", name);
        console.log("Email:", email);
        console.log("Mensaje:", message);
        document.getElementById("contactForm").submit();
    }
});