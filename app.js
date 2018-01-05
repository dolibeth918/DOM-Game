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

document.querySelector('.dice').style.display = 'none';

document.getElementById('score-0').textContent = '0';
document.getElementById('score-1').textContent = '0';
document.getElementById('current-0').textContent = '0';
document.getElementById('current-1').textContent = '0';

//want to set up an eventLitener for when the roll the dice button is clicked
document.querySelector('.btn-roll').addEventListener('click', function(){
  //need to calculate a random number for each die roll
  var dice = Math.floor(Math.random() * 6 + 1);
  //display the result
  var diceDOM = document.querySelector('.dice');
  diceDOM.style.display = 'block';
  diceDOM.src = 'dice-' + dice + '.png';
  //update the roundScore, only if die roll !== 1
})
