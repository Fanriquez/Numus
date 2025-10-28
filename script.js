// La animación ahora dura solo 2 segundos, no hay esperas innecesarias
document.addEventListener("DOMContentLoaded", () => {
  const loader = document.getElementById("loader");
  const main = document.getElementById("main-content");

  setTimeout(() => {
    loader.style.display = "none";
    main.style.opacity = "1";
  }, 2000); // 2 segundos
});
