export default function menuPage() {
  const contentDiv = document.querySelector('#content')

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