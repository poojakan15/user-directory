function changeHeading() {
    heading.textContent = document.querySelector('#inputText').value
}

const heading = document.querySelector('#head2')
const button = document.querySelector('button')
button.addEventListener('click', changeHeading)