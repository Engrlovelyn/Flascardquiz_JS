function showQuestion() {
    const question = questions[currentQuestionIndex];
    document.getElementById("question").textContent = question.question;
    const answersList = document.getElementById("answers");
    answersList.innerHTML = "";

    question.options.forEach((option, index) => {
        const li = document.createElement("li");
        li.textContent = option;
        li.setAttribute("onclick", `answerQuestion(${index})`);
        answersList.appendChild(li);
    });
}
