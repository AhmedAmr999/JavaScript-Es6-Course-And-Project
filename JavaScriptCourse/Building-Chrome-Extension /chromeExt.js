let myLeads=[]

// myLeads=JSON.parse(myLeads)
// myLeads.push("www.newlead.com")
// myLeads=JSON.stringify(myLeads)
// console.log(typeof myLeads)
// console.log(myLeads)

const inputEl=document.getElementById("input-el")
const inputBtn=document.getElementById("input-btn")
const ulEl=document.getElementById("ul-el")

//localStorage.setItem("myLeads","www.example.com")
//console.log(localStorage.getItem("myLeads"))
//localStorage.clear()
let leadsfromlocalStorage=JSON.parse(localStorage.getItem("myLeads"))
console.log(leadsfromlocalStorage)

console.log(ulEl)
inputBtn.addEventListener("click",function(){
    myLeads.push(inputEl.value)
    console.log(myLeads)
    inputEl.value=" "

    localStorage.setItem("myleads",JSON.stringify(myLeads))
    console.log(localStorage.getItem(myLeads))
    renderLeads()
})

function renderLeads(){
    let listItems=" "
    for (let index = 0; index < myLeads.length; index++) {
        //target to open a new tab
        
        //the hard way
       // listItems+="<li> <a target='_blank' href='"+ myLeads[index] + "'>"+ myLeads[index]+ "</a> </li>"
        console.log(listItems)

        //instead of writing the code in complex way here is an easy way
        //use template strings
        listItems+=`
        <li> 
            <a target='_blank' href='${myLeads[index]}'>
                ${myLeads[index]}
            </a> 
        </li>`
        


        //instead to loop uel many times cout one time 
        //ulEl.innerHTML+="<li>"+ myLeads[index]+ "</li>"
        
        //create element
        //const li=document.createElement("li")

        //set text element
        //li.textContent=myLeads[index]

        //append to order list
        //ulEl.append(li)
    }

ulEl.innerHTML=listItems
}




