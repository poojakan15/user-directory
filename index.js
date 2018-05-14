function changeHeading() {
    heading.textContent = 'Heading --> Changed'
}

const heading = document.querySelector('h1')
const button = document.querySelector('button')
button.addEventListener('click', changeHeading)