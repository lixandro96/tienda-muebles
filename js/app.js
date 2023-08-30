const abrirBtn = document.querySelector('.abrir-menu');
const cerrarBtn = document.querySelector('.cerrar-menu');
const menu = document.querySelector('.navegacion-principal');

abrirBtn.addEventListener('click', () => {
  menu.classList.remove('d-none');
  abrirBtn.classList.add('d-none');
  cerrarBtn.classList.remove('d-none');
});
cerrarBtn.addEventListener('click', () => {
  cerrarBtn.classList.add('d-none');
  menu.classList.add('d-none');
  abrirBtn.classList.remove('d-none');
})