// VARIABLES GLOBALES

// DOM READY


// DOM READY
var alan = document.getElementById("man");
alan.style.position = "absolute";
window.onmousemove = function(event){
    alan.style.left = event.clientX + -10+ "px";
    alan.style.top = event.clientY + -140+ "px";
}