// Grabbing Elements 

// Navigation links
const navLinks = document.querySelectorAll('.nav-link');
// Let's Go text
const letsGo = document.querySelector('.text-content h2');
// boatPic
const boatPic = document.querySelector('.img-fluid');
// Destination Text
const destText = document.querySelector('.content-destination p');
// Destination Img
const destImg = document.querySelector('.content-destination img');
// Body Container
const body = document.querySelector('body');
// P tags
const pTags = document.querySelectorAll('p');
// Intro h2
const introTxt = document.querySelector('.intro h2');





// Links Changing Color on Mouseover and preventing default
navLinks.forEach(item => {
    // console.log(item);
    item.addEventListener('mouseover', event => {
        event.target.style.color = 'green';
    });
    item.addEventListener('mouseleave', event => {
        event.target.style.color = '#212529';
    })
    item.addEventListener('click', event => {
        event.preventDefault();
    })
});

// Lets go text Increases in size on click cancels propagation of body changing color
letsGo.addEventListener('dblclick', event => {
    event.target.style.fontSize = "5rem";
    event.stopPropagation();
})

// Boat picture increases in size on click
boatPic.addEventListener('click', event => {
    event.target.style.height = '40vh';
    event.target.style.maxWidth = '110%';
    event.target.style.width = '110%';
})

// Changing destination text
window.addEventListener('load', event => {
    destText.textContent = 'We have premium locations for travel in Bora Bora, Maldives, and Key West. Want something more wild? Look into our discounted trip to Alaska!';
})

// Changing size of destination image on mouseenter
destImg.addEventListener('mouseenter', event => {
    event.target.style.maxWidth = '150%';
    event.target.style.width = '150%';
})
destImg.addEventListener('mouseleave', event => {
    event.target.style.width = '100%';
})

// Changing background color of body container on doubleclick
body.addEventListener('dblclick', event => {
    event.target.style.backgroundColor = '#D6EFC7';
})

// Changing background color back to white on keydown esc
window.addEventListener('keydown', event => {
    if (event.key === 'Escape') {
        body.style.backgroundColor = 'white';
    }
})

// scaling paragraph tags when resizing window
pTags.forEach(item => {
    item.addEventListener('wheel', event => {
        event.target.style.fontSize = '3rem';
    });
})

// Selecting intro h2 changes color
introTxt.addEventListener('select', event => {
    event.target.style.backgroundColor = 'green';
})
