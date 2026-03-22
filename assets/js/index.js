/* ================= HERO CAROUSEL ================= */
const heroSlidesContainer = document.querySelector(".hero-slides");
const heroSlides = document.querySelectorAll(".hero-slide");
const prevBtn = document.querySelector(".hero-btn.prev");
const nextBtn = document.querySelector(".hero-btn.next");

let heroIndex = 0;
const heroInterval = 5000;

if (heroSlidesContainer && heroSlides.length && prevBtn && nextBtn) {
  function showHeroSlide(index) {
    heroSlidesContainer.style.transform = `translateX(-${index * 100}%)`;
  }

  function nextHeroSlide() {
    heroIndex = (heroIndex + 1) % heroSlides.length;
    showHeroSlide(heroIndex);
  }

  function prevHeroSlide() {
    heroIndex = heroIndex === 0 ? heroSlides.length - 1 : heroIndex - 1;
    showHeroSlide(heroIndex);
  }

  nextBtn.addEventListener("click", nextHeroSlide);
  prevBtn.addEventListener("click", prevHeroSlide);
  setInterval(nextHeroSlide, heroInterval);
}

/* ================= HIGHLIGHTS CAROUSEL ================= */
const slides = document.querySelectorAll(".highlight-slide");
const prevHighlightBtn = document.getElementById("prevHighlightBtn");
const nextHighlightBtn = document.getElementById("nextHighlightBtn");
const dotContainer = document.querySelector(".pagination-dots");

let currentIndex = 0;
let slideInterval;

// Create Dots
slides.forEach((_, i) => {
  const dot = document.createElement("div");
  dot.classList.add("dot");
  if (i === 0) dot.classList.add("active");
  dot.addEventListener("click", () => goToSlide(i));
  dotContainer.appendChild(dot);
});

const dots = document.querySelectorAll(".dot");

function updateUI() {
  slides.forEach((slide, i) => {
    slide.classList.toggle("active", i === currentIndex);
    dots[i].classList.toggle("active", i === currentIndex);
  });
}

function nextSlide() {
  currentIndex = (currentIndex + 1) % slides.length;
  updateUI();
}

function prevSlide() {
  currentIndex = (currentIndex - 1 + slides.length) % slides.length;
  updateUI();
}

function goToSlide(index) {
  currentIndex = index;
  updateUI();
  resetTimer();
}

// Control Event Listeners
nextHighlightBtn.addEventListener("click", () => {
  nextSlide();
  resetTimer();
});
prevHighlightBtn.addEventListener("click", () => {
  prevSlide();
  resetTimer();
});

// Auto Slide Timer
function startTimer() {
  slideInterval = setInterval(nextSlide, 10000);
}

function resetTimer() {
  clearInterval(slideInterval);
  startTimer();
}

startTimer();

/* ============= PROMOTIONAL VIDEO JS =================== */
const video = document.getElementById("promoVideo");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        video.play();
      } else {
        video.pause();
      }
    });
  },
  { threshold: 0.5 }, // play when 50% of the video is visible
);

observer.observe(video);
