const risposteGiuste = localStorage.getItem("correctQuestion");
const giuste = risposteGiuste;

console.log(giuste);

const btn = document.getElementById("change");
btn.addEventListener("click", () => {
  window.location.href = "rateUs.html";
});
  window.location.href = "rateUs.html"
})

const risposteDate = localStorage.getItem("allAnswer")
console.log(risposteDate)

const arrayRisposte = risposteDate.split(",")
console.log(arrayRisposte)

let indicePositivo = 0
let indiceNegativo = 0

const giuste = []

arrayRisposte.forEach((element) => {
  if (element === "true") {
    indicePositivo++
  } else {
    indiceNegativo++
  }
})
console.log(indicePositivo)
console.log(indiceNegativo)

const paragraph = document.querySelector("p")
if (indicePositivo > indiceNegativo) {
  paragraph.innerText = "congratulazioni"
} else {
  paragraph.innerText = "sei na pippa"
}

indicePositivo = (indicePositivo / arrayRisposte.length) * 100
console.log(indicePositivo + "%")

const correctDiv = document.querySelector(".center")
const correctH1 = document.createElement("h1")
correctH1.innerText = "correct" + " " + indicePositivo + "%"
correctDiv.appendChild(correctH1)
