var startBtn = document.getElementById('start-btn');
var questionBtn = document.getElementById('question-cont');
var questionDisp = document.getElementById('question');
var answerDisp = document.getElementsByClassName('btn');
var timerEl = document.getElementById('timer');


var questions = [
    {
        question: 'Common data types do NOT include _______.',
        answers: [
            { text: 'Strings', correct: false },
            { text: 'Booleans', correct: false },
            { text: 'Alerts', correct: true },
            { text: 'Numbers', correct: false }
        ]
    }
]


startBtn.addEventListener('click', start);
questionBtn.addEventListener('click', function () {
    console.log('hello');
})

function start() {
    countdown();
    startBtn.classList.add('hide');
    questionBtn.classList.remove('hide');
}

function countdown() {
    var timeLeft = 5;
    var timeInterval = setInterval(function () {
        if (timeLeft > -1) {
            timerEl.textContent = 'Time Left: ' + timeLeft;
            timeLeft--;
        }
        else {
            clearInterval(timeInterval);
            window.location.href = "leaderboard.html";
        }
    }, 1000)
}

