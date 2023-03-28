const open =document.getElementById('btn-crear-publicacion');
const modal =document.getElementById('modales');
const cerrar =document.getElementById('BTN-Cerrar-Modal');

open.addEventListener('click',() =>{
  
    modal.classList.add('show');
    
});

cerrar.addEventListener('click',() =>{
    modal.classList.remove('show')
});