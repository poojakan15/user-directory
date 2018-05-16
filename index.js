const form = document.querySelector('#userForm')

const handleSubmit = function (ev) {
  ev.preventDefault()
  const form = ev.target

  const user = {
      Name: form.userName.value,
      Age: form.age.value,
      'Favorite Color': renderColor(form.favColor.value),
  }

  const list = document.createElement('ul')
  Object.keys(user).forEach(function(label){
        const item = renderListItem(label, user[label])
        list.appendChild(item)
      })


  const users = document.querySelector('#users')

//   list.appendChild(renderListItem('Name', userName))
//   list.appendChild(renderListItem('Age', age))
//   list.appendChild(renderListItem('Favorite Color', favColor))
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

