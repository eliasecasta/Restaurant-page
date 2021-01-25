import pageLoad from "./modules/page-load"
import homeLoad from "./modules/home"
import contactLoad from "./modules/contact"
import menuLoad from "./modules/menu"

// TODO: Change all functions to arrow functions

pageLoad()
homeLoad()

const homeLoaded = document.getElementById("home")
const contactLoaded = document.getElementById("contact")
const menuLoaded = document.getElementById("menu")

homeLoaded.addEventListener("click", homeLoad)
contactLoaded.addEventListener("click", contactLoad)
menuLoaded.addEventListener("click", menuLoad)
