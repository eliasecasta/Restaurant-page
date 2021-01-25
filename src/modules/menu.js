const createTitle = () => {
  const article = document.createElement("article")
  article.classList.add("article")

  const header = document.createElement("header")
  header.classList.add("article-header")
  header.textContent = "Our main dishes"
  article.appendChild(header)

  return article
}

const createPhotoWrapper = () => {
  const wrapper = document.createElement("div")
  wrapper.classList.add("album-wrapper")

  return wrapper
}

const createPhoto = (image) => {
  // const album = document.createElement("div")
  // album.classList.add("menu-photo")

  const img = document.createElement("img")
  img.setAttribute("src", image)
  // album.appendChild(img)

  return img
}

const menuLoad = () => {
  const content = document.getElementById("section-content")
  content.textContent = ""

  const title = createTitle()
  content.appendChild(title)

  const wrapper = createPhotoWrapper()
  content.appendChild(wrapper)

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

  wrapper.appendChild(photo1)
  wrapper.appendChild(photo2)
  wrapper.appendChild(photo3)
  wrapper.appendChild(photo4)
  wrapper.appendChild(photo5)
  wrapper.appendChild(photo6)
}

export default menuLoad
