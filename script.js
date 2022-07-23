const config = {
    hangLoadingScreen: false,
    addedTimeAfterLoad: 1500,
}

function $(id) {
    return document.querySelector(id);
}

window.onload = () => {
$("#loadText").innerHTML = "Welcome!";
window.setTimeout(() => { // load for a bit more, than initialize
    if (config.hangLoadingScreen == true) return;
    $("#main").style.display = "initial";
    $("#main").style.opacity = "1";
    $("#start").style.display = "initial";
    $("#start").style.opacity = "0";
}, config.addedTimeAfterLoad);
};