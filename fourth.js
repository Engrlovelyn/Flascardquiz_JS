function startTimer() {
    timeLeft = 10;
    document.getElementById("time").textContent = timeLeft;
    timer = setInterval(function() {
        timeLeft--;
        document.getElementById("time").textContent = timeLeft;
        if (timeLeft <= 0) {
            clearInterval(timer);
            nextQuestion();
        }
    }, 1000);
}

function stopTimer() {
    clearInterval(timer);
}
