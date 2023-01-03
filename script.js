let player = 0;
let computer = 0;
let round = 0;


//the following function is a random number generator in a specified range where the range starts from min and ends at max
function randomIntFromInterval(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function getComputerChoice(){
    const sel = new Map();
    sel.set(1, 'rock');
    sel.set(2, 'paper');
    sel.set(3, 'scissors');
    const a = randomIntFromInterval(1,3);
    return sel.get(a);
}

function playRound(playerSelection, computerChoice){
    if(playerSelection === 'rock' && computerChoice === 'scissors' || playerSelection === 'paper' && computerChoice === 'rock' || playerSelection === 'scissors' && computerChoice === 'paper'){
        player++;
        console.log('player wins');
        round++;
    }
    else if(playerSelection === 'rock' && computerChoice === 'paper' || playerSelection === 'scissors' && computerChoice === 'rock' || playerSelection === 'paper' && computerChoice === 'scissors'){
        computer++;
        console.log('computer wins');
        round++;
    }
    else{
        console.log('Draw');
        round++;
    }
}

function gameEnd(){
    if(round === 5){
        return true;
    }
    else{
        return false;
    }
}

function showEndGame(){
    if(player>computer){
        console.log('player wins');
    }
    else if(player<computer){
        console.log('computer wins');
    }
    else{
        console.log('Tie');
    }
}


const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');
rock.addEventListener('click', initiate('rock'));
paper.addEventListener('click', initiate('paper'));
scissors.addEventListener('click', initiate('scissors'));

function initiate(playerChoice){
    if(gameEnd()){
        showEndGame();
        return ;
    }
    const computerChoice = getComputerChoice();
    playRound(playerChoice,computerChoice);
}