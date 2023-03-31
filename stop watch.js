let milliseconds=0, seconds=0, min=0, hours=0;
let clock=document.querySelector(".clock");

document.getElementById('start').onclick=function(){
   timerref= setInterval(timer,10)
}


function timer(){
    milliseconds+=10;
    if(milliseconds==1000){
        seconds+=1;
        milliseconds=0;
        if(seconds==60){
            min+=1
            seconds=0
            if(min==60){
            hours+=1
            min=0
            }
        }
    }


let h, m, s, ms;

if(hours<10){
    h='0'+hours
}else{
    h=hours
}


if(min<10){
    m='0'+min
}else{
    m=min
}


if(seconds<10){
    s='0'+seconds
}else{
    s=seconds
}


if(milliseconds<10){
   ms='00'+milliseconds;
}else if(milliseconds<100){
    ms='0'+milliseconds
}else{
    ms=milliseconds
}
    clock.innerHTML=`${h} : ${m} : ${s} : ${ms}`
}


document.getElementById("pause").onclick=function(){
    clearInterval(timerref)
}


document.getElementById("reset").onclick=function(){
    clearInterval(timerref)
    milliseconds=0;
    seconds=0;
    min=0;
    hours=0;
    clock.innerHTML='00 : 00 : 00 : 00'
}