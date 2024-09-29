const increase=document.getElementById("increaseBtn");
const decrease=document.getElementById("decreaseBtn");
const reset=document.getElementById("resetBtn");

const counter=document.getElementById("myLabel");
let count=0;
increase.onclick =function(){
    count++;
    counter.textContent=count;
}

decrease.onclick =function(){
    count--;
    counter.textContent=count;
}

reset.onclick =function(){
    count=0;
    counter.textContent=count;
}