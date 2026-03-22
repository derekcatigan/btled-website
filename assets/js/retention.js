// assets\js\retention.js
const cards = document.querySelectorAll(".card");
const viewer = document.getElementById("viewer");
const viewerImg = document.getElementById("viewerImg");
const viewerTitle = document.getElementById("viewerTitle");
const close = document.getElementById("close");

cards.forEach((card) => {
  card.addEventListener("click", () => {
    const img = card.querySelector("img");
    viewerImg.src = img.src;
    viewerTitle.textContent = card.dataset.title;
    viewer.style.display = "flex";
  });
});

close.addEventListener("click", () => (viewer.style.display = "none"));
viewer.addEventListener("click", (e) => {
  if (e.target === viewer) viewer.style.display = "none";
});
