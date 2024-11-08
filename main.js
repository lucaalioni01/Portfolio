document.getElementById("enviar").addEventListener("click", function(event) {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();
    let errors = [];

    // Validar nombre (solo letras y espacios)
    const nameRegex = /^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$/;
    if (!name) {
        errors.push("El nombre es obligatorio.");
    } else if (!nameRegex.test(name)) {
        errors.push("El nombre solo debe contener letras y espacios.");
    }

    // Validar email
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!email) {
        errors.push("El email es obligatorio.");
    } else if (!emailRegex.test(email)) {
        errors.push("El email no es válido.");
    }

    // Validar mensaje (no vacío)
    if (!message) {
        errors.push("El mensaje es obligatorio.");
    }

    // Mostrar errores o datos en la consola
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