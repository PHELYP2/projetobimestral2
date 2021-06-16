let hamburger = document.querySelector('.hamburger')
let nav = document.querySelector('header nav')

hamburger.addEventListener('click', function(){
    nav.classList.toggle('show-nav')
});