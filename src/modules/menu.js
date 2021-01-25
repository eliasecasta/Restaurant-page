function createTitle() {
  const article = document.createElement("article")
  article.classList.add("menu-article")

  const header = document.createElement("header")
  header.classList.add("menu-header")
  header.textContent = "Our main dishes"
  article.appendChild(header)

  return article
}

function createPhoto(image) {
  const album = document.createElement("div")
  album.classList.add("menu-photo")

  const img = document.createElement("img")
  img.setAttribute("src", image)
  album.appendChild(img)

  return album
}

function menuLoad() {
  const content = document.getElementById("section-content")
  content.textContent = ""

  const title = createTitle()
  content.appendChild(title)

  const photo1 = createPhoto(
    "https://cdn.pixabay.com/photo/2010/12/13/10/05/berries-2277_1280.jpg"
  )

  const photo2 = createPhoto(
    "https://cdn.pixabay.com/photo/2014/11/05/15/57/salmon-518032_1280.jpg"
  )

  const photo3 = createPhoto(
    "https://cdn.pixabay.com/photo/2017/03/23/19/57/asparagus-2169305_1280.jpg"
  )
  const photo4 = createPhoto(
    "https://cdn.pixabay.com/photo/2015/04/08/13/13/food-712665_1280.jpg"
  )
  const photo5 = createPhoto(
    "https://cdn.pixabay.com/photo/2017/12/10/14/47/piza-3010062_1280.jpg"
  )
  const photo6 = createPhoto(
    "https://cdn.pixabay.com/photo/2014/10/19/20/59/hamburger-494706_1280.jpg"
  )

  content.appendChild(photo1)
  content.appendChild(photo2)
  content.appendChild(photo3)
  content.appendChild(photo4)
  content.appendChild(photo5)
  content.appendChild(photo6)
}

export default menuLoad
