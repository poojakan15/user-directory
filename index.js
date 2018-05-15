// function changeHeading() {
//     heading.textContent = document.querySelector('#inputText').value
// }
const form = document.querySelector('#userForm')

const handleSubmit = function (ev) {
    ev.preventDefault()
  //  heading.textContent = document.querySelector('#inputText').value
  const form = ev.target
  const userName = form.userName.value
  const age = form.age.value
  const users = document.querySelector('#users')
//   users.innerHTML += '<p>' + userName + ', ' + age + '</p>' //string concatenation
  users.innerHTML += `<p>${userName}, ${age}</p>` //string interpolation - template literal
//   users.textContent += ' ' + ev.target.userName.value
//   form.userName = ' '
  form.reset() //resets entire form
  form.userName.focus() //focuses on first input box
}

// const heading = document.querySelector('#head2')
// const button = document.querySelector('button')
// button.addEventListener('click', changeHeading) 
// // changeHeading() would execute it as soon as it hits that line of code

form.addEventListener('submit', handleSubmit)