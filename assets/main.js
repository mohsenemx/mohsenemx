document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll(".card-buttons button");
  const sections = document.querySelectorAll(".card-section");
  const card = document.querySelector(".card");

  const handleButtonClick = (e) => {
    const targetSection = e.target.getAttribute("data-section");
    const section = document.querySelector(targetSection);

    // If it's not the 'about' section, collapse the header
    if (targetSection !== "#about") {
      card.classList.add("is-active");
    } else {
      card.classList.remove("is-active");
    }

    card.setAttribute("data-state", targetSection);

    // Remove active states
    sections.forEach((s) => s.classList.remove("is-active"));
    buttons.forEach((b) => b.classList.remove("is-active"));

    // Add active states to clicked items
    e.target.classList.add("is-active");
    section.classList.add("is-active");
  };

  buttons.forEach((btn) => {
    btn.addEventListener("click", handleButtonClick);
  });
});
