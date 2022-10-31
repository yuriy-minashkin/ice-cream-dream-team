// BURGER MENU

(() => {
    const menuBtnRef = document.querySelector("[mobile-menu-button]");
    const mobileMenuRef = document.querySelector("[mobile-menu]");
    const mobileLink = document.querySelectorAll(".mob-nav__link");
    menuBtnRef.addEventListener("click", () => {
        const expanded =
            menuBtnRef.getAttribute("aria-expanded") === "true" || false;
        menuBtnRef.classList.toggle("is-open");
        menuBtnRef.setAttribute("aria-expanded", !expanded);
        mobileMenuRef.classList.toggle("is-open");
    });
    mobileLink.addEventListener("click", () => {        
        mobileMenuRef.classList.remove("is-open"); 
        menuBtnRef.classList.remove("is-open");
    });
})();