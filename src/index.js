import pageLoad from './modules/page-load';
import homeLoad from './modules/home';
import contactLoad from './modules/contact';
import menuLoad from './modules/menu';
import './styles/reset.css';
import './styles/style.css';

pageLoad();
homeLoad();

const homeLoaded = document.getElementById('home');
const contactLoaded = document.getElementById('contact');
const menuLoaded = document.getElementById('menu');

homeLoaded.addEventListener('click', homeLoad);
contactLoaded.addEventListener('click', contactLoad);
menuLoaded.addEventListener('click', menuLoad);
