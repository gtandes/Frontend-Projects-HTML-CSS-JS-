// const faqDiv = document.querySelectorAll(".faq");
const toggleBtn = document.querySelectorAll(".faq-toggle");

// faqDiv.forEach((div) => {
//   toggleBtn.addEventListener("click", (button) => {
//     button.parentNode.classList.toggle("active");
//   });
// });

toggleBtn.forEach((toggle) => {
  toggle.addEventListener("click", () => {
    toggle.parentNode.classList.toggle("active");
  });
});
