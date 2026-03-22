/* ================= AOS ================= */
AOS.init({
  easing: "ease",
  once: false,
});

/* ================== NAVBAR ===================== */
document.addEventListener("DOMContentLoaded", function() {
    // Get the current URL path
    const currentPath = window.location.pathname;
    
    // Select all links in the navbar
    const navLinks = document.querySelectorAll('.navbar-links a');

    navLinks.forEach(link => {
      // Get the 'href' attribute (e.g., 'index.html')
      const linkPath = link.getAttribute('href');

      // Check if the current URL contains the href string
      // The condition handles both the full path and root '/'
      if (currentPath.includes(linkPath) || (currentPath === '/' && linkPath === 'index.html')) {
        link.classList.add('active');
      }
    });
});
