function english(){
    var card_bevezeto_magyar = document.getElementById("card_bevezeto_magyar");
    var card_bevezeto_angol = document.getElementById("card_bevezeto_angol");
    card_bevezeto_magyar.classList.remove("show");
    card_bevezeto_magyar.classList.add("hide");
    card_bevezeto_angol.classList.remove("hide");
    card_bevezeto_angol.classList.add("show"); 
}

function hungary(){
    var card_bevezeto_magyar = document.getElementById("card_bevezeto_magyar");
    var card_bevezeto_angol = document.getElementById("card_bevezeto_angol");
    card_bevezeto_magyar.classList.add("show");
    card_bevezeto_magyar.classList.remove("hide");
    card_bevezeto_angol.classList.add("hide");
    card_bevezeto_angol.classList.remove("show"); 
}

console.log(hide);
