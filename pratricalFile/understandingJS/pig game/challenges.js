var scores, roundScore, activePlayer, gamePlaying;

init();
document.querySelector('.btn-roll').addEventListener('click', function () {
    if (gamePlaying) {
        var dice = Math.floor(Math.random() * 6) + 1;
        var dice1 = Math.floor(Math.random() * 6) + 1;
        //dispaly the result
        document.querySelector('.dice').style.display = 'block';

        var diceDom = document.querySelector('.dice');
        diceDom.src = 'dice-' + dice + '.png';
        if (dice === 6 && lastdice === 6) {
            roundScore[activePlayer] = 0;
            document.querySelector('#score-' + activePlayer).textContent = '0';
            nextPlayer();
        }

        if (dice !== 1) {

            //add score
            roundScore = roundScore + dice + dice1;
            //document.querySelector('.final-score').textContent=roundScore;
            document.querySelector('#current-' + activePlayer).textContent = roundScore;
        }

        else {
            //next player

            nextPlayer();
        }
        lastdice = dice;
    }

});
document.querySelector('.btn-new').addEventListener('click', init);//this is passing of function here means hey when i click please u call the function i will not 

function nextPlayer() {
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    roundScore = 0;
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');
    //document.querySelector('.dice').style.display = 'none';
}
document.querySelector('.btn-hold').addEventListener('click', function () {
    if (gamePlaying) {
        //add current score tp global score
        scores[activePlayer] += roundScore;
        //update the UI
        document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];
        var input = document.querySelector('.final-score').value;
        var winnerscore;
        //undefined,0,null are coerced to false
        if (input) {
            winnerscore = input;
        }
        else {
            winnerscore = 100;
        }
        //check if weather player won the game
        if (scores[activePlayer] >= winnerscore) {
            document.querySelector('#name-' + activePlayer).textContent = "winner";
            document.querySelector('.dice').style.display = 'none';

            document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
            document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
            gamePlaying = false;
        }
        else {
            //next player
            nextPlayer();
        }
    }
});

function init() {

    scores = [0, 0];
    roundScore = 0;
    activePlayer = 0;
    gamePlaying = true;
    document.querySelector('.dice').style.display = 'none';

    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    document.querySelector('#name-0').textContent = 'Player1';
    document.querySelector('#name-1').textContent = 'Player2';
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');



}

