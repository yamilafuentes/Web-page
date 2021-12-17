
/* 
const navToggle = document.querySelector(".navbar_toggle")
const links = document.querySelector(".main_nav")

navToggle.addEventListener('click', function(){
  links.classList.toggle("show_nav")
}) */



const photos = [
    {
      "name": "La mona lisa",
      "price": 15000,
      "measures": "150x750",
      "path": "1.jpeg"
    },
    {
      "name": "La noche estrellada",
      "price": 16000,
      "measures": "150x750",
      "path": "2.jpeg"
    },
    {
      "name": "El jardin de las delicias",
      "priceo": 17000,
      "measures": "150x750",
      "path": "3.jpeg"
    },
    {
      "name": "Muchacha viendo por la ventana",
      "price": 18000,
      "measures": "150x750",
      "path": "4.jpeg"
    },
    {
      "name": "El grito",
      "price": 19000,
      "measures": "150x750",
      "path": "5.jpeg"
    }
  ]

console.log("Hi")
const element = document.querySelector("#top-header")
element.innerHTML = "Hello world"
console.log(element)


const stringVacio = ""

console.log(photos)

for (let photo in photos) {
  Object.keys(photo)

} 



  
/* document.getElementById("top-header").innerHTML = stringVacio */





