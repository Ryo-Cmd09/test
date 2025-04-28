// Control del menú mobile y animaciones
document.addEventListener('DOMContentLoaded', function() {
    // Detectar si es móvil
    const isMobile = window.matchMedia("(max-width: 768px)").matches;
    
    // Efecto especial para la página actual
    if (isMobile) {
        const currentPage = window.location.pathname.split('/').pop();
        const navLinks = document.querySelectorAll('.navbar-nav a');
        
        navLinks.forEach(link => {
            const linkPage = link.getAttribute('href');
            
            if (linkPage === currentPage || 
               (currentPage === '' && linkPage === 'index.html')) {
                link.classList.add('current-page');
                
                // Animación constante para el enlace activo
                setInterval(() => {
                    link.style.transform = 'scale(1.05)';
                    setTimeout(() => {
                        link.style.transform = 'scale(1)';
                    }, 1000);
                }, 2000);
            }
        });
    }
    
    // Cerrar menú al hacer clic en un enlace (solo móvil)
    const navLinks = document.querySelectorAll('.navbar-nav a');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            if (isMobile) {
                const navbarToggle = document.querySelector('.navbar-toggle');
                if (!navbarToggle.classList.contains('collapsed')) {
                    navbarToggle.click(); // Cierra el menú
                }
            }
        });
    });
});