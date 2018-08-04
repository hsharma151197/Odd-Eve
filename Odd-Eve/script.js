var currentHit, random, score, activePlayer;

init();

function init(){
    score = [0, 0];
    activePlayer = 0;
    gameActive = true;

    document.getElementById('score-0').textContent = 0;
    document.getElementById('current-0').textContent = 0;
    document.getElementById('score-1').textContent = 0;
    document.getElementById('current-1').textContent = 0;
}

if(gameActive){
    document.querySelector('.hit-0').addEventListener('click', function(){
        currentHit = 0;
        display();
    });
    document.querySelector('.hit-1').addEventListener('click', function(){
        currentHit = 1;
        display();
    });
    document.querySelector('.hit-2').addEventListener('click', function(){
        currentHit = 2;
        display();
    });
    document.querySelector('.hit-3').addEventListener('click', function(){
        currentHit = 3;
        display();
    });
    document.querySelector('.hit-4').addEventListener('click', function(){
        currentHit = 4;
        display();
    });
    document.querySelector('.hit-5').addEventListener('click', function(){
        currentHit = 5;
        display();
    });
    document.querySelector('.hit-6').addEventListener('click', function(){
        currentHit = 6;
        display();
    });
}

function display(){
    document.querySelector('.img-hit__right').src = 'images/hit-'+currentHit+'.jpg';
    document.getElementById('current-0').textContent = currentHit;
    randomGenerator();
}

function randomGenerator(){
    random = Math.floor(Math.random()*7);
    document.querySelector('.img-hit__left').src = 'images/hit-'+random+'.jpg';
    document.getElementById('current-1').textContent = random;
    if(activePlayer === 0){
        model();
    }
}

function model(){
    console.log(5);
    if(random !== currentHit){
        if(activePlayer === 0){
            score[0]+=currentHit;
            document.getElementById('score-0').textContent = score[0];
        }

        else{
            score[1]+=random;
            document.getElementById('score-1').textContent = score[1];
            if(score[0] > score[1]){
                document.querySelector('.player-name-bat').textContent = 'Winner';
                document.querySelector('.player-name-ball').textContent = 'Loser';
                gameActive = false;
            }
            else if(score[1] > score[0]){
                document.querySelector('.player-name-ball').textContent = 'Winner';
                document.querySelector('.player-name-bat').textContent = 'Loser';
                gameActive = false;
            }
            else{
                document.querySelector('.player-name-bat').textContent = 'Tie';
                document.querySelector('.player-name-ball').textContent = 'Tie';
                gameActive = false;
            }
        }
    }
    else{
        if(activePlayer === 0){
            activePlayer = 1;
        }
        document.querySelector('.player-0-panel').classList.toggle('active');
        document.querySelector('.player-1-panel').classList.toggle('active');
        document.querySelector('.player-0-fig').src = 'images/ball.png';
        document.querySelector('.player-1-fig').src = 'images/bat.png';
        model();
    }
}
