const createArticle = () => {
  const article = document.createElement("article")
  article.classList.add("article")

  const header = document.createElement("header")
  header.classList.add("article-header")
  header.textContent = "Le Buffet"
  article.appendChild(header)

  const articleP = document.createElement("p")
  articleP.classList.add("article-p")
  articleP.textContent =
    "Le Buffet was born in 1989 and has been administered by the Chef Masulini since then. The buffet offers the best food quality due to its Michelin star prestige. The best buffet by far in Mexico attracts culinary tourists from all around the world to try out the immense dish options that are found in the buffet."
  article.appendChild(articleP)

  return article
}

const homeLoad = () => {
  const sectionContent = document.getElementById("section-content")
  sectionContent.classList.add("section-content")

  sectionContent.textContent = ""

  const article = createArticle()

  sectionContent.appendChild(article)
}

export default homeLoad
