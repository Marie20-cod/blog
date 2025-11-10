// Fonction pour faire défiler jusqu’à la section blog
function scrollToBlog() {
  document.getElementById("blog").scrollIntoView({ behavior: "smooth" });
}

// Animation d’apparition simple au scroll
window.addEventListener("scroll", () => {
  const sections = document.querySelectorAll("section");
  sections.forEach(sec => {
    const position = sec.getBoundingClientRect().top;
    if (position < window.innerHeight - 150) {
      sec.classList.add("visible");
    }
  });
});
