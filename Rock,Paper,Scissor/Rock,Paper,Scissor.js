//Rock,Paper,Scissor

const initGame = ()=>{
    const startGame = confirm("Shall We Play Rock,Papr,Scissor?");
    startGame ? playGame() : alert("Ok, May be next time.");

};

const playGame = () =>{
    while (true){
        let playerChoice = getPlayerChoice();
        playerChoice = formatPlayerChoice(playerChoice);
        if(playerChoice === ""){
            invalidChoice();
            continue;
        }

        if(!playerChoice === ""){
            decideNotToPlay();
            break;
        }

        playerChoice = evaluatePlayerChoice(playerChoice);
        if (!playerChoice){
            invalidChoice();
            continue;
        }

        const computerChoice = getComputerChoice();
        const result = determineWinner(playerChoice,computerChoice);
        displayResult(result);
        if (askToPlayAgain()){
            continue;
        } else{
            thanksForPlaying();
            break;
        }
    }
};


const getPlayerChoice = () =>{
    return prompt("Please enter Rock, Paper or Scissor");
};

const formatPlayerChoice = (playerChoice) => {
    if (playerChoice || playerChoice ===""){
       return playerChoice.trim().toLowerCase(); 
    }else{
        return false;
    }
};

const decideNotToPlay = () =>{
    alert("I guess you changed your mind. May be next time.");
};

const evaluatePlayerChoice = (playerChoice) =>{
    if (playerChoice === "Rock" ||
        playerChoice === "Paper" ||
        playerChoice === "Scissor"){
            return playerChoice;
    } else{
        return false;
    }
};

const invalidChoice = () =>{
    alert("You didn't entered Rock, Paper or Scissor.");
};

const getComputerChoice = () =>{
    const randomNumber = Math.floor(Math.random()*3);
    const rpsArray =["Rock","Paper","Scissor"];
    return rpsArray(randomNumber);
};

const determineWinner = (player,computer) =>{
    const winner =
    player === computer
    ? "Tie Game!"
    : player === "Rock" && computer === "Paper"
    ? `PlayerOne: ${player}\nComputer: ${computer}\nComputer Wins!`
    : player === "Paper" && computer === "Scissor"
    ? `PlayerOne: ${player}\nComputer: ${computer}\nComputer Wins!`
    : player === "Scissor" && computer === "Rock"
    ? `PlayerOne: ${player}\nComputer: ${computer}\nComputer Wins!`
    : `PlayerOne: ${player}\nComputer: ${computer}\nComputer Wins!`;

    return winner;
};

const displayResult = (result) => {
    alert(result);
};

const askToPlayAgain = () =>{
    return confirm("Play Again?");
};

const thanksForPlaying = () =>{
    alert("Ok, Thanks for playing!");
};

initGame();