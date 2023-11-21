const abreMenu = document.getElementById("abreMenu"),
        menuNav = document.getElementById("menuNav");

abreMenu.addEventListener("change", function(){
    if (abreMenu.checked) {
        menuNav.style.display = "flex";
    } else {
        menuNav.style.display = "none";
    }
});