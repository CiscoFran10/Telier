export default function mobile() {
  const btn = document.querySelector(".btn-mobile");

  function toggleNav(event) {
    if (event.type === "touchstart") event.preventDefault();
    const nav = document.querySelector(".nav");
    nav.classList.toggle("ativo");
    const ativo = nav.classList.contains("ativo");
    event.currentTarget.setAttribute("aria-expanded", ativo);
    if (ativo) {
      event.currentTarget.setAttribute("aria-label", "Fechar Menu");
    } else {
      event.currentTarget.setAttribute("aria-label", "Abrir Menu");
    }
  }

  btn.addEventListener("click", toggleNav);
  btn.addEventListener("touchstart", toggleNav);
}
