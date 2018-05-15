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
  const favColor = form.favColor.value
  const users = document.querySelector('#users')

   const p = document.createElement('p') // create from scratch
   p.textContent = `${userName}, ${age}`
   p.style.backgroundColor = favColor
   users.appendChild(p)

//    const list = document.createElement('ul')
   
//    list.appendChild(nameItem)
//    list.appendChild(ageItem)
//    colorItem.appendChild(renderColor())
//    list.appendChild(colorItem)
//    users.appendChild(list)
    renderList()

//   users.innerHTML += '<p>' + userName + ', ' + age + '</p>' //string concatenation
//   users.innerHTML += `<p>${userName}, ${age}</p>` //string interpolation - template literal

//   users.textContent += ' ' + ev.target.userName.value
//   form.userName = ' '
  form.reset() //resets entire form
  form.userName.focus() //focuses on first input box
}

function renderColor() {
    const favColor = form.favColor.value
    const colorDiv = document.createElement('div') // create separate div for color
    colorDiv.style.backgroundColor = favColor
    colorDiv.style.width = '6rem'
    colorDiv.style.height = '3rem'
    return colorDiv
}

function renderListItem(list) {
    const userName = form.userName.value
   const age = form.age.value

   const nameItem = document.createElement('li')
   nameItem.textContent = `Name: ${userName}`

   const ageItem = document.createElement('li')
   ageItem.textContent = `Age: ${age}`

   const colorItem = document.createElement('li')
   colorItem.textContent = `Favorite Color: `

   list.appendChild(nameItem)
   list.appendChild(ageItem)
   colorItem.appendChild(renderColor())
   list.appendChild(colorItem)
   users.appendChild(list)
}

function renderList() {
    const list = document.createElement('ul')
    renderListItem(list)
}

// const heading = document.querySelector('#head2')
// const button = document.querySelector('button')
// button.addEventListener('click', changeHeading) 
// // changeHeading() would execute it as soon as it hits that line of code

form.addEventListener('submit', handleSubmit)