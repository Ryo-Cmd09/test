// Efecto de barra de navegación al hacer scroll
document.addEventListener('DOMContentLoaded', function() {
    let lastScroll = 0;
    const navbar = document.querySelector('.navbar-default');
    const navbarHeight = navbar.offsetHeight;

    // Añade padding al body para compensar la navbar fija
    document.body.style.paddingTop = navbarHeight + 'px';

    window.addEventListener('scroll', function() {
        const currentScroll = window.pageYOffset;
        
        if (currentScroll <= 0) {
            // Estamos en la parte superior
            navbar.classList.remove('scrolled-up');
            navbar.classList.remove('scrolled');
            return;
        }
        
        if (currentScroll > lastScroll && !navbar.classList.contains('scrolled')) {
            // Scroll hacia abajo - esconder navbar
            navbar.classList.remove('scrolled-up');
            navbar.classList.add('scrolled');
        } else if (currentScroll < lastScroll && navbar.classList.contains('scrolled')) {
            // Scroll hacia arriba - mostrar navbar
            navbar.classList.remove('scrolled');
            navbar.classList.add('scrolled-up');
        }
        
        lastScroll = currentScroll;
    });
});