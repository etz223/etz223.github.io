// VARIABLES GLOBALES


// DOM READY
document.addEventListener("DOMContentLoaded", function() {
    console.log('ready');
});

// FUNCTIONS EXTERNES
//$("#button").on("click", function(){
//    $("#hide").fadeToggle();
//    $("#virus").fadeToggle();
//});

function toggle(e, c){
    var x = document.querySelector(e);
    x.classList.toggle(c);
}
