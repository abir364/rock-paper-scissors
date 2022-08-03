function getComputerChoice(){
    const sel = new Map();
    sel.set(1, 'rock');
    sel.set(2, 'paper');
    sel.set(3, 'scissors');
    const a = randomIntFromInterval(1,3);
    return sel.get(a);
}

function randomIntFromInterval(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function playRound(playerSelection, computerChoice){
    const result = new Map();
    result.set('rock paper', 'You lose! Paper beats Rock');
    result.set('rock rock', 'Draw!');
    result.set('rock scissors', 'You win! Rock beats Scissors');
    result.set('paper rock', 'You win! Paper beats Rock');
    result.set('paper paper', 'Draw!');
    result.set('paper scissors', 'You lose! Scissors beats Paper');
    result.set('scissors rock', 'You lose! Rock beats Scissors');
    result.set('scissors scissors', 'Draw!');
    result.set('scissors paper', 'You win! Scissors beats Paper');
    let choice = playerSelection + ' ' + computerChoice;
    return result.get(choice);
}

function game(){
    for (let i = 0; i < 5; i++) {
        let playerSelection = prompt("Enter your selection").toLowerCase();
        let computerChoice = getComputerChoice();
        console.log(playRound(playerSelection,computerChoice));
    }
}