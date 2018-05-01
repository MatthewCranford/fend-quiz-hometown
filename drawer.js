// open&close hamburger menu
const hamburger = document.getElementById('hamburger');
const drawer = document.getElementById('drawer');

hamburger.addEventListener('click', function() {
    drawer.classList.toggle('open');
});	