export default function aboutPage() {
  const contentDiv = document.querySelector('#content')

  const restaurantImage = document.createElement('h1')
  contentDiv.appendChild(restaurantImage)
  restaurantImage.innerHTML = "Contact us"

  const contactDetails = document.createElement('div')
  contactDetails.innerHTML = "Sem van Velden 0611223344"
  contentDiv.appendChild(contactDetails)
}