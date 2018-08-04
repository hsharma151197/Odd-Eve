var currentHit, random, score, activePlayer;

init();

function init(){
    score = [0, 0];
    activePlayer = 0;
    gameActive = true;
    counter = 0;

    document.getElementById('score-0').textContent = 0;
    document.getElementById('current-0').textContent = 0;
    document.getElementById('score-1').textContent = 0;
    document.getElementById('current-1').textContent = 0;

    document.getElementById('name-0').textContent = 'YOU';
    document.getElementById('name-1').textContent = 'COMPUTER';
}

// function disableMyBtns(event){
//     event.target.setAttribute('style', 'cursor: not-allowed');
//     event.target.setAttribute('disabled', true);
// }

var clickBtnArr = document.querySelectorAll('.hit');
for(let i = 0; i<clickBtnArr.length; i++){
    clickBtnArr[i].addEventListener('click', function(){
        if(gameActive){
            currentHit = i;
            display();
        }
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
    model();
}

function model(){
    if(random !== currentHit){
        if(activePlayer === 0){
            score[0]+=currentHit;
            document.getElementById('score-0').textContent = score[0];
        }

        else{
            score[1]+=random;
            document.getElementById('score-1').textContent = score[1];
            if(score[0] < score[1]){
                document.querySelector('.player-name-ball').textContent = 'Winner';
                document.querySelector('.player-name-bat').textContent = 'Loser';
                gameActive = false;
            }
        }
    }
    else{
        if(activePlayer === 1){
            gameActive = false;
            result();
        }
        if(activePlayer === 0){
            activePlayer = 1;
            document.querySelector('.player-0-panel').classList.toggle('active');
            document.querySelector('.player-1-panel').classList.toggle('active');
            document.querySelector('.player-0-fig').src = 'images/ball.png';
            document.querySelector('.player-1-fig').src = 'images/bat.png';
        }
        // counter++;
        // if(counter===2){
        //     gameActive = false;
        //     result();
        // }
    }
}

function result(){
    if(score[0] > score[1]){
        document.querySelector('.player-name-bat').textContent = 'Winner';
        document.querySelector('.player-name-ball').textContent = 'Loser';
    }
    else if(score[1] > score[0]){
        document.querySelector('.player-name-ball').textContent = 'Winner';
        document.querySelector('.player-name-bat').textContent = 'Loser';
    }
    else{
        document.querySelector('.player-name-bat').textContent = 'Tie';
        document.querySelector('.player-name-ball').textContent = 'Tie';
    }
}

document.querySelector('.btn-new').addEventListener('click', function(){
    init();
});
