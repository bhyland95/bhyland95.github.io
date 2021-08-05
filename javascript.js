const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navLinks = document.getElementsByClassName('nav-links')[0]

document.onclick = function(exit){
    if( exit.target.id !== 'toggleButton'){
        navLinks.classList.toggle('active')
    }
}