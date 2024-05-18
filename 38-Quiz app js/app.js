const questions = [
    {
        "question": "What is the capital of France?",
        answer: [
            {text: "shark", correct: false},
            {text: "Paris", correct: true},
            {text: "London", correct: false},
            {text: "Lahore", correct: false},
        ]
    },
    {
        "question": "What is the capital of Pakistan?",
        answer: [
            {text: "shark", correct: false},
            {text: "Paris", correct: false},
            {text: "London", correct: false},
            {text: "Islamabad", correct: true},
        ]
    },
    {
        "question": "What is the capital of England?",
        answer: [
            {text: "shark", correct: false},
            {text: "Paris", correct: false},
            {text: "London", correct: true},
            {text: "Islamabad", correct: false},
        ]
    },
    {
        "question": "The largest Country of the world?",
        answer: [
            {text: "Russia", correct: true},
            {text: "Pakistan", correct: false},
            {text: "England", correct: false},
            {text: "India", correct: false},
        ]    
    },
    {
        "question": "Who is the owner of Twiter?",
        answer: [
            {text: "Mark Zuckerberg", correct: false},
            {text: "Bill Gates", correct: false},
            {text: "Elon Musk", correct: false},
            {text: "Jack Dorsey", correct: true},
        ]
    }
];


const questionelement = document.getElementById("question");
const answerbtn = document.getElementById("answer-btn");
const nextbtn = document.getElementById("nextbtn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextbtn.innerHTML = "Next";
    showQuestion();
}

function showQuestion() {
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionelement.innerHTML = questionNo + ". " + currentQuestion.question

    currentQuestion.answer.forEach(answer => {
        const button = document.createElement("button");
        button.innerText = answer.text;
        button.classList.add("btn");
        answerbtn.appendChild(button);
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener('click', selectAnswer)
    });
}


function resetState() {
    nextbtn.style.display = "none";
    while (answerbtn.firstChild) {
        answerbtn.removeChild(answerbtn.firstChild)
    }
}

function selectAnswer(e) {
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if (isCorrect) {
        selectedBtn.classList.add("correct");
        score++;
    }
    else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerbtn.children).forEach(button => {
        if (button.dataset.correct === "true") {
            button.classList.add("correct");
        }
        button.disabled = true;
    })
    nextbtn.style.display = "block";
}


function showScore() {
    resetState()
    questionelement.innerHTML = `Your scored ${score} out of ${questions.length}`
    nextbtn.innerHTML = "Play Again";
    nextbtn.style.display = "block";
}

function handleNextButton() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    }
    else{
        showScore();
    }
}

nextbtn.addEventListener("click", () => {
  if (currentQuestionIndex < questions.length) {
    handleNextButton();
  }
  else{
    startQuiz();
  }
}
);
startQuiz();