const textMin = document.querySelector('.js-textMin');
const textSec = document.querySelector('.js-textSec');
const minElem = document.querySelector('.js-min');
const secElem = document.querySelector('.js-sec');
const toggle = document.querySelector('.js-toggle');
const reset = document.querySelector('.js-reset');
let min = 0;
let sec = 0;

//引数にに1足して返す関数
function valuePlus(value){
    return value + 1;
}

//分のボタンを押した時に数をカウントする記述
minElem.addEventListener('click',function(){
    if(min < 99){
        if(min < 9){
        min = valuePlus(min);
        textMin.textContent = "0" + min;
        }else{
        min = valuePlus(min);
        textMin.textContent = min;
        }
    }else{
    min =0;
    textMin.textContent = "0" + min;
    }
});

//秒のボタンを押した時に数をカウントする記述
secElem.addEventListener('click',function(){
    if(sec < 59){
        if(sec < 9){
        sec = valuePlus(sec);
        textSec.textContent = "0" + sec;
        }else{
        sec = valuePlus(sec);
        textSec.textContent = sec;
        }
    }else{
    sec =0;
    textSec.textContent = "0" + sec;
    }
});

//リセットボタンを押した時の記述
reset.addEventListener('click',function(){
    min = 0;
    sec = 0;
    textMin.textContent = "00";
    textSec.textContent = "00";
});