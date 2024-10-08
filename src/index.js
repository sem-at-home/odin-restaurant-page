import homePage from './home-page'
import aboutPage from './about-page'
import menuPage from './menu-page'
import './styles.css'

homePage()

const homeButton = document.querySelector('.home-button')
homeButton.addEventListener('click', homePage)

const menuButton = document.querySelector('.menu-button')
menuButton.addEventListener('click', menuPage)

const aboutButton = document.querySelector('.about-button')
aboutButton.addEventListener('click', aboutPage)

