// Inicialización de plugins
$(document).ready(function() {
    // Inicializar WOW.js
    new WOW().init();
    
    // Ajustar altura de secciones en móviles
    function adjustSectionHeights() {
        if ($(window).width() < 768) {
            $('.section').css('min-height', $(window).height() + 'px');
        } else {
            $('.section').css('min-height', '');
        }
    }
    
    // Ejecutar al cargar y al redimensionar
    adjustSectionHeights();
    $(window).resize(adjustSectionHeights);
    
    // Mejorar clics en móviles
    $('a, button').on('touchstart', function() {
        $(this).addClass('touch-feedback');
    }).on('touchend', function() {
        $(this).removeClass('touch-feedback');
    });
    
    // Prevenir zoom en inputs en iOS
    document.addEventListener('gesturestart', function(e) {
        e.preventDefault();
    });
});