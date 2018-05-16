const form = document.querySelector('#userForm')

const handleSubmit = function (ev) {
  ev.preventDefault()
  const form = ev.target

  const user = {
      'Name': form.userName.value,
      'Age': form.age.value,
      'Favorite Color': renderColor(form.favColor.value),
  }

  const users = document.querySelector('#users')
  const list = renderList(user)
  users.appendChild(list)

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
    const term = document.createElement('dt')
    // item.textContent = `${label}: `
    term.textContent = label
    const description = document.createElement('dd')

    try {
        // item.appendChild(value)
        description.appendChild(value)
    } catch(e) {
        // item.textContent += value
        description.textContent += value
    }

    item.appendChild(term)
    item.appendChild(description)
    return item
}

function renderList(data) {
    const list = document.createElement('dl')
    Object.keys(data).forEach(label =>{
        const item = renderListItem(label, data[label])
        list.appendChild(item)
      })
    return list
}

form.addEventListener('submit', handleSubmit)

