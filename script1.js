let currentQuestionIndex = 0;
let score = 0;
let timer;
let timeLeft = 10;
let questions = [];

function loadQuestions() {
    questions = [
        {
            question: "What does HTML stand for?",
            options: ["HyperText Markup Language", "Home Tool Markup Language", "Hyperlinks and Text Markup Language", "None of the above"],
            correctAnswer: 0
        },
        {
            question: "Which tag is used to define an internal style sheet in HTML?",
            options: ["style", "script", "css", "link"],
            correctAnswer: 0
        },
        {
            question: "Which is the correct HTML element to define a paragraph?",
            options: ["p", "paragraph", "para", "text"],
            correctAnswer: 0
        },
        {
            question: "How do you add a comment in HTML?",
            options: ["<!-- This is a comment -->", "// This is a comment", "/* This is a comment */", "<comment>This is a comment</comment>"],
            correctAnswer: 0
        },
        {
            question: "What is the correct HTML element for inserting an image?",
            options: ["img", "image", "src", "picture"],
            correctAnswer: 0
        },
        {
            question: "Which tag is used to display a list of items in HTML?",
            options: ["ul", "list", "ol", "li"],
            correctAnswer: 0
        },
        {
            question: "How do you create a link in HTML?",
            options: ["link", "a", "href", "url"],
            correctAnswer: 1
        },
        {
            question: "Which HTML element is used to define a header for a section?",
            options: ["header", "h1", "section", "div"],
            correctAnswer: 0
        },
        {
            question: "What does the meta tag define in HTML?",
            options: ["Metadata for the document", "The title of the document", "The main content", "The script for the document"],
            correctAnswer: 0
        },
        {
            question: "What is the correct HTML element for playing audio files?",
            options: ["audio", "music", "sound", "play"],
            correctAnswer: 0
        }
    ];
}

function startQuiz() {
    document.getElementById("start-btn").style.display = "none";
    document.getElementById("question-container").style.display = "block";
    loadQuestions();
    showQuestion();
    startTimer();
}
