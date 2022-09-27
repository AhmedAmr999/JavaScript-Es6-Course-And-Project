let num1=8
let num2=2
let num1_el=document.getElementById("num1-el").textContent=num1
let num2_el=document.getElementById("num2-el").textContent=num2
let sum_el=document.getElementById("sum-el")

function Add(){
    let result=num1_el+num2_el
    sum_el.textContent="Sum: "+result
}

function Subtract(){
    let result=num1_el-num2_el
    sum_el.textContent="Sum: "+result
}

function Mutilply(){
    let result=num1_el * num2_el
    sum_el.textContent="Sum: "+result
}
function Divide(){
    let result=num1_el / num2_el
    sum_el.textContent="Sum: "+result
}