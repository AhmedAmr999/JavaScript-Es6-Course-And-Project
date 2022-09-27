const rec="ahmed"
const sender="maso"

const email=`Hey ${rec} how it is going? cheers ${sender}`

let boxEl=document.getElementById("box-el")
boxEl.addEventListener("click",function(){
    console.log("I want to open the box")
    console.log(email)
})

const playerName="Ahmed"
let credits=45

const containerEl=document.getElementById("container")
containerEl.innerHTML="<button onclick='buy()'> Buy!</button>"

function buy(){
    containerEl.innerHTML+="<p'> Thank you for buying</p>"
}



console.log(rec)