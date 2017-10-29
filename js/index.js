// tryton-vanmeer.github.io
//
// ___  ________  ___      ___ ________  ________  ________  ________  ___  ________  _________
// |\  \|\   __  \|\  \    /  /|\   __  \|\   ____\|\   ____\|\   __  \|\  \|\   __  \|\___   ___\
// \ \  \ \  \|\  \ \  \  /  / | \  \|\  \ \  \___|\ \  \___|\ \  \|\  \ \  \ \  \|\  \|___ \  \_|
// __ \ \  \ \   __  \ \  \/  / / \ \   __  \ \_____  \ \  \    \ \   _  _\ \  \ \   ____\   \ \  \
// |\  \\_\  \ \  \ \  \ \    / /   \ \  \ \  \|____|\  \ \  \____\ \  \\  \\ \  \ \  \___|    \ \  \
// \ \________\ \__\ \__\ \__/ /     \ \__\ \__\____\_\  \ \_______\ \__\\ _\\ \__\ \__\        \ \__\
// \|________|\|__|\|__|\|__|/       \|__|\|__|\_________\|_______|\|__|\|__|\|__|\|__|         \|__|
//                                         \|_________|

var navbar = document.querySelector("#navbar");
var navbarIcon = document.querySelector("#navbar-icon");
var headerText = document.querySelector("#header-text");

window.onload = function() {

    // Events
    window.addEventListener("scroll", updateNav);

    updateNav();
}

function updateNav() {
    var main = document.querySelector("main").offsetTop - 200;

    if (window.scrollY > main) {
        navbar.classList.add("navbar-bg-color");
        navbarIcon.classList.add("hide");
        headerText.classList.add("hide");
    } else {
        navbar.classList.remove("navbar-bg-color")
        navbarIcon.classList.remove("hide");
        headerText.classList.remove("hide");
    }
}
