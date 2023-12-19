// console.log('Hola Javascript')

// const taskInput = document.getElementById('taskInput')
const taskInput = document.querySelector('.task__input')
const taskAdd = document.querySelector('.task__add')
const taskList = document.querySelector('.task__list')

taskAdd.addEventListener('click', function (event) {
  // ¡La lógica después de hacer click!
  // Se ejecutará cuando hagamos click en el botón "Añadir tarea"

  console.log('Hice click!')

  const button = document.createElement('button')
  button.innerText = 'Hola soy un botón dinámico!'
  document.body.appendChild(button)

  
})

console.log(taskInput)
console.log(taskInput.placeholder)
console.log(taskAdd)
console.log(taskList)