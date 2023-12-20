// const url = 'https://restcountries.com/v3.1/all'
const url = 'https://restcountries.com/v3.1/all?fields=name,flags,region,capital,population,languages,currencies,timezones'

let countryData = [] // Lo voy a usar temporalmente para filtrar los países

const searchInput = document.querySelector('.app__search')
const filterSelect = document.querySelector('.app__filter')

searchInput.addEventListener('input', (event) => {
  // console.log('estoy escribiendo algo....')
  const inputValue = event.target.value

  // console.log(inputValue)

  const filteredCountries = countryData.filter(country => {
    const loweredInputValue = inputValue.toLowerCase()
    const loweredName = country.name.common.toLowerCase()
    const joinedCapital = country.capital.join(',') // Une todos los elementos de un arreflo en una cadena de texto
    const loweredCapital = joinedCapital.toLowerCase()

    console.log(joinedCapital)

    // TODO: Adicionalmente necesitamos filtrar por capital (10 minutos)

    return loweredName.includes(loweredInputValue) || loweredCapital.includes(loweredInputValue)
  })

  renderCountries(filteredCountries)
})


filterSelect.addEventListener('input', (event) => {
  const value = event.target.value
  
  // console.log(value)

  const filteredCountriesByRegion = countryData.filter(country => {
    const loweredRegion = country.region.toLowerCase()
    const loweredValue = value.toLowerCase()

    return loweredRegion.includes(loweredValue)
  })

  renderCountries(filteredCountriesByRegion)
})

const formatNumber = (number) => {
  return new Intl.NumberFormat('es-PE').format(number)
}

const renderCountries = (countries) => {
  const countryListElement = document.querySelector('.app__list')

  let countryList = ''

  countries.forEach(country => {
    // console.log(country)
    countryList += `
      <div class="country">
        <img class="country__flag" src="${country.flags.svg}" alt="${country.name.common}" />
        <div class="country__wrapper">
          <h2 class="country__title">${country.name.common}</h2>
          <div class="country__description">
            <strong>Population:</strong> ${formatNumber(country.population)}
          </div>
          <div class="country__description">
            <strong>Region:</strong> ${country.region}
          </div>
          <div class="country__description">
            <strong>Capital:</strong> ${country.capital}
          </div>
        </div>
      </div>
    `
  })

  countryListElement.innerHTML = countryList
}

const fetchCountries = async () => { // Devuelve una Promesa (Promise)
  try {
    const response = await fetch(url)

    if (!response.ok) {
      throw new Error('Request Error: ' + response.status)
    }

    return response.json()
  } catch(error) {
    console.log(error)
  }
}

fetchCountries()
  .then(data => {
    countryData = data

    renderCountries(data)
  })