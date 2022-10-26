const card_bevezeto_magyar = document.querySelector("card_bevezeto_magyar");
const card_bevezeto_angol = document.querySelector("card_bevezeto_magyar");
const hide = document.querySelector("hide");
const show = document.querySelector("show");
const einglish_version = document.querySelector("einglish_version");
const hungary_version = document.querySelector("einglish_version");


document.getElementById("para").onclick = function() {  
    fun()  
    };  
function fun(){

    card_bevezeto_magyar.classList.remove("show");
    card_bevezeto_magyar.classList.add("hide");
    card_bevezeto_angol.classList.remove("hide");
    card_bevezeto_angol.classList.add("show");

}