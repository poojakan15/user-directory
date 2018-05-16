const form = document.querySelector('#userForm')

const handleSubmit = function (ev) {
  ev.preventDefault()
  const form = ev.target
  const userName = form.userName.value
  const age = form.age.value
  const favColor = renderColor(form.favColor.value)
  const users = document.querySelector('#users')
  const list = document.createElement('ul')



  list.appendChild(renderListItem('Name', userName))
  list.appendChild(renderListItem('Age', age))
  list.appendChild(renderListItem('Favorite Color', favColor))
//    list.appendChild(colorItem)
   users.appendChild(list)

//   renderList()

//   users.innerHTML += '<p>' + userName + ', ' + age + '</p>' //string concatenation
//   users.innerHTML += `<p>${userName}, ${age}</p>` //string interpolation - template literal

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

function renderListItem(label, value) {
    const item = document.createElement('li')
    item.textContent = `${label}: `
    try {
        item.appendChild(value)
    } catch(e) {
        item.textContent += value
    }
    return item
}

form.addEventListener('submit', handleSubmit)

