const choices = ['paper', 'rock', 'scissors'];
const scoreElement = document.getElementById('score_points');

const buttons = document.querySelectorAll('.btn');

let score = 0; 
let userChoice = undefined;

buttons.forEach(button => {
    button.addEventListener('click', () => {
        userChoice = button.getAttribute('data-choice');

        Winner();
    });
});

function Winner() {
    const computerChoice = pickRandom();

    if (userChoice === computerChoice) {

    }   else if (
        (userChoice === 'paper' && computerChoice === 'rock') ||
        (userChoice === 'rock' && computerChoice === 'scissors') ||
        (userChoice === 'scissors' && computerChoice === 'paper') 
            
     ) {
         updateScore(1);

     } else {
         updateScore(-1);

     }

}

function updateScore(value) {
    score += value;

    scoreElement.innerText = score;
}

function pickRandom() {
    return choices[Math.floor(Math.random() * choices.length)]
    ;
}
