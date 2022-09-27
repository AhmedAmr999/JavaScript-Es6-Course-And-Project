//document.getElementById("count-el").innerText=5

let count=0

console.log(count)

let saveEl=document.getElementById("save-el")

function increment(){
    console.log("Increment Button Clicked")
    count+=1
    document.getElementById("count-el").textContent=count
    console.log(count)
}

function decrement(){
    console.log("Decrement Button Clicked")
    count-=1
    document.getElementById("count-el").textContent=count
    console.log(count)
}
function save(){
    let countStr=count + " - "
    saveEl.textContent+=countStr
    count=0
    document.getElementById("count-el").textContent=count
    console.log("Save count: "+count)
}

let welcomeEl=document.getElementById("welcome-el")

let usernamee="ahmed"
let greeting="Welcome Back"

welcomeEl.innerText=greeting+ " "+usernamee 


