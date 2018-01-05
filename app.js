/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he wishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLOBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/
var scores, roundScore, currentPlayer;

scores = [0, 0];
roundScore = 0;
//variable for the current active player, (either 0 || 1)
currentPlayer = 0;

var diceDOM = document.querySelector('.dice');
diceDOM.style.display = 'none';

document.getElementById('score-0').textContent = '0';
document.getElementById('score-1').textContent = '0';
document.getElementById('current-0').textContent = '0';
document.getElementById('current-1').textContent = '0';


//want to set up an eventLitener for when the roll the dice button is clicked
document.querySelector('.btn-roll').addEventListener('click', function(){
  //need to calculate a random number for each die roll
  var dice = Math.floor(Math.random() * 6 + 1);
  //display the result
  diceDOM.style.display = 'block';
  diceDOM.src = 'dice-' + dice + '.png';
  //update the roundScore, only if die roll !== 1
  if (dice > 1){
    roundScore += dice;
    document.querySelector('#current-' + currentPlayer).textContent = roundScore;
  } else {
    nextPlayer();
  }
});

//want to set up addEventListener for when the player wants to 'hold'
//their scores
document.querySelector('.btn-hold').addEventListener('click', function(){
  // move the roundScore to the global score
  scores[currentPlayer] += roundScore;

  // update the UI
  document.querySelector('#score-' + currentPlayer).textContent = scores[currentPlayer];

  //check if the player won the game
  if (scores[currentPlayer] >= 100) {
    document.querySelector('#name-' + currentPlayer).textContent = 'Winner!';
    diceDOM.style.display = 'none';
    document.querySelector('.player-' + currentPlayer + '-panel').classList.add('winner');
    document.querySelector('.player-' + currentPlayer + '-panel').classList.remove('active');
  } else {
    //go to the next players
    nextPlayer();
  }
});

function nextPlayer() {
  currentPlayer = (currentPlayer + 1) % 2;
  roundScore = 0;
  document.getElementById('current-0').textContent = '0';
  document.getElementById('current-1').textContent = '0';
  document.querySelector('.player-0-panel').classList.toggle('active');
  document.querySelector('.player-1-panel').classList.toggle('active');
  diceDOM.style.display = 'none';
}
