const scrollToTop = document.getElementById("scrollToTop");//selecciona el elemno del html

//Muestra el boton cuando se baja más de 200px, el .body es para navegadores viejos y el .documentElement es para modernos
window.onscroll = function() {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        scrollToTop.style.display = "block";// si baja 200px se muestra el boton
    } else {
        scrollToTop.style.display = "none";// si todavia no esta en los 200px lo oculta
    }
};

//se ejecuta el evento click y toma la funcion de arriba
scrollToTop.addEventListener("click", function() {
    window.scrollTo({ top: 0, behavior: "smooth" });//window.scrollTo para ir a la parte superior de la pantalla el top:0 indica el comienzo y smooth para que sea suave.
});
