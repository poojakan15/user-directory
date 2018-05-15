function changeHeading() {
    heading.textContent = document.querySelector('#inputText').value
}

const handleSubmit = function (ev) {
    ev.preventDefault()
  //  heading.textContent = document.querySelector('#inputText').value
  heading.textContent = ev.target.changeHead.value
}

const heading = document.querySelector('#head2')
const button = document.querySelector('button')
button.addEventListener('click', changeHeading) 
// changeHeading() would execute it as soon as it hits that line of code

const form = document.querySelector('#userForm')
form.addEventListener('submit', handleSubmit)