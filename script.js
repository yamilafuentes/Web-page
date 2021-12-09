

const navToggle = document.querySelector(".navbar_toggle")
const links = document.querySelector(".main_nav")

navToggle.addEventListener('click', function(){
  links.classList.toggle("show_nav")
})



const photos = [
    {
      "name": "La mona lisa",
      "price": 15000,
      "Measures": "150x750",
      "path": "1.jpeg"
    },
    {
      "name": "La noche estrellada",
      "price": 16000,
      "Measures": "150x750",
      "path": "2.jpeg"
    },
    {
      "name": "El jardin de las delicias",
      "priceo": 17000,
      "Measures": "150x750",
      "path": "3.jpeg"
    },
    {
      "name": "Muchacha viendo por la ventana",
      "price": 18000,
      "Measures": "150x750",
      "path": "4.jpeg"
    },
    {
      "name": "El grito",
      "price": 19000,
      "Measures": "150x750",
      "path": "5.jpeg"
    }
  ]
  
stringVacio = ""




for (i = 0; i<photos.length; i++) {
  stringVacio = ""
  saveName = i.name
  savePrice = i.price
  saveMeasures = i.Measures
  savePath = i.path

  <div class="box-image">
      <img src="images/savePath" alt="saveName" class="image">
      <h2 class="title-image">Imagen 1</h2>
  </div>


} 



  
document.getElementById("top-header").innerHTML = stringVacio





