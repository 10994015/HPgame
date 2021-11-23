var main = document.getElementsByClassName('main')[0];
var progressBarNum = document.getElementById('progressBarNum');
var progressBar = document.getElementById('progressBar');
var progressBarClass = document.getElementsByClassName('progressBar');
var squid = document.getElementById('squid');
var player = document.getElementById('player');
var hiddenLayer = document.getElementById('hiddenLayer');
var touchH1 = document.getElementById('touchH1');
var bingo = document.getElementsByClassName('bingo');
var clickBtn = document.getElementsByClassName('clickBtn');
var randomBtnClass = document.getElementsByClassName('randomBtn');
var ran = document.querySelector('#randomBtn1 > a');
// hiddenLayer.addEventListener("click",addBar);
// var randomBtn1 = document.getElementById('randomBtn1');
console.log(ran);

var nb = Math.floor(Math.random()*5)+1;
html = '';
times = 0;
src=1;
pos = 0;
squid.src="./images/squid1.png";
player.src="./images/player"+src+".png";

main.addEventListener("click",run);

main.addEventListener("click",()=>{
    touchH1.style.opacity="0";
    touchH1.style.transition=".5s"
});
function btnRun(){
   
    
}
function Appear(){
    var randomBtn = document.getElementById('randomBtn'+(Math.floor(Math.random()*1)+1));
    randomBtn.style.display = "block";
}
for(var a=0;a<clickBtn.length;a++){
    clickBtn[a].addEventListener("click",disappear);
}

function disappear(){
    times+=1;
    console.log(times);
    html += '<div class="progressBarItem"></div>';
    progressBar.innerHTML = html;
    progressBarNum.textContent = Number(progressBarNum.textContent)+1;
    progressBarNum.innerHTML = times*2+"%";
    
    for(var d=0;d<randomBtnClass.length;d++){
        randomBtnClass[d].style.display="none";
    }
}
function clearAppear(){
    for(var d=0;d<randomBtnClass.length;d++){
        randomBtnClass[d].style.display="none";
    }
}
function run(){
    cycle=setInterval(() => {
        clearAppear();
        Appear();
        swap();
    }, 900)
    gameGo = setInterval(() => {
        // pos-=5;
        // main.style.backgroundPosition  ="0px "+pos+"px";
        src+=1;
        if(src>3){
            src=1;
        }
        player.src="./images/player"+src+".png";
        
        start();
    }, 400);
    
}
for(var v=0;v<bingo.length-1;v++){
    bingo[v].addEventListener("click",run);

}

function swap(){
   ran.style.left = Math.floor(Math.random()*300)+1+"px";
   ran.style.top = Math.floor(Math.random()*800)+1+"px";
}
function start(){
    
    if(times==6){
        times+=1;
        clearInterval(gameGo);
        clearInterval(cycle);
        qaAll[0].style.display = "flex";
        squid.src="./images/squid2.png";
        setTimeout(()=>{
            squid.src="./images/squid3.png";
        },400)
        
    }
    if(times==12){
        times+=1;
        clearInterval(gameGo);
        clearInterval(cycle);
        qaAll[1].style.display = "flex";
        squid.src="./images/squid2.png";
        setTimeout(()=>{
            squid.src="./images/squid3.png";
        },400)
    }
    if(times==20){
        times+=1;
        clearInterval(gameGo);
        clearInterval(cycle);
        qaAll[2].style.display = "flex";
        squid.src="./images/squid2.png";
        setTimeout(()=>{
            squid.src="./images/squid3.png";
        },400)
    }
    if(times==28){
        times+=1;
        clearInterval(gameGo);
        clearInterval(cycle);
        qaAll[3].style.display = "flex";
        squid.src="./images/squid2.png";
        setTimeout(()=>{
            squid.src="./images/squid3.png";
        },400)
    }
    if(times==36){
        times+=1;
        clearInterval(gameGo);
        clearInterval(cycle);
        qaAll[4].style.display = "flex";
        squid.src="./images/squid2.png";
        setTimeout(()=>{
            squid.src="./images/squid3.png";
        },400)
    }
    if(times==42){
        times+=1;
        clearInterval(gameGo);
        clearInterval(cycle);
        qaAll[5].style.display = "flex";
        squid.src="./images/squid2.png";
        setTimeout(()=>{
            squid.src="./images/squid3.png";
        },400)
    }
    if(times==50){
        times+=1;
        clearInterval(gameGo);
        clearInterval(cycle);
        qaAll[6].style.display = "flex";
        squid.src="./images/squid2.png";
        setTimeout(()=>{
            squid.src="./images/squid3.png";
        },400)
    }
}
