var c1 = document.querySelector(".color1");
var c2 = document.querySelector(".color2");
var par = document.querySelector("h3");
var bod = document.getElementById("gradient");

function setBackgroundColor() {
    bod.style.background = " linear-gradient(to right," + c1.value + "," + c2.value + ")";
    par.textContent=bod.style.background + ";";
}

c1.addEventListener('input', setBackgroundColor);
c2.addEventListener('input', setBackgroundColor);

// par.innerText = " linear-gradient(to right," + c1.value + "," + c2.value + ")";

// par.innerText = "linear-gradient(to right,"+c1.value+","+c2.value+")";



