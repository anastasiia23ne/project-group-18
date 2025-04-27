(() => {
    const refs = {
        openMenuBtn: document.querySelector('[data-menu-open]'),
        closeMenuBtn: document.querySelector('[data-menu-close]'),
        menu: document.querySelector('[data-menu]'),
        menuLinks: document.querySelectorAll('[data-menu] a')
    };

    refs.openMenuBtn.addEventListener('click', toggleMenu);
    refs.closeMenuBtn.addEventListener('click', toggleMenu);

    refs.menu.addEventListener('click', (event) => {
        if (event.target === refs.menu) {
            toggleMenu();
        }
    });

    refs.menuLinks.forEach(link => {
        link.addEventListener('click', toggleMenu);
    });

    function toggleMenu() {
        refs.menu.classList.toggle('is-open');
    }
})();