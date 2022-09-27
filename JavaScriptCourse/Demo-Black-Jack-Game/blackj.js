//let card1=getRandomCard()
//let card2=getRandomCard()
let cards=[]//array of cards
let sum=0
let hasBlackJack=false
let isAlive=false
let message=""
message="We're Logging Out"

console.log(sum)

let messageEl=document.getElementById("message-el")

// let sumEl=document.getElementById("sum-el")
let sumEl=document.querySelector("#sum-el")

// let cardEl=document.getElementById("card-el")
let cardEl=document.querySelector(".card-el")


//create player object
let player={
     name: "Yara",
     chips: 145,
     sayHello: function(){
         console.log("hello player")
     }
}
player.sayHello()

let playerEl=document.getElementById("player-el")
playerEl.textContent=player.name +": $"+player.chips


console.log(cards)
function getRandomCard()
{
    let randomNumber=Math.floor(Math.random()*13)+1
    if (randomNumber>10) {
        //walad,bent,sahyeb ==10
        return 10
    } else if (randomNumber==1) {
        //ace =1
        return 11
    } else{
        return randomNumber
    }
     
}

function StartGame(){
    isAlive=true
    let card1=getRandomCard()
    let card2=getRandomCard()
    cards=[card1,card2]
    sum=card1+card2
    RenderGame()
}

function RenderGame(){
    if (sum<=20) {
        message="Do You Want to Draw a new card?"
    }else if (sum===21) {
        message="You've got a black jack"
        hasBlackJack=true
    }else{
        message="You're are out of the game"
        isAlive=false
    }
    messageEl.textContent=message
    sumEl.textContent="Sum: "+sum
    cardEl.textContent="Cards: "
    for (let index = 0; index < cards.length; index++) {
        cardEl.textContent+=cards[index] + " "      
    }
    console.log(messageEl.textContent)
}

function newCard(){
    if (isAlive===true && hasBlackJack===false) {
        console.log("Drawing a new Card from the Deck!")
        let newCard=getRandomCard()
        sum+=newCard
        cards.push(newCard)
        RenderGame()
    }
}

//CASH OUT:
console.log(hasBlackJack)

//NOT ALIVE:
console.log(isAlive)





let castlelisting={
    isAvailable:true,
    castlename:"ahmed castle",
    price:2000,
    color:['red','blue']
}
console.log(castlelisting.color)
console.log(castlelisting.isAvailable)




// let age=100
// if (age<21) {
//     console.log("You Can not Enter the club")
// }else {
//     console.log("Welcome")
// }

// if (age<100) {
//     console.log("Not Elegible")
// }else if (age===100) {
//     console.log("Here is you birthday card from the king")
// }else{
//     console.log("Not Eligable you have already gotten one")
// }