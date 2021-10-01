

const choices = ['paper', 'rock', 'scissors'];

const buttons = document.querySelectorAll('.pick');

const scoreElement = document.getElementById('score_points');
const main = document.getElementById('main');
const selection = document.getElementById('selection');
const playAgain = document.getElementById('playAgain');
const user = document.getElementById('user');
const computer = document.getElementById('computer');
const win = document.getElementById('win');

const showRules = document.getElementById('showRules');
const openBtn = document.getElementById('open');
const closeBtn = document.getElementById('close');


let score = 0; 
let userChoice = undefined;

buttons.forEach(button => {
    button.addEventListener('click', () => {
        userChoice = button.getAttribute('data-choice');

        Winner();
    });
});

playAgain.addEventListener('click', () => {
    main.style.display = 'flex';
    selection.style.display = 'none';
});


openBtn.addEventListener('click', () => {
    showRules.style.display = 'flex';
});

closeBtn.addEventListener('click', () => {
    showRules.style.display = 'none';
});




function Winner() {
    const computerChoice = pickRandom();

    updateSelection(user, userChoice);
    updateSelection(computer, computerChoice);



    if (userChoice === computerChoice) {
        win.innerText = 'draw';

    }   else if (
        (userChoice === 'paper' && computerChoice === 'rock') ||
        (userChoice === 'rock' && computerChoice === 'scissors') ||
        (userChoice === 'scissors' && computerChoice === 'paper') 
            
     ) {
         updateScore(1);
         win.innerText = 'win';

     } else {
         updateScore(-1);
         win.innerText = 'lose';

     }

     main.style.display = 'none';
     selection.style.display = 'flex';

}

function updateScore(value) {
    score += value;

    scoreElement.innerText = score;
}

function pickRandom() {
    return choices[Math.floor(Math.random() * choices.length)]
    ;
}

function updateSelection(selectionElement, choice) {
    selectionElement.classList.remove('btn-paper');
    selectionElement.classList.remove('btn-rock');
    selectionElement.classList.remove('btn-scissors');

    const img = selectionElement.querySelector('img');
    selectionElement.classList.add(`btn-${choice}`);
    img.src = `/images/icon-${choice}.svg`;
    img.alt = choice;


}