let scr1 = 0;
let scr2 = 0;

let butt1 = document.querySelector('#btn1');
let butt2 = document.querySelector('#btn2');
let resetButt = document.querySelector('#reset');

let p1 = document.querySelector('#score1');
let p2 = document.querySelector('#score2');

let select = document.querySelector('#select');

let gameOver = false;
let winningScore = 5;

butt2.addEventListener('click', function(){
    if (!gameOver){
        scr2++;
        if (scr2 === winningScore){
            gameOver = true;
            p2.classList.add('text-success');
            p1.classList.add('text-danger');
            butt1.disabled = true;
            butt2.disabled = true;
        }
        p2.textContent = scr2;
        
    }
})

butt1.addEventListener('click', function(){
    if (!gameOver){
        scr1++;
        if (scr1 === winningScore){
            gameOver = true;
            p1.classList.add('text-success');
            p2.classList.add('text-danger');
            butt1.disabled = true;
            butt2.disabled = true;
        }
        p1.textContent = scr1;
        
    }
})

select.addEventListener('change', function(){
    winningScore = parseInt(this.value);
    reset();
})
 function reset(){
    scr2 = 0;
    scr1 = 0;
    gameOver = false;
    p2.textContent = scr2;
    p1.textContent = scr1;
    p1.classList.remove('text-success', 'text-danger');
    p2.classList.remove('text-success', 'text-danger');    
    butt1.disabled = false;
    butt2.disabled = false;
}

resetButt.addEventListener('click', reset);