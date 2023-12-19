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

  const li = document.createElement('li')

  let checkbox = document.createElement('input')
  checkbox.setAttribute('type', 'checkbox')
  li.appendChild(checkbox)

  let span = document.createElement('span')
  span.innerText = taskInput.value
  li.appendChild(span)

  taskList.appendChild(li)

  taskInput.value = ''
})

console.log(taskInput)
console.log(taskInput.placeholder)
console.log(taskAdd)
console.log(taskList)