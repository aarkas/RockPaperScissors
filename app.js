const choices = ['paper', 'scissors', 'rock']

const buttons = document.querySelectorAll('.btn')

console.log(pickRandom());

function pickRandom() {
    return choices[Math.floor(Math.random() * choices.length)];
}
