var main = document.getElementsByClassName('main')[0];
var progressBarNum = document.getElementById('progressBarNum');
var progressBar = document.getElementById('progressBar');
var progressBarClass = document.getElementsByClassName('progressBar');
var squid = document.getElementById('squid');
var player = document.getElementById('player');
main.addEventListener("click",addBar);

html = '';
times = 0;
src=1;
squid.src="./images/squid1.png";
player.src="./images/player"+src+".png";

function addBar(){
    html += '<div class="progressBarItem"></div>';
    progressBar.innerHTML = html;
    
    src+=1;
    if(src>3){
        src=1;
    }
    player.src="./images/player"+src+".png";
    times+=1;
    progressBarNum.textContent = Number(progressBarNum.textContent)+1;
    progressBarNum.innerHTML = times+"%";
    
    
    if(times==15){
        qaAll[0].style.display = "flex";
        squid.src="./images/squid2.png";
        setTimeout(()=>{
            squid.src="./images/squid3.png";
        },200)
        
        
    }
    if(times==30){
        qaAll[1].style.display = "flex";
        squid.src="./images/squid2.png";
        setTimeout(()=>{
            squid.src="./images/squid3.png";
        },200)
    }
    if(times==45){
        qaAll[2].style.display = "flex";
        squid.src="./images/squid2.png";
        setTimeout(()=>{
            squid.src="./images/squid3.png";
        },200)
    }
    if(times==60){
        qaAll[3].style.display = "flex";
        squid.src="./images/squid2.png";
        setTimeout(()=>{
            squid.src="./images/squid3.png";
        },200)
    }
    if(times==75){
        qaAll[4].style.display = "flex";
        squid.src="./images/squid2.png";
        setTimeout(()=>{
            squid.src="./images/squid3.png";
        },200)
    }
    if(times==90){
        qaAll[5].style.display = "flex";
        squid.src="./images/squid2.png";
        setTimeout(()=>{
            squid.src="./images/squid3.png";
        },200)
    }
    if(times==100){
        qaAll[6].style.display = "flex";
        squid.src="./images/squid2.png";
        setTimeout(()=>{
            squid.src="./images/squid3.png";
        },200)
    }
}

