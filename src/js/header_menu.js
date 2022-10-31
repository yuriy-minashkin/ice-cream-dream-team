// ======MENU MODAL BURGER
(() => {
    const refs = {
        openMenuBtn: document.querySelector('[data-menu-open]'),
        closeMenuBtn: document.querySelector('[data-menu-close]'),
        menu: document.querySelector('[data-menu]'),
        menuList: document.querySelector('.mob-menu__list'),
    };

    refs.openMenuBtn.addEventListener('click', toggleMenu);
    refs.closeMenuBtn.addEventListener('click', toggleMenu);
    refs.menuList.addEventListener('click', removeMenu);

    function toggleMenu() {
        refs.menu.classList.toggle('is-hidden');
        document.querySelector('body').classList.toggle('no-scroll');
    }

    function removeMenu() {
        refs.menu.classList.add('is-hidden');
        document.querySelector('body').classList.remove('no-scroll');
    }
})();