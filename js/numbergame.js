const input = document.getElementById ('input');
const btn = document.getElementById ('btn');
const display = document.querySelector('#display')
const ul = document.querySelector('#ul');
let status = document.querySelector('#status');
let h3 = document.querySelector('#h3');
let span = document.querySelector('#span');

const number = Math.floor(Math.random()*100)+1;


btn.addEventListener("click",function(){
    let iv= input.value
    addLi(iv);
    let li = document.getElementById("ul").getElementsByTagName("LI").length;
    span.innerText=10-li;
    input.value="";
    if (li<10){
        if (number<iv){
            status.innerText="your guess is too high";
        }
        else if (number>iv){
            status.innerText="your guess is too low";
        }
        else if (number==iv){
            display.innerText="";
            status.innerText="you win";
            h3.innerText="";
        }
    }
    else {
        status.innerText="GAME OVER!!";
        display.innerText="";
        h3.innerText="";
    }
    
})

const addLi= (name)=>{
    let iValue = name;
    let newLi = document.createElement('li');
    newLi.append(iValue);
    ul.append(newLi);
};

