var main = document.getElementsByClassName('main')[0];
var progressBarNum = document.getElementById('progressBarNum');
var progressBar = document.getElementById('progressBar');
var progressBarClass = document.getElementsByClassName('progressBar');
var squid = document.getElementById('squid');
var player = document.getElementById('player');
var hiddenLayer = document.getElementById('hiddenLayer');
var touchH1 = document.getElementById('touchH1');
hiddenLayer.addEventListener("click",addBar);

html = '';
times = 0;
src=1;
pos = 0;
squid.src="./images/squid1.png";
player.src="./images/player"+src+".png";

function addBar(){
    touchH1.style.opacity="0";
    setTimeout(()=>{
        touchH1.style.display="none";
    },300)
    html += '<div class="progressBarItem"></div>';
    progressBar.innerHTML = html;
    pos-=5;
    
    main.style.backgroundPosition  ="0px "+pos+"px";
    src+=1;
    if(src>3){
        src=1;
    }
    player.src="./images/player"+src+".png";
    times+=1;
    progressBarNum.textContent = Number(progressBarNum.textContent)+1;
    progressBarNum.innerHTML = times+"%";
    
    
    if(times==14){
        qaAll[0].style.display = "flex";
        squid.src="./images/squid2.png";
        setTimeout(()=>{
            squid.src="./images/squid3.png";
        },400)
        
        
    }
    if(times==28){
        qaAll[1].style.display = "flex";
        squid.src="./images/squid2.png";
        setTimeout(()=>{
            squid.src="./images/squid3.png";
        },400)
    }
    if(times==42){
        qaAll[2].style.display = "flex";
        squid.src="./images/squid2.png";
        setTimeout(()=>{
            squid.src="./images/squid3.png";
        },400)
    }
    if(times==56){
        qaAll[3].style.display = "flex";
        squid.src="./images/squid2.png";
        setTimeout(()=>{
            squid.src="./images/squid3.png";
        },400)
    }
    if(times==70){
        qaAll[4].style.display = "flex";
        squid.src="./images/squid2.png";
        setTimeout(()=>{
            squid.src="./images/squid3.png";
        },400)
    }
    if(times==85){
        qaAll[5].style.display = "flex";
        squid.src="./images/squid2.png";
        setTimeout(()=>{
            squid.src="./images/squid3.png";
        },400)
    }
    if(times==2){
        qaAll[6].style.display = "flex";
        squid.src="./images/squid2.png";
        setTimeout(()=>{
            squid.src="./images/squid3.png";
        },400)
    }
    
}

