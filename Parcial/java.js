$(document).ready(function() {
    // Efectos de hover para los elementos del menú
    $('nav a').hover(function() {
        $(this).css('color', '#ffd700'); // Cambia el color al pasar el mouse
    }, function() {
        $(this).css('color', '#fff'); // Restaura el color original al salir del hover
    });

    // Ejemplo de animación en el banner (cambia imágenes cada 3 segundos)
    let images = ['imagen1.jpg', 'imagen2.jpg', 'imagen3.jpg'];
    let index = 0;

    function changeImage() {
        $('section').css('background-image', 'url(' + images[index] + ')');
        index = (index + 1) % images.length;
    }

    setInterval(changeImage, 3000); // Cambia la imagen cada 3 segundos
});
$(document).ready(function() {
    $('#miniaturas img').click(function() {
        var ruta = $(this).attr('src');
        $('#imagen-principal img').attr('src', ruta);
    });
});