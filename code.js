window.onscroll = function() {scrollFunc()};
var navbar = document.getElementById("header");
var sticky = navbar.offsetTop;

function scrollFunc() {
    if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky")
    } else {
        navbar.classList.remove("sticky")
    }
}