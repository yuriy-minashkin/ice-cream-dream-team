// PRODUCTS MODAL
// (() => {
//   const refs = {
//     openProductsModalBtn: document.querySelectorAll(
//       '[data-products-modal-open]'
//     ),
//     closeProductsModalBtn: document.querySelector(
//       '[data-products-modal-close]'
//     ),
//     productsModal: document.querySelector('[data-products-modal]'),
//   };

//   for (item of refs.openProductsModalBtn) {
//     item.addEventListener('click', toggleProductsModal);
//   };

//   refs.closeProductsModalBtn.addEventListener('click', toggleProductsModal);

//   function toggleProductsModal() {
//     refs.productsModal.classList.toggle('is-hidden');
//   };
// })();


(() => {
  const refs = {
    openProducts1ModalBtn: document.querySelector(
      '[data-products1-modal-open]'
    ),
    openProducts2ModalBtn: document.querySelector(
      '[data-products2-modal-open]'
    ),
    openProducts3ModalBtn: document.querySelector(
      '[data-products3-modal-open]'
    ),

    closeProductsModalBtn: document.querySelector('[data-products-modal-close]'),
    productsModal: document.querySelector('[data-products-modal]'),
  };

  refs.openProducts1ModalBtn.addEventListener('click', toggleProductsModal);
  refs.openProducts2ModalBtn.addEventListener('click', toggleProductsModal);
  refs.openProducts3ModalBtn.addEventListener('click', toggleProductsModal);

  refs.closeProductsModalBtn.addEventListener('click', toggleProductsModal);

  function toggleProductsModal() {
    refs.productsModal.classList.toggle('is-hidden');
  }
})();
