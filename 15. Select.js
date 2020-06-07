const menuNav=document.querySelector('.navbar .menu-nav');
const btnNav=document.querySelector('.navbar .btn-nav');
btnNav.addEventListener('click',function(){
    menuNav.classList.toggle('aktif');
    btnNav.classList.toggle('aktif');
});