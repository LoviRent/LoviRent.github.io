function toasteinblenden(toast) {
    document.getElementById("toast-copy").classList.add("block");
    window.setTimeout( function() {
        document.getElementById("toast-copy").classList.add("eingeblendet");
    },1);
    window.setTimeout(toastausblenden, 2500);
}
function toastausblenden(toast) {
    document.getElementById("toast-copy").classList.add("ausgeblendet");
    window.setTimeout(function() {
        document.getElementById("toast-copy").classList.remove("block");
    },500);
    document.getElementById("toast-copy").classList.remove("eingeblendet");
    document.getElementById("toast-copy").classList.remove("ausgeblendet");
}