const hamburger = document.getElementById("hamburger");
const mobileMenu = document.getElementById("mobile-menu");

hamburger.onclick = function (){
    if(mobileMenu.style.display==""){
        mobileMenu.style.display ="block"
    }
    else if(mobileMenu.style.display == "block"){
        mobileMenu.style.display = "none"
    }
    else if(mobileMenu.style.display == "none"){
        mobileMenu.style.display = "block"
    }
};