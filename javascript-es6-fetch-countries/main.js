// const url = 'https://restcountries.com/v3.1/all'
const url = 'https://restcountries.com/v3.1/all?fields=name,flags,region,capital,population,languages,currencies,timezones'

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
  .then(data => console.log(data))