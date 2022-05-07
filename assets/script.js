const toggleButton = document.getElementsByClassName('nav-toggle')[0];
const navLinks = document.getElementsByClassName('navLinks');
toggleButton/addEventListener('click', function()){
    for(var i=0; i < navLinks.length; i++)
    navLinks[i].classList.toggle('active')
}