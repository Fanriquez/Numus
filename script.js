// Escucha los clics y abre los enlaces correspondientes
document.querySelectorAll('.link-item').forEach(item => {
  item.addEventListener('click', () => {
    const url = item.getAttribute('data-url');
    if (url) {
      window.open(url, '_blank');
    }
  });
});
