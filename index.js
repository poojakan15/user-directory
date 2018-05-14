function changeHeading() {
    heading.textContent = 'Heading --> Changed'
}

const heading = document.querySelector('#head2')
const button = document.querySelector('button')
button.addEventListener('click', changeHeading)