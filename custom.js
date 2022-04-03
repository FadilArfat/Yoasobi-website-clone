const menuBtn = document.querySelector(".menu");
let menuopen = false;
menuBtn.addEventListener("click", () => {
  menuBtn.classList.toggle("open");
});
