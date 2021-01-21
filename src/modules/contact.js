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

function createMap() {
  return '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3500.690203900894!2d-106.10465088521616!3d28.668993282403473!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x86ea430686da6d7b%3A0xdf523b1b330e2d4f!2sPrivada%20de%20Francisco%20Pimentel%205302-5390%2C%20Las%20Granjas%2C%2031100%20Chihuahua%2C%20Chih.!5e0!3m2!1sen!2smx!4v1611247576290!5m2!1sen!2smx" width="600" height="450" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
}

function contactLoad() {
  const content = document.getElementById("section-content")
  content.textContent = ""

  const phone = createArticle("Phone Number", "625-123-6547")
  content.appendChild(phone)

  content.innerHTML += createMap()
}

export default contactLoad
