import pageLoad from "./modules/page-load"
import homeLoad from "./modules/home"
import contactLoad from "./modules/contact"

  // TODO: Change all functions to arrow functions

  pageLoad();
  homeLoad();
  
  const homeLoaded = document.getElementById("home")
  const contactLoaded = document.getElementById("contact")

  homeLoaded.addEventListener("click", homeLoad)
  contactLoaded.addEventListener("click", contactLoad)
