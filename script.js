document.addEventListener("DOMContentLoaded", () => {
  const introStage = document.getElementById("introStage");
  const gate = document.getElementById("signatureGate");
  const heroCopy = document.getElementById("heroCopy");
  const header = document.getElementById("mainHeader");

  let opened = false;

  if (gate && introStage && heroCopy && header) {
    gate.addEventListener("click", () => {
      if (opened) return;
      opened = true;

      introStage.classList.add("intro-open");

      setTimeout(() => {
        heroCopy.classList.add("is-visible");
      }, 200);

      setTimeout(() => {
        header.classList.add("is-visible");
      }, 400);
    });
  }

  const reveals = document.querySelectorAll(".reveal");

  const revealOnScroll = () => {
    const trigger = window.innerHeight * 0.85;

    reveals.forEach((el) => {
      const top = el.getBoundingClientRect().top;
      if (top < trigger) {
        el.classList.add("show");
      }
    });
  };

  window.addEventListener("scroll", revealOnScroll);
  window.addEventListener("load", revealOnScroll);
  revealOnScroll();
});















const sideLabel = document.querySelector(".scroll-side-label");

if (sideLabel) {
  window.addEventListener("scroll", () => {
    const y = window.scrollY * 0.18;
    sideLabel.style.transform = `translateY(calc(-50% + ${y}px))`;
  });
}