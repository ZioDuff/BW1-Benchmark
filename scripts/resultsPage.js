const btn = document.getElementById("change")
btn.addEventListener("click", () => {
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
    element === false
    indiceNegativo++
  }
})
console.log(indicePositivo)
console.log(indiceNegativo)

//stampiamo la parte centrale del grafico

//stampa in mezzo al cerchio
const middelDiv = document.querySelector("#result")
const paragraph = document.querySelector("p")
middelDiv.appendChild(paragraph)
if (indicePositivo > indiceNegativo) {
  paragraph.innerText =
    "congratulazioni ti manderemo il certificato di ammissione al corso tramite email"
} else {
  paragraph.innerText = "sei na pippa"
}

// stampiamo sulla destra il riusltat correct
let correctPercentage = (indicePositivo / arrayRisposte.length) * 100
const correctDiv = document.querySelector(".correct")
const correctH1 = document.createElement("h1")
correctH1.innerText = "correct" + " " + correctPercentage + "%"
let correctNumAnswer =
  indicePositivo + "/" + arrayRisposte.length + " " + "questions"
const correctH2 = document.createElement("h2")
correctH2.innerText = correctNumAnswer
correctDiv.appendChild(correctH1)
correctDiv.appendChild(correctH2)

//stampaimo sulla sinistra il risultato wrong

let wrongPercentage = (indiceNegativo / arrayRisposte.length) * 100
const wrongDiv = document.querySelector(".wrong")
const wrongH1 = document.createElement("h1")
wrongH1.innerText = "wrong" + " " + wrongPercentage + "%"
let wrongNumAnswer =
  indiceNegativo + "/" + arrayRisposte.length + " " + "questions"
const wrongH2 = document.createElement("h2")
wrongH2.innerText = wrongNumAnswer
wrongDiv.appendChild(wrongH1)
wrongDiv.appendChild(wrongH2)
