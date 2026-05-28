// Script para o menu de navegação responsivo
const mobileMenu = document.getElementById('mobile-menu');
        const navLinks = document.getElementById('nav-links');
        const links = document.querySelectorAll('.ul .li a');

        // Abre e fecha o menu ao clicar no botão hambúrguer
        mobileMenu.addEventListener('click', () => {
            navLinks.classList.toggle('ativo');
        });

        // Fecha o menu automaticamente quando um link é clicado
        links.forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('ativo');
            });
        });