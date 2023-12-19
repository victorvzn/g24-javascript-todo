// console.log('Hola javascript!')

// API FETCH usando Async/await

const fetchPostsWithAsyncAwait = async function () {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/todosxxx')

    if (!response.ok) {
      throw new Error('Error HTTP: ' + response.status)
    }
    
    const json = await response.json()
    
    console.log(json)
  } catch (error) {
    console.log(error)
  }
}

// API FETCH usando Promesas

const fetchPostsWithPromises = function () {
  fetch('https://jsonplaceholder.typicode.com/todos') // Devuelve una promesa (Promise)
    .then(response => response.json())
    .then(json => {
      console.log(json)
    })
    .catch(err => console.log(err))
}

// fetchPostsWithPromises()
fetchPostsWithAsyncAwait()