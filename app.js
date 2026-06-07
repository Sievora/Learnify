const nav = document.getElementById("nav");
const burger = document.getElementById("burger");
const close = document.getElementById("close");

function showside(){
    nav.style.top = "55px";
    nav.style.transition = "0.8s ease";
    nav.style.filter = "blur(0px)";
    burger.style.display = "none";
    close.style.display = "flex";

}

function hideside(){
    nav.style.top = "-700px";
    nav.style.transition = "0.8s ease";
    nav.style.filter = "blur(10px)";
        burger.style.display = "flex";
    close.style.display = "none";

}