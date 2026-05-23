window.addEventListener("DOMContentLoaded", (event) => {
  // Activate Bootstrap scrollspy on the main nav element
  const mainNav = document.body.querySelector("#mainNav");
  if (mainNav) {
    new bootstrap.ScrollSpy(document.body, {
      target: "#mainNav",
      offset: 74,
    });
  }

  // Collapse responsive navbar when toggler is visible
  const navbarToggler = document.body.querySelector(".navbar-toggler");
  const responsiveNavItems = [].slice.call(
    document.querySelectorAll("#navbarResponsive .nav-link"),
  );

  responsiveNavItems.map(function (responsiveNavItem) {
    responsiveNavItem.addEventListener("click", () => {
      if (window.getComputedStyle(navbarToggler).display !== "none") {
        navbarToggler.click();
      }
    });
  });

  // Dynamic Year in Footer
  const yearEl = document.querySelector("#year");
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }
});

// Lightbox Modal for Portfolio Images
document.addEventListener("DOMContentLoaded", function () {
  const modal = document.getElementById("imageModal");
  if (!modal) return; // Exit if modal doesn't exist (on other pages)

  const modalImage = document.getElementById("modalImage");
  const modalTitle = document.getElementById("modalTitle");

  modal.addEventListener("show.bs.modal", function (event) {
    const trigger = event.relatedTarget;
    if (trigger) {
      modalImage.src = trigger.getAttribute("data-image");
      modalTitle.textContent =
        trigger.getAttribute("data-title") || "Project View";
    }
  });
});
