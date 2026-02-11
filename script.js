function showSection(id) {
    let sections = document.querySelectorAll('.content');
    sections.forEach(section => {
        section.style.display = "none";
    });
    document.getElementById(id).style.display = "block";
}

function checkAnswer(answer) {
    let result = document.getElementById("result");
    if (answer === "1914") {
        result.textContent = "Bonne réponse ! La guerre commence en 1914.";
        result.style.color = "green";
    } else {
        result.textContent = "Mauvaise réponse. La bonne réponse est 1914.";
        result.style.color = "red";
    }
}
