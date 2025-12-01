// Quiz Questions Array
const quizQuestions = [
    { question: "What is the capital of India?", answer: "delhi" },
    { question: "HTML stands for?", answer: "hypertext markup language" },
    { question: "CSS is used for?", answer: "styling" },
    { question: "Which keyword is used to declare a variable in JavaScript?", answer: "let" },
    { question: "JavaScript runs inside which environment? (browser/node)", answer: "browser" }
];

// Function to Run the Quiz
function runQuiz() {
    let score = 0;

    for (let i = 0; i < quizQuestions.length; i++) {
        let userInput = prompt(quizQuestions[i].question);

        if (!userInput) {
            alert("No input given. Moving to next question.");
            continue;
        }

        userInput = userInput.toLowerCase().trim();

        if (userInput === quizQuestions[i].answer) {
            score++;
            alert("Correct! ✔️");
        } else {
            alert("Wrong ❌. Correct answer: " + quizQuestions[i].answer);
        }
    }

    alert("Quiz Completed! 🎉 Your Score: " + score + "/" + quizQuestions.length);
}

// Run the Quiz
runQuiz();