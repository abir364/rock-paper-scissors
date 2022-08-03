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
function gamelogic(){
    const playerSelection = prompt("Enter your selection").toLowerCase();
    const computerChoice = getComputerChoice();
    const result
    console.log(playerSelection, computerChoice);
}