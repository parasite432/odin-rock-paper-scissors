let computerCount = 0;
let playerCount = 0;
let outputText = '';

    const playerClick = document.querySelectorAll('.playerSelec');
    const container = document.querySelector('#container');

    playerClick.forEach((button) => {


        button.addEventListener('click', function (e) {

            outputText = playRound(getComputerChoice(), this.id);
            console.log(outputText);

            let content = document.querySelector('.result');
            content.textContent = outputText;
            container.appendChild(content);
            
            
            if(playerCount === 5 || computerCount === 5) {
                if(playerCount > computerCount){alert('Game over! Player won');}
                else {alert('Game over! Computer won' );}
                
                playerCount = 0;
                computerCount = 0;
            }
            
            changeScores(computerCount,playerCount);
        });


    })



    function getComputerChoice() {

        const choiceArray = ['rock', 'paper', 'scissors'];

        let randomIndex = Math.floor(Math.random() * 3);

        return choiceArray[randomIndex];

    }




    function playRound(computerSelection, playerSelection) {

        
        let playerValue = playerSelection.toLowerCase();
        let winner = false;

        if (computerSelection !== playerValue && checkValue(playerValue) === true) {
            if (computerSelection === 'rock' && playerValue === 'scissors') { winner = false; }
            else if (computerSelection === 'rock' && playerValue === 'paper') { winner = true;}
            else if (computerSelection === 'paper' && playerValue === 'scissors') { winner = true; }
            else if (computerSelection === 'paper' && playerValue === 'rock') { winner = false; }
            else if (computerSelection === 'scissors' && playerValue === 'paper') { winner = false; }
            else if (computerSelection === 'scissors' && playerValue === 'rock') { winner = true; }

        }

        

        else {
            if (computerSelection === playerValue) {
                return 'tie!';
            }
            else { return 'error! not expected result'; }
        }
        if (winner) {
            playerCount++;
            return 'You Win!, ' + playerValue + ' beats ' + computerSelection;
            
        }
        else {
            computerCount++;
            return 'You Lose!, ' + computerSelection + ' beats ' + playerValue;
            
        }

        
    }

    function changeScores(computerCount,playerCount) {
        
       const score = document.querySelector('.score');

        let playerDisplay = document.querySelector('.playerScore');
        playerDisplay.textContent = 'Player Score: ' + playerCount;

        let computerDisplay = document.querySelector('.computerScore');
        computerDisplay.textContent = 'Computer Score: ' + computerCount;

        score.appendChild(playerDisplay);
        

        


    }

    function CheckWin(playerCount, computerCount) {

            



    }

    function checkValue(text) {

        let flag = false;
        const choiceArray = ['rock', 'paper', 'scissors'];
        for (let i = 0; i < choiceArray.length; i++) {

            if (text === choiceArray[i]) {

                flag = true;
            }
        }

        return flag;
    }

 
   


    
   
    /*
    function game() {
    
        for (let i = 0; i < 5; i++) {
       
            let playerValue = prompt('Type in rock, paper or scissors');
            let computerSelection = getComputerChoice();
    
            if (playRound(computerSelection, playerValue) === 'error! not expected result') { i--;}
            console.log(playRound(computerSelection, playerValue));
    
        }
    
    
    }
    
    
    game();
    
    */
