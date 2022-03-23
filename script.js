const button = document.querySelector('button')
const list = document.querySelector('ul')


// Clicking on the button will generate a random Ghibli movie and show the Title, Description and Image
button.addEventListener('click', async () => {
  let response = await axios.get("https://ghibliapi.herokuapp.com/films")
// console.log(response)
let ghibliResponse = response.data
let i = ghibliResponse[Math.floor(Math.random() * ghibliResponse.length)]
// console.log(i)
let title = i.title
let release = i.release_date
let image = i.image
let description = i.description
console.log(title)
console.log(release)
console.log(image)
console.log(description)

document.querySelector(`h1`).innerText = title
document.querySelector('h2').innerText = release
let pic = document.createElement(`img`)
pic.src = image
document.querySelector(`h3`).innerText = description


// let info = document.createElement(`h1`)
// let container = document.querySelector(`.title`)
// container.appendChild(info)
//create an element and save it to the variable
//chnage the innerText to be desired value
//append created element to the page
})

