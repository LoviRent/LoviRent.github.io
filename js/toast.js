function toasteinblenden_copy() {
    const toast = document.getElementById("toast-copy").classList;
    toast.add("block");
    toast.add("toast-anim");
    window.setTimeout(function() {
        toast.remove("toast-anim");
        toast.remove("block");
    },4000)
}
function toast_pixel() {
    const toast = document.getElementById("pixel-toast").classList;
    toast.add("block");
    toast.add("toast-anim-ein");
}
function toastexit_pixel() {
    const toast = document.getElementById("pixel-toast").classList;
    toast.remove("toast-anim-ein");
    toast.add("toast-anim-aus");
    window.setTimeout(function(){
        toast.remove("toast-anim-aus");
        toast.remove("block");
    },2000);
}

function toast_mc() {
    const toast = document.getElementById("mc-toast").classList;
    toast.add("block");
    toast.add("toast-anim-ein");
}
function toastexit_mc() {
    const toast = document.getElementById("mc-toast").classList;
    toast.remove("toast-anim-ein");
    toast.add("toast-anim-aus");
    window.setTimeout(function(){
        toast.remove("toast-anim-aus");
        toast.remove("block");
    },2000);
}

function toast_css() {
    const toast = document.getElementById("css-toast").classList;
    toast.add("block");
    toast.add("toast-anim-ein");
}
function toastexit_css() {
    const toast = document.getElementById("css-toast").classList;
    toast.remove("toast-anim-ein");
    toast.add("toast-anim-aus");
    window.setTimeout(function(){
        toast.remove("toast-anim-aus");
        toast.remove("block");
    },2000);
}