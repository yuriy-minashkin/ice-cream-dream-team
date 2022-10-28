// PRODUCTS MODAL
(() => {
  const refs = {
    openProductsModalBtn: document.querySelector("[data-products-modal-open]"),
    closeProductsModalBtn: document.querySelector("[data-products-modal-close]"),
    productsModal: document.querySelector("[data-products-modal]"),
  };

  refs.openProductsModalBtn.addEventListener("click", toggleProductsModal);
  refs.closeProductsModalBtn.addEventListener("click", toggleProductsModal);

  function toggleProductsModal() {
    refs.productsModal.classList.toggle("is-hidden");
  }
})();