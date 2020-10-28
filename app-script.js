/*
GAME RULES:
- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game
*/

var scores, roundScore, activePlayer;

resetGame();


document.querySelector('.btn-roll').addEventListener('click' , function(){

    // Randomaize the dice nubmer

    var dice = Math.floor(Math.random() * 6) + 1;  // Generating a number between 1 - 6

    // Display the correct result
    
    var diceDOM = document.querySelector('.dice');
    diceDOM.style.display = 'block';
    diceDOM.src = 'dice-'+ dice +'.png';

    // Upate the round socre if the rolled number != 1
    
    if(dice !== 1)
    {
        // Add score
        roundScore+= dice;
        document.querySelector('#current-' + activePlayer).textContent = roundScore;
        


    }

    else
    {
        
       ChangePlayer();
    }

});



document.querySelector('.btn-hold').addEventListener('click', function()
{

    // Add the current score to the global score
    
    scores[activePlayer] += roundScore;

    // Update the score in the UI

    document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];

    // Check if the player won the game

    if(scores[activePlayer] >= 200)
    {
        document.querySelector('#name-' + activePlayer).textContent = 'Winner!';
        document.querySelector('.dice').style.display = 'none';

    }

    else
    {
        ChangePlayer();
    }

});

document.querySelector('.btn-new').addEventListener('click' , resetGame);


function resetGame()
{

    scores = [0,0];
    roundScore = 0;
    activePlayer = 0;
    document.querySelector('.dice').style.display = 'none';

    document.getElementById('score-0').textContent = 0;     // Reset the scores of the two players
    document.getElementById('current-0').textContent = 0;
    document.getElementById('score-1').textContent = 0;
    document.getElementById('current-1').textContent = 0;

    document.getElementById('name-0').textContent = 'Player - 1'; // Reset the names of the players
    document.getElementById('name-1').textContent = 'Player - 2'; 

         /* Remove the active class and winner class 
           From the two players      */

    document.querySelector('.player-0-panel').classList.remove('active');  
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');


}


function ChangePlayer() // Function to change the theme for active player

{
    if(activePlayer === 1)
        {
            activePlayer = 0;
            document.querySelector('.player-1-panel').classList.remove('active');
            document.querySelector('.player-0-panel').classList.add('active');
            document.querySelector('#current-' + 1).textContent = 0;
            document.querySelector('.dice').style.display = 'none';
            roundScore = 0;
        }


        else
        {
            activePlayer = 1;
            document.querySelector('.player-0-panel').classList.remove('active');
            document.querySelector('.player-1-panel').classList.add('active');
            document.querySelector('#current-' + 0).textContent = 0;
            document.querySelector('.dice').style.display = 'none';
            roundScore = 0;

        }
}
