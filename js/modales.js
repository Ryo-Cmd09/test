// Funcionalidad para los modales
        document.addEventListener('DOMContentLoaded', function() {
            const modalLinks = document.querySelectorAll('[href^="#modal"]');
            modalLinks.forEach(link => {
                link.addEventListener('click', function(e) {
                    e.preventDefault();
                    const modalId = this.getAttribute('href');
                    document.querySelector(modalId).style.display = 'block';
                });
            });
            
            const closeButtons = document.querySelectorAll('.close-modal');
            closeButtons.forEach(button => {
                button.addEventListener('click', function() {
                    this.closest('.modal').style.display = 'none';
                });
            });
            

            window.addEventListener('click', function(e) {
                if (e.target.classList.contains('modal')) {
                    e.target.style.display = 'none';
                }
            });
            
           
            document.addEventListener('keydown', function(e) {
                if (e.key === 'Escape') {
                    document.querySelectorAll('.modal').forEach(modal => {
                        modal.style.display = 'none';
                    });
                }
            });
        });