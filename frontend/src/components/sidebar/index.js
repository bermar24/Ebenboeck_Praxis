// Referenz auf den Button
const backToTopBtn = document.getElementById("backToTopBtn");

// Event-Listener für das Scrollen
window.addEventListener("scroll", () => {
  // Wenn weiter als 300px gescrollt wurde, Button einblenden
  if (window.scrollY > 300) {
    backToTopBtn.classList.add("visible");
  } else {
    backToTopBtn.classList.remove("visible");
  }
});
