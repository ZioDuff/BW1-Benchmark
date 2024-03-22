//pagina 4 feedback
//abbiamo messo le svg sull'html perche si rompevano :(
const stars = document.querySelectorAll("#stars img")
const starsArray = Array.from(stars)
console.log(starsArray)

let activeStars = 0

const hover = (indice) => {
  for (let j = 0; j <= indice; j++) {
    starsArray[j].setAttribute("src", "Immagini/star.svg")
  }
}

const mouseOut = (indice) => {
  if (activeStars <= indice) {
    for (let j = 0; j <= indice; j++) {
      starsArray[j].setAttribute("src", "Immagini/star2.svg")
    }
  }
}

const click = (indice) => {
  starsArray.forEach((element) => {
    element.setAttribute("src", "Immagini/star2.svg")
  })

  activeStars = indice + 1
  for (let j = 0; j <= indice; j++) {
    starsArray[j].setAttribute("src", "Immagini/star.svg")
  }
}

starsArray.forEach((stars, i) => {
  stars.addEventListener("mouseover", () => hover(i))
  stars.addEventListener("mouseout", () => mouseOut(i))
  stars.addEventListener("click", () => click(i))
})
