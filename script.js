const body = document.querySelector('body');
const buttonRock = document.querySelector('#rock');
const buttonPaper = document.querySelector('#paper');
const buttonScissors = document.querySelector('#scissors');
const resultsContainer = document.querySelector('#results-container');
const scoreContainer = document.querySelector('#score');
let score = [0,0];
scoreContainer.textContent = "You "+score[0]+" : "+score[1]+" Computer";
const roundContainer = document.querySelector('#round');
let round = 1;
roundContainer.textContent = "Round 1";
const finalScoreContainer = document.createElement('div');
const finalScoreDiv = document.createElement('div');
const winOrLoseDiv = document.createElement('div');
const finalRoundDiv = document.createElement('div');
const finalScoreTextDiv = document.createElement('div');
const finalScoreScoreDiv = document.createElement('div');
const playNewGameButton = document.createElement('button');
const roundDiv = document.querySelector('#round');
const scoreDiv = document.querySelector('#score');
const buttonsContainer = document.querySelector('#buttons-container');

function computerPlay(){
    let result = parseInt(Math.random()*3+1);
    if (result===1){
        result="rock";
    } else if (result===2){
        result="paper";
    } else {
        result="scissors";
    }
    return result;
}

function playARound(playerSelection, computerSelection){
    return playerSelection+" vs "+computerSelection+"... "+roundResult(playerSelection, computerSelection);
}

function roundResult(playerSelection, computerSelection) {
    if ((playerSelection==="rock"&&computerSelection==="scissors")||
        (playerSelection==="paper"&&computerSelection==="rock")||
        (playerSelection==="scissors"&&computerSelection==="paper")){
            score[0]++;
            updateScore();
            return "You win!";
        }else if (playerSelection===computerSelection){
            return "It's a draw!";
        }score[1]++;
        console.log("bite"+score);
        updateScore();
        return "You lose...";
}

function updateScore(){
    scoreDiv.textContent = "You "+score[0]+" : "+score[1]+" Computer";
}

function isEndOfGame(playerSelection){
    const cp = computerPlay();
    resultsContainer.textContent = playARound(playerSelection, cp);
    if (score[0]===5||score[1]===5){
        endOfGame();
    }
}

function endOfGame(){
    displayFinalScore();
    resetEverything();
}

function displayFinalScore(){
    setFinalScoreContainer();
    setWinOrLoseDiv();
    setFinalRoundDiv();
    setFinalScoreDiv();
    makeInvisible(roundDiv);
    makeInvisible(scoreDiv);
    makeInvisible(buttonsContainer);
    setPlayNewGameButton();
}

function setFinalScoreContainer(){
    makeVisible(finalScoreContainer)
    finalScoreContainer.id = 'final-score-container';
    body.appendChild(finalScoreContainer);
}

function setWinOrLoseDiv(){
    winOrLoseDiv.id = 'win-or-lose';
    if (isWon()){
       winOrLoseDiv.textContent = 'You won!';
    }else{winOrLoseDiv.textContent = 'You lost...'}
    finalScoreContainer.appendChild(winOrLoseDiv);
}

function isWon(){
    if (score[0]===5) return true;
    if(score[1]===5) return false;
    else {
        console.log('Error with score : '+score[0]+' '+score[1]);
    }
}

function setFinalRoundDiv(){
    finalRoundDiv.id = 'final-round';
    finalRoundDiv.textContent = 'in '+round+' rounds';
    finalScoreContainer.appendChild(finalRoundDiv);
}

function setFinalScoreDiv(){
    finalScoreDiv.id = 'final-score';
    finalScoreContainer.appendChild(finalScoreDiv);
    setFinalScoreTextDiv();
    setFinalScoreScoreDiv(); 
}

function setFinalScoreTextDiv(){
    finalScoreTextDiv.id = 'text';
    finalScoreTextDiv.textContent = 'with a final score of :';
    finalScoreDiv.appendChild(finalScoreTextDiv);
}

function setFinalScoreScoreDiv(){
    finalScoreScoreDiv.textContent = 'You '+score[0]+' : '+
        score[1]+' Computer';
    finalScoreDiv.appendChild(finalScoreScoreDiv);
}

function makeInvisible(mustDisappear){
    mustDisappear.classList.add('invisible');
}

function setPlayNewGameButton(){
    playNewGameButton.id ='new-game-button';
    playNewGameButton.textContent = 'Play new game';
    finalScoreContainer.appendChild(playNewGameButton);
    playNewGameButton.addEventListener('click',function e(){
        playNewGame();
    });
}

function resetEverything(){
    round=1;
    score=[0,0];
    scoreContainer.textContent="";
    resultsContainer.textContent="";
}

function playNewGame(){
    makeVisible(roundDiv);
    makeVisible(scoreDiv);
    makeVisible(buttonsContainer);
    makeInvisible(finalScoreContainer);
    roundContainer.textContent = "Round 1";
    scoreContainer.textContent = "You "+score[0]+" : "+score[1]+" Computer";
}

function makeVisible(elementToMakeVisible){
    elementToMakeVisible.classList.remove('invisible');
}

buttonRock.addEventListener('click', function e(){
    isEndOfGame("rock");
});

buttonPaper.addEventListener('click', function e(){
    isEndOfGame("paper");
});

buttonScissors.addEventListener('click', function e(){
    isEndOfGame("scissors");
});
