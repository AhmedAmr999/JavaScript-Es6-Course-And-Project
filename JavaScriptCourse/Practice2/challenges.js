let person={
    name:"ahmed",
    age:22,
    country:"Egypt"
}
function logData(){
    console.log(person.name + " is "+ person.age + " and lives in "+person.country)
}
logData()

let agee=66

if (agee<6) {
    console.log("free")
}else if (agee<18 ) {
    console.log("Child discount")
}else if (agee<27 ) {
    console.log("Student discount")
}else if (agee<67 ) {
    console.log("Full Price")
}else{
    console.log("Senior Citizen discount")
}

let largeCountries=['Tuvalu','India','USA','Indonesia','Monaco']
console.log('The 5 Largest countries in the World: ')
for (let index = 0; index < largeCountries.length; index++) {
    console.log("- "+largeCountries[index])
}
//shift remove item at the beg. of the array while unshift add item at the beg of the array
largeCountries.shift()
largeCountries.unshift("China")

//pop and push remove and add at the end of the array
largeCountries.pop()
largeCountries.push("Pakistan")
console.log("The New Large Countries")
console.log(largeCountries)


let dayOfMoth=13
let weekday="Friday"

if (dayOfMoth===13 && weekday==="Friday") {
     console.log("🔥")
}

let hands=['rock','paper','scissor']

//create a function to get the random hands
function getHand(){
    let randomIndex=Math.floor(Math.random()*3)
    console.log("The Random index is "+ randomIndex)
    return hands[randomIndex]   
}
console.log(getHand())


   
let fruit = ["apple", "orange", "apple", "apple", "orange"]
let applefruit=document.getElementById("apple-el")
let orangefruit=document.getElementById("orange-el")

function getFruit(){
    for (let index = 0; index < fruit.length; index++) {
        if (fruit[index]==="apple") {
            applefruit.textContent+=fruit[index] + " "
        }
        else{
            orangefruit.textContent+=fruit[index]+ " "
        }
    }
}
getFruit()