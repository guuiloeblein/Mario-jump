
const mario = document.querySelector ('.mario'); 

const pipe = document.querySelector ('.pipe');

const gameOver = document.querySelector ('.game-over');


const jump = () => {
    mario.classList.add('jump'); 


    
    setTimeout(() => {

        mario.classList.remove('jump');

    }, 500);

    const loop = setInterval(() => {

        
        const pipePosition = pipe.offsetLeft;
        const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');

        console.log(pipePosition);
        console.log(marioPosition);

        
        if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 80) {

            mario.style.animation = 'none';
            mario.style.bottom = `${marioPosition}px`;

            pipe.style.animation = 'none';
            pipe.style.left = `${pipePosition}px`;

            mario.src = 'assets/image/game-over.png';
            mario.style.width = '65px';
            mario.style.marginLeft = '50px'

            gameOver.style.display = 'block'

            clearInterval (loop);
        }

    }, 10);
}


document.addEventListener('keydown', jump); 






































































































