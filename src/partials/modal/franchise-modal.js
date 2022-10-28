// FOOTER FRANCHISE MODAL
(() => {
  const refs = {
    openFranchiseModalBtn: document.querySelector("[data-franchise-modal-open]"),
    closeFranchiseModalBtn: document.querySelector("[data-franchise-modal-close]"),
    franchiseModal: document.querySelector("[data-franchise-modal]"),
  };

  refs.openFranchiseModalBtn.addEventListener("click", toggleFranchiseModal);
  refs.closeFranchiseModalBtn.addEventListener("click", toggleFranchiseModal);

  function toggleFranchiseModal() {
    refs.franchiseModal.classList.toggle("is-hidden");
  }
})();