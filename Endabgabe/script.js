let questions = [
    "What is Taylor Swift´s birthdate?",
    "In which year did Taylor Swift release her Debut album?",
    "What is Taylor Swift´s favorite number?",
    "Who is Taylor Swift´s song Getaway Car rumoured to be about?",
    "Which two actors did Taylor Swift feature in her All Too Well short film?",
    "What is Taylor Swift´s middle name?",
    "How many Tayor Swift covers are in black and white?",
    "How many albums does Taylor Swift have?",
    "Taylor Swift won her firts grammy for which song?",
    "What song did Taylor Swift write for her high school talent show?"
];
// Fragen Arrays
let options = [
    ["December 13, 1989", "July 24, 1985", "October 3, 1990"],
    ["2004", "2006", "2008"],
    ["13", "20", "67"],
    ["Jake Gyllenhaal", "Tom Hiddleston", "Taylor Lautner"],
    ["Theo James and Timothée Chalamet", "Tyler Posey and Holland Roden", "Dylan O´Brien and Sadie Sink"],
    ["Maria", "Alison", "Rose"],
    ["2", "4", "5"],
    ["6", "10", "7"],
    ["Shake it off", "Enchanted", "White horse"],
    ["Picture to burn", "Our song", "Teardrops on my guitar"]
];
// Antworten Arrays
let correctAnswers = [
    "December 13, 1989",
    "2006",
    "13",
    "Tom Hiddleston",
    "Dylan O´Brien and Sadie Sink",
    "Alison",
    "2",
    "10",
    "White horse",
    "Our song"
];
// Richtige Antworten Arrays

let currentQuestion = 0;
let score = 0;

const questionElement = document.getElementById('question');
const optionsElement = document.getElementById('options');
const resultElement = document.getElementById('result');
const scoreElement = document.getElementById('score');
// das jeweilige element wird gesucht und unter der jeweiigen Id gespeichert 


function selectOption(selectedIndex) {
    if (options[currentQuestion][selectedIndex] === correctAnswers[currentQuestion]) {
        score++;
    }
    //prüft ob antowort richtig ist falls ja + punkt zum score 

    currentQuestion++;  // variable wird erhöht um zur nächsten Frage zu kommen

    if (currentQuestion < questions.length) {
        loadQuestion();
    //falls noch fragen dann die nächste frage stellen
    } else {
        showResult();
    }
    // falls keine fragen mehr da sind zeige das ergebnis an
}
//start timer
let timeLimit = 20; // 20 sek Time limit
let timeRemaining = timeLimit; // Verbleibende Zeit
let timer;


function updateTimerDisplay(timeRemaining) {
    const timerElement = document.getElementById('timer');
    timerElement.textContent = `Time Remaining: ${timeRemaining} seconds`;
}

function loadQuestion() {
    clearInterval(timer); // Stoppe den vorherigen Timer

    timeRemaining = timeLimit; // Setze Zeit zurück
    updateTimerDisplay(timeRemaining); // Aktualisiere die Zeit 

    timer = setInterval(function () {
        timeRemaining--;

        if (timeRemaining >= 0) {
            updateTimerDisplay(timeRemaining);// timer soll geupdated werden solange er nicht abgelaufen ist
        }

        if (timeRemaining === 0) {
            clearInterval(timer); // timer stoppt wenn die zeit auf 0 ist und setzt sich zurück
            
            selectOption(-1);
        }
    }, 1000); // timer wird alle 1000ms (1Sek) Aktualisiert

    
    const result = { score: score, outOf: questions.length, timedOut: false };
    questionElement.textContent = questions[currentQuestion];

    optionsElement.innerHTML = "";
    options[currentQuestion].forEach((option, index) => {
        const optionElement = document.createElement('div');
        optionElement.className = 'option';
        optionElement.textContent = option;
        optionElement.addEventListener('click', () => selectOption(index));
        optionsElement.appendChild(optionElement);
    });

    return result;// für den return drin 
    

    questionElement.textContent = questions[currentQuestion]; // Aktuelle frage wird immer angezeigt

    optionsElement.innerHTML = ""; // setzt die options zurück 
    options[currentQuestion].forEach((option, index) => { 
        const optionElement = document.createElement('div'); // neues div für die optionen 
        optionElement.className = 'option';
        optionElement.textContent = option;
        optionElement.addEventListener('click', () => selectOption(index));
        optionsElement.appendChild(optionElement);
    });
}

function showResult() { 
    document.getElementById('quiz').style.display = 'none';
    resultElement.style.display = 'block';
    scoreElement.textContent = `Your Score: ${score} out of ${questions.length}`;
}
// Zeigt den erhaltenen Score an 

function submitAnswer() {
    const selectedOption = document.querySelector('.option:hover');
    if (selectedOption) {
        const selectedIndex = Array.from(selectedOption.parentNode.children).indexOf(selectedOption);
        selectOption(selectedIndex);
    }
}// überprüft ob eine option ausgewählt worden ist 

loadQuestion();


document.querySelector('.quiz-container').style.display = 'none';

document.getElementById('startButton').addEventListener('click', startGame);

function startGame() {
    document.querySelector('.intro').style.display = 'none';
    document.querySelector('.quiz-container').style.display = 'block';
    loadQuestion();
}

let start = document.querySelector (".intro");

function handleLoaded(){

}
function handleTouch12 (){
   var startButton = document.getElementById('startButton');
   var clickEvent = new Event ("click");
   startButton.dispatchEvent (clickEvent);


}