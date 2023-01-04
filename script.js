let player = 0;
let computer = 0;
let winner = '';


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
        winner = 'player';
    }
    else if(playerSelection === 'rock' && computerChoice === 'paper' || playerSelection === 'scissors' && computerChoice === 'rock' || playerSelection === 'paper' && computerChoice === 'scissors'){
        computer++;
        winner = 'computer';
    }
    else{
    }
    updateScoreCard(winner, playerSelection, computerChoice);
}

function gameEnd(){
    return player === 5 || computer === 5;
}

function showEndGame(){
    const end = document.createElement('div');
    const modal = document.querySelector('.modal');
    const overlay = document.querySelector('.overlay');
    if(player>computer){
        end.textContent = 'Player wins!!!!';
    }
    else if(player<computer){
        end.textContent = 'Computer wins 😔😔😔' ;
    }
    else{
        end.textContent = 'Tie';
    }
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
    end.classList.add('winner-message');
    modal.insertBefore(end, rst2);
}

const plr = document.querySelector('.plr');
const com = document.querySelector('.com');
const w = document.querySelector('.winner');
const pc = document.querySelector('.pc');
const cc = document.querySelector('.cc');
const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');
const rst = document.querySelector('#rst');
const rst2 = document.querySelector('#rst2');

rock.addEventListener('click', () => initiate('rock'));
paper.addEventListener('click', () => initiate('paper'));
scissors.addEventListener('click', () => initiate('scissors'));
rst.addEventListener('click', () => restartGame());
rst2.addEventListener('click', () => restartGame());

function initiate(playerChoice){
    if(gameEnd()){
        return ;
    }
    
    const computerChoice = getComputerChoice();
    playRound(playerChoice,computerChoice);

    if(gameEnd()){
        showEndGame();
        return ;
    }
}

function updateScoreCard(winner, playerSelection, computerChoice){
    w.textContent = 'Winner: ' + winner;
    pc.textContent = 'Player choice ' + playerSelection;
    cc.textContent = 'Computer choice '+ computerChoice;
    plr.textContent = 'Player: ' + player;
    com.textContent = 'Computer: ' + computer;
}

function restartGame(){
    location.reload();
}