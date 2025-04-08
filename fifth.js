function showResults() {
    document.getElementById("question-container").style.display = "none";
    document.getElementById("next-btn").style.display = "none";
    document.getElementById("score-container").style.display = "block";
    document.getElementById("final-score").textContent = `${score} out of ${questions.length}`;
    showConfetti();
}

function showConfetti() {
    const confetti = document.createElement('div');
    confetti.textContent = "🎉 Congratulations! 🎉";
    confetti.style.fontSize = "30px";
    confetti.style.color = "#FF6347";
    confetti.style.marginTop = "20px";
    document.getElementById("score-container").appendChild(confetti);

    // Simple confetti animation (Optional: you can use a library for better effects)
    setTimeout(() => {
        confetti.remove();
    }, 2000);
}
