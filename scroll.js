// Seleccionamos el botón por su ID
const scrollToTop = document.getElementById("scrollToTop");

// Mostrar el botón cuando el usuario baja 200 píxeles
window.onscroll = function() {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        scrollToTop.style.display = "block";
    } else {
        scrollToTop.style.display = "none";
    }
};

// Función para volver al principio al hacer clic en el botón
scrollToTop.addEventListener("click", function() {
    window.scrollTo({ top: 0, behavior: "smooth" });
});
