// VARIABLES GLOBALES


// DOM READY
document.addEventListener("DOMContentLoaded", function() {
    console.log('ready');
});

// FUNCTIONS EXTERNES
function bar() {

    if(document.getElementById("one").style.transform == "rotateZ(0deg)") {
    document.getElementById("one").style.transform = "rotateZ(90deg)"
    document.getElementById("two").style.transform = "rotateZ(0deg)"
    document.getElementById("two").style.transform = "rotateZ(90deg)"
    document.getElementById("the").style.transform = "rotateZ(0deg)"
    document.getElementById("the").style.transform = "rotateZ(90deg)"
    document.getElementById("explication").style.display = "flex"
    document.getElementById("explication").style.animation = "open 1s"
    }
    
    else{
    document.getElementById("one").style.transform = "rotateZ(0deg)"
    document.getElementById("two").style.transform = "rotateZ(0deg)"
    document.getElementById("the").style.transform = "rotateZ(0deg)"
    document.getElementById("the").style.marginTop = "5px"
    document.getElementById("two").style.opacity = "1"
    document.getElementById("explication").style.animation = "close 1s"
    setTimeout(function () {
        document.getElementById("explication").style.display = "none"
    },1000)
    }};