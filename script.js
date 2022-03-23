const button = document.querySelector('button')
const list = document.querySelector('ul')

button.addEventListener('click', async () => {
  let response = await axios.get("https://ghibliapi.herokuapp.com/films")
// console.log(response)
let ghibliResponse = response.data
let filmTitle = ghibliResponse
let i = ghibliResponse[Math.floor(Math.random() * ghibliResponse.length)]
console.log(i)