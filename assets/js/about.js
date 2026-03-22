// FAQ Accordion
document.querySelectorAll(".faq-question").forEach((button) => {
  button.addEventListener("click", () => {
    const item = button.parentElement;

    // Close other items
    document.querySelectorAll(".faq-item").forEach((faq) => {
      if (faq !== item) faq.classList.remove("active");
    });

    // Toggle current
    item.classList.toggle("active");
  });
});