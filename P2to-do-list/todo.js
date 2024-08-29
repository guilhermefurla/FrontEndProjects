// Selecting HTML elements
const inputBox = document.querySelector('#input-box')
const listContainer = document.querySelector('#list-container')
const addTask = document.querySelector('#addTask')

// Gets the todo and checks if the box is empty
addTask.addEventListener('click', () => {
  if(inputBox.value === ''){
    alert('You must write something')
  }else{
    let li = document.createElement('li')
    li.innerHTML = inputBox.value
    listContainer.appendChild(li)
    let span = document.createElement('span')
    span.innerHTML = '\u00d7'
    li.appendChild(span)
    inputBox.value = ''
    saveData()
  }
})

// Controls the checking and removing mechanic 
listContainer.addEventListener('click', (e) => {
  if(e.target.tagName === 'LI'){
    e.target.classList.toggle('checked')
  }else if(e.target.tagName === 'SPAN'){
    e.target.parentElement.remove()
  }
  saveData()
})

// Saves the data 
function saveData(){
  localStorage.setItem('data', listContainer.innerHTML)
}

// Gets the data and displays it
function getData(){
  listContainer.innerHTML = localStorage.getItem('data')
}
getData()