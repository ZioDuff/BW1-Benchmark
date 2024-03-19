// chiamati input e bottone , dove il bottone parte disabilitato e viene abilitato al check dell'input

// const checkbox = document.querySelector("#checkbox")
// const startButton = document.querySelector("#btn")
// startButton.disabled = true
// const check = function () {
//   if (checkbox.checked) {
//     startButton.disabled = false
//   } else {
//     startButton.disabled = true
//   }
// }
// checkbox.addEventListener("change", check)
// // questo serve per far cambiare pagina
// startButton.addEventListener("click", () => {
//   window.location.assign("./indexPage2.html")
// })

//PAGINA 2

const arrOfQuestions = [
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "What does CPU stand for?",
    correct_answer: "Central Processing Unit",
    incorrect_answers: [
      "Central Process Unit",
      "Computer Personal Unit",
      "Central Processor Unit",
    ],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
      "In the programming language Java, which of these keywords would you put on a variable to make sure it doesn&#039;t get modified?",
    correct_answer: "Final",
    incorrect_answers: ["Static", "Private", "Public"],
  },
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "easy",
    question: "The logo for Snapchat is a Bell.",
    correct_answer: "False",
    incorrect_answers: ["True"],
  },
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "easy",
    question:
      "Pointers were not used in the original C programming language; they were added later on in C++.",
    correct_answer: "False",
    incorrect_answers: ["True"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
      "What is the most preferred image format used for logos in the Wikimedia database?",
    correct_answer: ".svg",
    incorrect_answers: [".png", ".jpeg", ".gif"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "In web design, what does CSS stand for?",
    correct_answer: "Cascading Style Sheet",
    incorrect_answers: [
      "Counter Strike: Source",
      "Corrective Style Sheet",
      "Computer Style Sheet",
    ],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
      "What is the code name for the mobile operating system Android 7.0?",
    correct_answer: "Nougat",
    incorrect_answers: ["Ice Cream Sandwich", "Jelly Bean", "Marshmallow"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "On Twitter, what is the character limit for a Tweet?",
    correct_answer: "140",
    incorrect_answers: ["120", "160", "100"],
  },
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "easy",
    question: "Linux was first created as an alternative to Windows XP.",
    correct_answer: "False",
    incorrect_answers: ["True"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
      "Which programming language shares its name with an island in Indonesia?",
    correct_answer: "Java",
    incorrect_answers: ["Python", "C", "Jakarta"],
  },
]

const btn1 = document.createElement("button")
const btn2 = document.createElement("button")
const btn3 = document.createElement("button")
const btn4 = document.createElement("button")
const btnTrue = document.createElement("button")
const btnFalse = document.createElement("button")
const btnSubmit = document.createElement("button")

const questionsContainer = document.querySelector("#quests-container")
const questsH2 = document.querySelector("#quests")
// const answer = document.querySelector("#")

let quest = []
const questionAndAnswer = function () {
  for (let i = 0; i < arrOfQuestions.length; i++) {
    quest.push(arrOfQuestions[i].question)
    //console.log(quest[i])
  }
  questsH2.innerHTML = quest[0]
  questionsContainer.appendChild(questsH2)
  const btnGo = document.createElement("button")
  btnGo.innerText = "next"
  const divBtnProx = document.querySelector("#prox-domanda")
  divBtnProx.appendChild(btnGo)
  btnGo.addEventListener("click", () => {
    quest[1]
    console.log(quest)
  })
}
questionAndAnswer()
// console.log(quest)
// questionAndAnswer()
// const singleQuestion = function () {
//   for (let i = 0; i < quest.length; i++) {
//   }
// }
// singleQuestion()
