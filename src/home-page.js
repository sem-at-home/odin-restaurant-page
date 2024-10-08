import sblaupot from './sblaupot.png'

export default function homePage() {
  const contentDiv = document.querySelector('#content')

  const restaurantImage = document.createElement('img')
  contentDiv.appendChild(restaurantImage)
  restaurantImage.src = sblaupot

  const title = document.createElement('h1')
  title.innerHTML = 'De Fat Pot'
  contentDiv.appendChild(title)

  const description = document.createElement('p')
  description.innerHTML = `
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, totam! Illo autem saepe eaque itaque eius necessitatibus cum 
    facilis libero quibusdam, nobis placeat consequatur dolorem molestias reprehenderit repellendus! Explicabo, atque!
  `
  contentDiv.appendChild(description)
}