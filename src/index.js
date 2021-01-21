import pageLoad from "./modules/page-load"
import homeLoad from "./modules/home"
import contactLoad from "./modules/contact"

init()

function addNavEvents() {
  const homeLoaded = document.getElementById("home")
  const contactLoaded = document.getElementById("contact")

  homeLoaded.addEventListener("click", homeLoad)
  contactLoaded.addEventListener("click", contactLoad)
}
function init() {
  pageLoad();
  homeLoad();
  addNavEvents();
}