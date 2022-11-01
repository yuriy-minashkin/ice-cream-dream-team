// HEADER MODAL
(() => {
  const refs = {
    openHeaderModalBtn: document.querySelector('[data-header-modal-open]'),
    openBurgerModalBtn: document.querySelector('[data-burger-modal-open]'),
    closeHeaderModalBtn: document.querySelector('[data-header-modal-close]'),
    headerModal: document.querySelector('[data-header-modal]'),
  };

  refs.openHeaderModalBtn.addEventListener("click", toggleHeaderModal);
  refs.openBurgerModalBtn.addEventListener('click', toggleHeaderModal);
  refs.closeHeaderModalBtn.addEventListener("click", toggleHeaderModal);

  function toggleHeaderModal() {
    refs.headerModal.classList.toggle("is-hidden");
  }
})();