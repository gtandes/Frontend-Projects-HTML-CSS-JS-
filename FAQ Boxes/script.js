// const faqDiv = document.querySelectorAll(".faq");
const toggleBtns = document.querySelectorAll(".faq-toggle");

// faqDiv.forEach((div) => {
//   toggleBtn.addEventListener("click", (button) => {
//     button.parentNode.classList.toggle("active");
//   });
// });

toggleBtns.forEach((toggleBtn) => {
  toggleBtn.addEventListener("click", () => {
    toggleBtn.parentNode.classList.toggle("active");
  });
});
