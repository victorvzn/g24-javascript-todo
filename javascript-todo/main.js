// console.log('Hola Javascript')

// const taskInput = document.getElementById('taskInput')
const taskInput = document.querySelector('.task__input')
const taskAdd = document.querySelector('.task__add')
const taskList = document.querySelector('.task__list')

taskAdd.addEventListener('click', function (event) {
  // ¡La lógica después de hacer click!
  // Se ejecutará cuando hagamos click en el botón "Añadir tarea"

  console.log('Hice click!')

  // MANIPULACION DEL DOM, para crear elementos dinamicamente en el body
  // const button = document.createElement('button')
  // button.innerText = 'Hola soy un botón dinámico!'
  // document.body.appendChild(button)

  if (taskInput.value === '') {
    alert('El campo es requerido')
    return
  }

  const li = document.createElement('li')

  let checkbox = document.createElement('input')
  checkbox.setAttribute('type', 'checkbox')
  li.appendChild(checkbox)

  let span = document.createElement('span')
  span.innerText = taskInput.value
  li.appendChild(span)

  // TODO: Añadir un botón al li con el texto 'Borrar'
  let button = document.createElement('button')
  button.innerText = 'Borrar'
  li.appendChild(button)

  taskList.appendChild(li)

  taskInput.value = ''
})

taskList.addEventListener('click', function(event) {
  console.log(event)

  const target = event.target

  if (target.tagName === 'INPUT' && target.type === 'checkbox') {
    target.classList.toggle('checked')
  }

  // TODO: Añadir la funcionalidad al botón para que remueva una tarea
  if (target.tagName === 'BUTTON') {
    target.parentElement.remove() // Con esto eliminamos el li complementamente del DOM
  }
})

console.log(taskInput)
console.log(taskInput.placeholder)
console.log(taskAdd)
console.log(taskList)