const button = document.querySelector('button')
const list = document.querySelector('ul')


// Clicking on the button will generate a random Ghibli movie and show the Title, Description and Image
button.addEventListener('click', async () => {
  let response = await axios.get("https://ghibliapi.herokuapp.com/films")
// console.log(response)
let ghibliResponse = response.data
let i = ghibliResponse[Math.floor(Math.random() * ghibliResponse.length)]
console.log(i)
})

