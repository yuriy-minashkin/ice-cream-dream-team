// PRODUCTS MODAL
(() => {
  const refs = {
    openProductsModalBtn: document.querySelectorAll(
      '[data-products-modal-open]'
    ),
    closeProductsModalBtn: document.querySelector(
      '[data-products-modal-close]'
    ),
    productsModal: document.querySelector('[data-products-modal]'),
  };

  for (item of refs.openProductsModalBtn) {
    item.addEventListener('click', toggleProductsModal);
  };

  refs.closeProductsModalBtn.addEventListener('click', toggleProductsModal);

  function toggleProductsModal() {
    refs.productsModal.classList.toggle('is-hidden');
  };
})();
