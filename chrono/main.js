function temps()
{
    let ms =Number(document.getElementById("milsec").textContent)
let s=Number(document.getElementById("sec").textContent)
let m=Number(document.getElementById("min").textContent)

if(ms<999) { document.querySelector("#milsec").innerHTML= (ms+1)
ms++}
else {ms=0
    document.querySelector("#milsec").innerHTML=ms
    
    if(s<59)
    {document.querySelector("#sec").innerHTML=s+1
    s++}
    else
    {s=0
        m++;
        document.querySelector("#min").innerHTML=m

    }
    
} 



}
let t=[0]

function chrono(t)
{
   t[0]=(setInterval(temps,1))
  
}
function restart()
{
    document.querySelector("#milsec").innerHTML="00"
    document.querySelector("#sec").innerHTML="00"
    document.querySelector("#min").innerHTML="00"
}


function stop(t)
{
    clearInterval(t[0])
}


let startbtn=document.querySelector("#start")

startbtn.addEventListener("click",function(){
    chrono(t);
})
let restartbtn=document.querySelector("#restart")
restartbtn.onclick=restart
let stopbtn=document.querySelector("#stop")
stopbtn.addEventListener("click",function(){
    stop(t);
})