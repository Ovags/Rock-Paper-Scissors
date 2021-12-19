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
    roundContainer.textContent = "Round "+ ++round;
    if (playerSelection==="rock"){
        if (computerSelection==="rock"){
            return "Rock vs rock... It's a draw!";
        }if (computerSelection==="paper"){
            score[1]++;
            scoreContainer.textContent = "You "+score[0]+" : "+score[1]+" Computer";
            return "Rock vs paper... You lose!";
        }
        score[0]++;
        scoreContainer.textContent = "You "+score[0]+" : "+score[1]+" Computer";
        return "Rock vs scissors... You win!";
    }if (playerSelection==="paper"){
        if (computerSelection==="rock"){
            score[0]++;
            scoreContainer.textContent = "You "+score[0]+" : "+score[1]+" Computer";
            return "Paper vs rock... You win!";
        }if (computerSelection==="paper"){
            return "Paper vs paper... It's a draw!";
        }
        score[1]++;
        scoreContainer.textContent = "You "+score[0]+" : "+score[1]+" Computer";
        return "Paper vs scissors... You lose!";
    }if (computerSelection==="rock"){
        score[1]++;
        scoreContainer.textContent = "You "+score[0]+" : "+score[1]+" Computer";
        return "Scissors vs rock... You lose!";
    }if (computerSelection==="paper"){
        score[0]++;
        scoreContainer.textContent = "You "+score[0]+" : "+score[1]+" Computer";
        return "Scissors vs paper... You win!";
    } return ("Scissors vs scissors... It's a draw!");
}

buttonRock.addEventListener('click', function e(){
    const cp = computerPlay();
    resultsContainer.textContent = playARound("rock",cp);
});

buttonPaper.addEventListener('click', function e(){
    const cp = computerPlay();
    resultsContainer.textContent = playARound("paper",cp);
});

buttonScissors.addEventListener('click', function e(){
    const cp = computerPlay();
    resultsContainer.textContent = playARound("scissors",cp);
});

function game(){
    let playerScore=0;
    let computerScore=0;
    for(let i=0;i<5;i++){
        console.log("Round "+(i+1)+" fight!!!");
        console.log();
        let playerSelection=prompt("Input your choice (rock, paper or scissors");
        let result=playARound(playerSelection, computerPlay());
        if ((result==="Rock vs rock... It's a draw!")||
                (result==="Paper vs paper... It's a draw!")||
                        (result==="Scissors vs scissors... It's a draw!")){
            i--;
        }else if(result==="Rock vs scissors... You win!"||
                result==="Paper vs rock... You win!"||
                        result==="Scissors vs paper... You win!"){
            playerScore++;
        }else{
            computerScore++;
        }

        if((computerScore===3&&playerScore===0)||(computerScore===0&&playerScore===3)){
            break;
        }
    }

    console.log("It's over! Final score : ");
    console.log("Player : "+playerScore+" - Computer : "+computerScore);
    if(playerScore>computerScore){
        console.log("You win!!!");
    }else{
        console.log("You lose...");
    }
}