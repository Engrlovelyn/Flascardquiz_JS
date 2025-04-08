function answerQuestion(selectedAnswer) {
    const question = questions[currentQuestionIndex];
    if (selectedAnswer === question.correctAnswer) {
        score++;
    }
    document.getElementById("next-btn").style.display = "inline-block";
    stopTimer();
}

function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
        document.getElementById("next-btn").style.display = "none";
        startTimer();
    } else {
        showResults();
    }
}
