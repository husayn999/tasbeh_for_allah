let buttonclick = document.getElementById("button");
let h1text =  document.getElementById("h1");
let num = 0;
let button2 = document.getElementById("button2")


buttonclick.addEventListener( "click", buttonclickHandler);


function buttonclickHandler(){
    
    ++num;
    h1text.innerText = num;
}


button2.addEventListener( "reset", buttonclickHandler);


function myFunction(){
    num = 0
    h1text.innerText = 0;
}
