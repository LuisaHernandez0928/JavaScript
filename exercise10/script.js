var css = document.querySelector("h3");
var color1 = document.getElementById("colorpicker1");
var color2 = document.getElementById("colorpicker2");
var body = document.getElementById("gradient");
var button=document.querySelector("button")

function setGradient() {
    body.style.background = "linear-gradient(to right, " +
        color1.value + ", " + color2.value + ")";
    css.textContent = body.style.background + ";";
}

function random(){
var random1="#"+Math.floor(Math.random()*16777215).toString(16);
var random2="#"+Math.floor(Math.random()*16777215).toString(16);
body.style.background="linear-gradient(to right, " + random1 + ", " + random2 +")";
css.textContent = body.style.background + ";";
color1.value=random1;
color2.value=random2;
}

button.addEventListener("click",random);
color1.addEventListener("input",setGradient);
color2.addEventListener("input",setGradient);