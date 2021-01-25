const addClassToBody = () => {
  var body = document.body
  body.classList.add("bg")
}

const navElements = (id, content) => {
  const navElement = document.createElement("a")
  navElement.setAttribute("href", "#")
  navElement.setAttribute("id", id)
  navElement.classList.add("navElement")
  navElement.textContent = content

  return navElement
}

const createNav = (id) => {
  const navbar = document.createElement("nav")
  navbar.setAttribute("id", id)

  const pageName = navElements("home", "Home")
  const menu = navElements("menu", "Menu")
  const contact = navElements("contact", "Contact")

  navbar.appendChild(pageName)
  navbar.appendChild(menu)
  navbar.appendChild(contact)

  return navbar
}

const createSection = (id) => {
  const section = document.createElement("section")
  section.setAttribute("id", id)

  return section
}

const createFooter = (id, content) => {
  const footer = document.createElement("footer")
  footer.setAttribute("id", id)

  const footerText = document.createElement("p")
  footerText.textContent = content
  footer.appendChild(footerText)

  return footer
}

const pageLoad = () => {
  addClassToBody()

  const content = document.getElementById("content")

  const navbar = createNav("nav")
  content.appendChild(navbar)

  const section = createSection("section-content")
  content.appendChild(section)

  const footer = createFooter("footer", "Created by Elias Castañeda - 2021")
  content.appendChild(footer)
}

export default pageLoad
