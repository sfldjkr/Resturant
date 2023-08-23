import {fillBoilerHtml} from './starting.js'
import './style.css'
import phoneicon from './phone.svg'
import dumpling from './dumpling.jpg'
import { showHomepage } from './showhome.js'
import { showMenu } from './showmenu.js'
import {showContact} from './contact.js'

// if user just has entered the homepage
fillBoilerHtml();
showHomepage();

let homeBtn = document.querySelector('.homebutton');
let menuBtn = document.querySelector('.menubutton');
let contactBtn = document.querySelector('.contactbutton');

homeBtn.addEventListener('click', showHomepage);


menuBtn.addEventListener('click', showMenu);

contactBtn.addEventListener('click', showContact);