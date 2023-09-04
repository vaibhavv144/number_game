var timer=60;
var score=0;
var hit;
function getHit() {
     hit=Math.floor(Math.random()*10);
    document.querySelector("#box").innerText=hit;
}
function increasescore() {
    score+=10;
    document.querySelector(".box3").textContent=score;
}
function setTimer() {
   var timeint= setInterval(function(){
        if(timer>0){
            timer--;
            document.querySelector(".bx1").textContent=timer;
        }
        else{
            clearInterval(timeint);
            document.querySelector("#pbtm").innerHTML=`<h1>GAME OVER</h1>`;
        }
      
    },1000)
    }

document.querySelector("#pbtm").addEventListener("click",function (dets) {
   //dets.target click hue pure element ki value dega ar uske aage .txtcntnt likhne s sirf uska text milega ar y string hoga hme int lene k lie aage number lagana pada
    var ranno=Number(dets.target.textContent);
    if(ranno===hit){
        increasescore();
        makebbl();
        getHit();
}

})
function makebbl() {
    var cltr=""
    for(var i=0;i<=229;i++){
        var rn=Math.floor(Math.random()*10);
       cltr+=`<div id="bubble"> ${rn}
       </div>`; 
       
    }
document.querySelector("#pbtm").innerHTML=cltr;
    }

makebbl();
setTimer();
getHit();



