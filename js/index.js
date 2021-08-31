// Grabbing Elements 

// Navigation links
const navLinks = document.querySelectorAll('.nav-link');
// Let's Go text
const letsGo = document.querySelector('.text-content h2');


// Links Changing Color on Mouseover
navLinks.forEach(item => {
    // console.log(item);
    item.addEventListener('mouseover', event => {
        event.target.style.color = 'green';
    });
    item.addEventListener('mouseleave', event => {
        event.target.style.color = '#212529';
    })
});

// Lets go text Increases in size on click
letsGo.addEventListener('click', event => {
    event.target.style.fontSize = "5rem";
})