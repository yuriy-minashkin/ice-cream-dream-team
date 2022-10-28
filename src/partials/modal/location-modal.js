// FOOTER LOCATION MODAL
(() => {
  const refs = {
    openLocationModalBtn: document.querySelector("[data-location-modal-open]"),
    closeLocationModalBtn: document.querySelector("[data-location-modal-close]"),
    locationModal: document.querySelector("[data-location-modal]"),
  };

  refs.openLocationModalBtn.addEventListener("click", toggleLocationModal);
  refs.closeLocationModalBtn.addEventListener("click", toggleLocationModal);

  function toggleLocationModal() {
    refs.locationModal.classList.toggle("is-hidden");
  }
})();