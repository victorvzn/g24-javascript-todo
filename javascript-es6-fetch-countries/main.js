// const url = 'https://restcountries.com/v3.1/all'
const url = 'https://restcountries.com/v3.1/all?fields=name,flags,region,capital,population,languages,currencies,timezones'

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
  .then(data => renderCountries(data))