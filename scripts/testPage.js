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
];

const questionsContainer = document.querySelector("#quests-container");
const questsH2 = document.querySelector("#quests");
const nextButton = document.querySelector("#next");
let index = 0;
let answerIndex = 0;
const incorrectAnswer = [];
let correctAnswer = [];
let allAnswer = 10;

const structuringQuiz = function () {
  // // CHANGE QUESTIONS
  if (index < arrOfQuestions.length) {
    let itemNow = arrOfQuestions[index];

    questsH2.textContent = itemNow.question;
    index++;

    // CHANGE ANSWERS
    const totalAnswer = [itemNow.correct_answer, ...itemNow.incorrect_answers];
    //console.log(totalAnswer)
    totalAnswer.sort(() => Math.random() - 0.5);
    const buttonsContainer = document.getElementById("buttons-container");
    while (buttonsContainer.firstChild) {
      buttonsContainer.removeChild(buttonsContainer.firstChild);
    }
    totalAnswer.forEach((element) => {
      const answerButton = document.createElement("button");
      answerButton.classList.add("answer-btn");
      answerButton.innerText = element;
      answerButton.addEventListener("click", function () {
        answerButton.classList.add("answerclick-btn");
        if (element === itemNow.correct_answer) {
          correctAnswer.push(itemNow.correct_answer);
        } else {
          element === itemNow.incorrect_answers;
          incorrectAnswer.push(itemNow.incorrect_answers);
        }
        console.log(correctAnswer);
        console.log(incorrectAnswer);
        console.log(answerButton);
      });

      buttonsContainer.appendChild(answerButton);

      // console.log(answerButton)
    });
  }
};
structuringQuiz();
nextButton.addEventListener("click", structuringQuiz);

// QUESTION COUNTER
const p = document.createElement("p");

let nQuestion = 0;
let count = nQuestion + "/10";
const countAtClick = function () {
  nQuestion++;
  count = nQuestion + "/10";
  console.log(count);
  p.innerText = count;
};
countAtClick();
nextButton.addEventListener("click", countAtClick);

// TIMER
let initialTime = 1000;
let time = initialTime;
let startTimer = function () {
  document.getElementById("timer").innerText =
    "Seconds" + " " + time + " " + "remain";
  time--;
  if (time < 0) {
    clearInterval(interval);
    time = initialTime;
    countAtClick();
    if (nQuestion > arrOfQuestions.length) {
      window.location.href = "resultsPage.html";
    }
    //changeQuestion()
    structuringQuiz();
    interval = setInterval(startTimer, 1000);
  }
};

let interval = setInterval(startTimer, 1000);
nextButton.addEventListener("click", function () {
  clearInterval(interval);
  time = initialTime;
  interval = setInterval(startTimer, 1000);
});
// CHANGE PAGE

let questionNumber = arrOfQuestions.length;
console.log(questionNumber);

nextButton.addEventListener("click", function () {
  if (nQuestion > 10) {
    window.location.href = "resultsPage.html";
  }
});

window.onload = function () {
  const div = document.querySelector("#counter-questions");
  div.appendChild(p);
  p.innerText = count;
};

localStorage.setItem("correctAnswer", correctAnswer);
localStorage.setItem("incorrectAnswer", incorrectAnswer);
// RESULTPAGE
