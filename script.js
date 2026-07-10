const hambuger = document.getElementById('hambuger');

const navlinks = document.getElementById('navlinks');


hambuger.addEventListener('click', () =>{
    navlinks.classList.toggle('active');
});