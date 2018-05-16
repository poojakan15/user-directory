const form = document.querySelector('#userForm')

const handleSubmit = function (ev) {
  ev.preventDefault()
// const form = ev.target
  const userName = form.userName.value
  const age = form.age.value
  const favColor = form.favColor.value
  const users = document.querySelector('#users')

  renderList()

//   users.innerHTML += '<p>' + userName + ', ' + age + '</p>' //string concatenation
//   users.innerHTML += `<p>${userName}, ${age}</p>` //string interpolation - template literal

//   users.textContent += ' ' + ev.target.userName.value
//   form.userName = ' '

  form.reset() 
  form.userName.focus() 
}

function renderColor(color) {
    const colorDiv = document.createElement('div') 
    colorDiv.style.backgroundColor = color
    colorDiv.style.width = '6rem'
    colorDiv.style.height = '3rem'
    return colorDiv
}

function renderListItem(list) {
   const userName = form.userName.value
   const age = form.age.value
   const favColor = form.favColor.value

   const nameItem = document.createElement('li')
   nameItem.textContent = `Name: ${userName}`
   nameItem.style.font = "italic bold 20px monotype corosiva"

   const ageItem = document.createElement('li')
   ageItem.textContent = `Age: ${age}`
   ageItem.style.font = "italic bold 20px monotype corosiva"
   
   const colorItem = document.createElement('li')
   colorItem.textContent = `Favorite Color: `
   colorItem.style.font = "italic bold 20px monotype corosiva"
   
   list.appendChild(nameItem)
   list.appendChild(ageItem)
   colorItem.appendChild(renderColor(favColor))
   list.appendChild(colorItem)
   users.appendChild(list)
}

function renderList() {
    const list = document.createElement('ul')
    renderListItem(list)
}

form.addEventListener('submit', handleSubmit)

