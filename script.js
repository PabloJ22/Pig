let scores, roundScore, activePlayer, dice;

init();

function nextPlayer() {
  //Next player
  activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
  roundScore = 0;

  document.getElementById('current-0').textContent = '0';
  document.getElementById('current-1').textContent = '0';

  document.querySelector('.player-0-panel').classList.toggle('active');
  document.querySelector('.player-1-panel').classList.toggle('active');

  document.querySelector('.dice').style.display = 'none';
}


document.querySelector('.btn-new').addEventListener('click', init);

function init() {
    scores = [0, 0];
    activePlayer = 0;
    roundScore = 0;
    gamePlaying = true;
    
    document.querySelector('.dice').style.display = 'none';

    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    document.getElementById('name-0').textContent = 'Player 1';
    document.getElementById('name-1').textContent = 'Player 2';
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');
}

document.querySelector('.btn-roll').addEventListener('click', function(){
      if(gamePlaying) {
        // Random number
        var dice = Math.floor(Math.random() * 6) + 1;

        // Display the result
        var diceDOM = document.querySelector('.dice');
        diceDOM.style.display = 'block';
        diceDOM.src = 'img/dice-' + dice + '.JPG';


        // Update the round score IF the rolled number was NOT a 1
        if (dice !== 1) {
            //Add score
            roundScore += dice;
            document.querySelector('#current-' + activePlayer).textContent = roundScore;
        } else {
            // Next player
            nextPlayer();
        }
    }      
});

document.querySelector('.btn-hold').addEventListener('click', function() {
  if (gamePlaying) {
      // Add CURRENT score to GLOBAL score
      scores[activePlayer] += roundScore;

      // Update the UI
      document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];

      // Check if player won the game
      if (scores[activePlayer] >= 20) {
          document.querySelector('#name-' + activePlayer).textContent = 'Winner!';
          document.querySelector('.dice').style.display = 'none';
          document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
          document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
          gamePlaying = false;
      } else {
          //Next player
          nextPlayer();
      }
  }
});

