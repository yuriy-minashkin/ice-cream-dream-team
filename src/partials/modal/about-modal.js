// ABOUT MODAL
(() => {
  const refs = {
    openAboutModalBtn: document.querySelector("[data-about-modal-open]"),
    closeAboutModalBtn: document.querySelector("[data-about-modal-close]"),
    aboutModal: document.querySelector("[data-about-modal]"),
  };

  refs.openAboutModalBtn.addEventListener("click", toggleAboutModal);
  refs.closeAboutModalBtn.addEventListener("click", toggleAboutModal);

  function toggleAboutModal() {
    refs.aboutModal.classList.toggle("is-hidden");
  }
})();