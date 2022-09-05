function animateScroll() {
  const imgs = document.querySelectorAll(".gatalog-grid-js img");
  console.log(imgs);

  function animaScroll() {
    imgs.forEach((img) => {
      const imgTop = img.getBoundingClientRect().top;
      const isImgVisible = imgTop - 700 < 0;
      if (isImgVisible) {
        img.classList.add("ativo");
      } else {
        img.classList.remove();
      }
    });
  }
  animaScroll();

  window.addEventListener("scroll", animaScroll);
}

animateScroll();
