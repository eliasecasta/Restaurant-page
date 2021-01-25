function createArticle(title, info = "", map = "") {
  const article = document.createElement("article")
  article.classList.add("article")

  const artTitle = document.createElement("header")
  artTitle.classList.add("article-header")
  artTitle.textContent = title
  article.appendChild(artTitle)

  const artInfo = document.createElement("p")
  artInfo.classList.add("article-p")
  artInfo.textContent = info
  article.appendChild(artInfo)

  const mapLoc = map
  article.innerHTML += mapLoc

  return article
}

function contactLoad() {
  const content = document.getElementById("section-content")
  content.textContent = ""

  const phone = createArticle("Phone Number", "625-123-6547")
  content.appendChild(phone)

  const map = createArticle(
    "Location",
    "",
    '<iframe width="425" height="350" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://www.openstreetmap.org/export/embed.html?bbox=-156.66503906250003%2C18.869904894964883%2C-154.94018554687503%2C20.287961155077717&amp;layer=mapnik" style="border: 1px solid black"></iframe><br/><small><a href="https://www.openstreetmap.org/#map=9/19.5805/-155.8026">View Larger Map</a></small>'
  )

  content.appendChild(map)
}

export default contactLoad
