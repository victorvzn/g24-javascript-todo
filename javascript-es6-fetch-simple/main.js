// console.log('Hola javascript!')

const renderPosts = function (posts) {
  // const appDiv = document.querySelector('#app')
  const appDiv = document.getElementById('app')

  let postList = ''

  posts.forEach(post => {
    postList = postList + `
      <div class="post">
        <h2>${post.id}: ${post.title}</h2>
      </div>
    `
  });

  appDiv.innerHTML = postList
}

// API FETCH usando Async/await

const fetchPostsWithAsyncAwait = async function () {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos')

    if (!response.ok) {
      throw new Error('Error HTTP: ' + response.status)
    }
    
    const json = await response.json()
    
    console.log(json)

    renderPosts(json)
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