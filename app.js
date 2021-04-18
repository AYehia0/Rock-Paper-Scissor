//getting elements 

computerChoice = 0;
userChoice = 0;

// score board 
userScore = document.getElementById("user-score")
computerScore = document.getElementById("computer-score")

//selectores 
scoreBoard = document.querySelector(".game-board")
result = document.querySelector(".winning")

// the 3 choices 
choiceRock = document.getElementById("r")
choicePaper = document.getElementById("p")
choiceScissor = document.getElementById("s")

choicesAlpha = {
    "r": "Rock",
    "p": "Paper",
    "s": "Scissor"
}

function getRandomChoice () {
    //list of all the keys 
    const optionsDict = {
        1:"r",
        2:"p",
        3:"s"
    }

    var keys = Object.keys(optionsDict);

    return optionsDict[keys[Math.floor(keys.length * Math.random())]];
}

function getUserChoice () {
    choiceRock.addEventListener("click", function () {
        playGame("r");
    })
    choicePaper.addEventListener("click", function() {
        playGame("p");
    })
    
    choiceScissor.addEventListener("click", function() {
        playGame("s");
    })
}

function playGame(choice){
    // game logic
    var compChoice = getRandomChoice();
    var userChoice = choice;
    
    //for debugging 
    //console.log("User : " + userChoice + " Comp: " + compChoice);

    //game logic
    //usr wins 
    if(userChoice+compChoice === "rs" || userChoice+compChoice === "pr" || userChoice+compChoice === "sp"){
        console.log("User Wins !!!");
        updateBoard(1,0);

        //changing the result
        result.innerHTML = `${choicesAlpha[userChoice]} wins ${choicesAlpha[compChoice]}`;
    }
    //user loses 
    else if (userChoice+compChoice === "sr" || userChoice+compChoice === "rp" || userChoice+compChoice === "ps"){
        console.log("User Loses !!!");
        updateBoard(0,1);

        //changing the result
        result.innerHTML = `${choicesAlpha[compChoice]} wins ${choicesAlpha[userChoice]}`;

    }else {
        console.log("Draw");
        result.innerHTML = `It's a DRAW !!!`;
    } 
   

}
function updateBoard(user, comp){

   userScore.innerHTML = parseInt(userScore.innerHTML) + user;
   computerScore.innerHTML = parseInt(computerScore.innerHTML) + comp;
}
function main() {
    // main funciton , idk why 
    getUserChoice();

}


main()
