function navElements(id, content) {

  const navElement = document.createElement('a')
  navElement.setAttribute('id', id)
  navElement.setAttribute('href', '#')
  navElement.classList.add('navElement')
  navElement.textContent = content
  return navElement
}

function createNav(id) {
  const navbar = document.createElement('nav')
  navbar.setAttribute('id', id)

  const pageName = navElements('home', 'Le Buffet')
  const menu = navElements('menu', 'Menu')
  const contact = navElements('contact', 'Contact')

  navbar.appendChild(pageName)
  navbar.appendChild(menu)
  navbar.appendChild(contact)

  return navbar
}

function createSection(id) {
  const section = document.createElement('section')
  section.setAttribute('id', id)
  
  return section
}

function createFooter(id, text) {
  const footer = document.createElement('footer')
  footer.setAttribute('id', id)
  
  const footerText = document.createElement('h2')
  footerText.textContent = text

  footer.appendChild(footerText)

  return footer

}

function pageLoad() {
  const content = document.getElementById('content')

  const navbar = createNav('nav')
  content.appendChild(navbar)

  const section = createSection('section-content')
  content.appendChild(section)



}

export default pageLoad
