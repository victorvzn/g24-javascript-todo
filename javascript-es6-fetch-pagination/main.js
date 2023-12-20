// console.log('Hola JS')
let currentPage = 1

const paginationPrev = document.querySelector('.pagination__prev')
const paginationNext = document.querySelector('.pagination__next')

paginationNext.addEventListener('click', (event) => {
  currentPage += 1

  fetchCharacters(currentPage)
    .then(data => renderCharacters(data.results))
})

paginationPrev.addEventListener('click', (event) => {
  currentPage -= 1

  fetchCharacters(currentPage)
    .then(data => renderCharacters(data.results))
})

// TODO: añadir el botón 'previous' para regresar en la paginación

const renderCharacters = (characters) => {
  const appCharacters = document.querySelector('.app__characters')

  let charactersList = ''

  characters.forEach(character => {
    charactersList += `
      <div class="app__character">
        <img src="${character.image}" width="200" />
        <h2>${character.id}: ${character.name}</h2>
      </div>
    `
  })

  appCharacters.innerHTML = charactersList
}

const fetchCharacters = async function (page = 1) {
  const url = `https://rickandmortyapi.com/api/character/?page=${page}`

  try {
    const response = await fetch(url)

    if (!response.ok) {
      throw new Error('ERROR HTTP:', response.status)
    }

    return response.json()
  } catch (error) {
    console.log(error)
  }
}

fetchCharacters()
  .then(data => renderCharacters(data.results))