

// var name = form1.elements["nameUser"].value


var article1 = document.getElementById("article1_h1").innerText
var article2 = document.getElementById("article2_h1").innerText
var article3 = document.getElementById("article3_h1").innerText
var article4 = document.getElementById("article4_h1").innerText

let button1 = document.getElementById("button_change1")
    button1.addEventListener("click", function(){
    document.getElementById("support").textContent=article1;
})

let button2 = document.getElementById("button_change2")
    button2.addEventListener("click", function(){
    document.getElementById("support").textContent=article2;
        
})
let button3 = document.getElementById("button_change3")
    button3.addEventListener("click", function(){
    document.getElementById("support").textContent=article3;
})
let button4 = document.getElementById("button_change4")
    button4.addEventListener("click", function(){
    document.getElementById("support").textContent=article4;
})



console.log(article1)
console.log(article2)
console.log(article3)
console.log(article4)





