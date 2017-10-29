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

var main = document.querySelector("main").offsetTop;
var navbar = document.querySelector("#navbar");
var navbarIcon = document.querySelector("#navbar-icon");

window.onload = function() {

    // Events
    window.addEventListener("scroll", updateNav);

    updateNav();
}

function updateNav() {
    if (window.scrollY > main) {
        navbar.classList.add("navbar-bg-color");
        navbarIcon.classList.add("hide");
    } else {
        navbar.classList.remove("navbar-bg-color")
        navbarIcon.classList.remove("hide");
    }
}
