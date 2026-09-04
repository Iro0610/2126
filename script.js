const images = document.querySelectorAll(".clickable-image");
const modal = document.getElementById("imageModal");
const modalImage = document.getElementById("modalImage");
const downloadImage = document.getElementById("downloadImage");
const closeModal = document.getElementById("closeModal");

images.forEach((image) => {
  image.addEventListener("click", () => {
    modalImage.src = image.src;
    modalImage.alt = image.alt || "拡大画像";
    downloadImage.href = image.src;
    modal.classList.add("open");
    modal.setAttribute("aria-hidden", "false");
  });
});

function closeImageModal() {
  modal.classList.remove("open");
  modal.setAttribute("aria-hidden", "true");
}

closeModal.addEventListener("click", closeImageModal);

modal.addEventListener("click", (event) => {
  if (event.target === modal) {
    closeImageModal();
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeImageModal();
  }
});
