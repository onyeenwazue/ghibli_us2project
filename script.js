const button = document.querySelector('button')
const list = document.querySelector('ul')
const btn = document.getElementById('toggle')
const background = () => {
  document.body.append('This is my Favorite Recommendation')
}


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

//shows the title, release, image and description on the page
document.querySelector(`h1`).innerText = title
document.querySelector('h2').innerText = release
let pic = document.querySelector(`img`)
pic.src = `${image}`
document.querySelector(`p`).innerText = description
})

//eventListener to change page background
const error = btn.addEventListener('click', background)
console.log(error)
