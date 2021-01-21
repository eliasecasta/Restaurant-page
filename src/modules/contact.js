function createArticle(title, info) {
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

  return article
}

function contactLoad() {
  const content = document.getElementById('section-content')
  content.textContent = ""

  const phone = createArticle("Phone Number", "625-123-6547")
  content.appendChild(phone)
}

export default contactLoad
