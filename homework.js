//Butonul de scrollToTop
const scrollBtn = document.querySelector(".scroll-to-top");
scrollBtn.style.display = "none";
scrollBtn.addEventListener("click", scrollTop);

window.onscroll = () => {
  // Folosim document.documentElement.scrollTop pentru suportul browserelor mai vechi
  if (document.documentElement.scrollTop > window.innerHeight / 2) {
    scrollBtn.style.display = "block";
  } else {
    scrollBtn.style.display = "none";
  }
};

function scrollTop() {
  if (window.scrollY > window.innerHeight / 2) {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
}
