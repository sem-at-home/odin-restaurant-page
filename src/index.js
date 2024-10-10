import homePage from './home-page'
import aboutPage from './about-page'
import menuPage from './menu-page'
import './styles.css'

homePage()

function clickNavButton(event) {
  const contentDiv = document.querySelector('#content');
  contentDiv.innerHTML = '';
  console.log(event.target.className);
  switch(event.target.className) {
    case 'about-button':
      aboutPage()
      break;
    case 'menu-button':
      menuPage()
      break;
    default:
      homePage()
  }

}

const homeButton = document.querySelector('.home-button')
homeButton.addEventListener('click', clickNavButton)

const menuButton = document.querySelector('.menu-button')
menuButton.addEventListener('click', clickNavButton)

const aboutButton = document.querySelector('.about-button')
aboutButton.addEventListener('click', clickNavButton)

