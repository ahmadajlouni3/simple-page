// Simple JavaScript for scroll animations (optional)

document.addEventListener("DOMContentLoaded", () => {
    const ctaButton = document.querySelector(".cta-button");

    // Scroll to services section on click
    ctaButton.addEventListener("click", () => {
        document.querySelector("#services").scrollIntoView({ behavior: "smooth" });
    });
});
