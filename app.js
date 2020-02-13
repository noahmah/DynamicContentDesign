var toggleView = true

function modalToggle() {
    if (toggleView == true){
        document.getElementById("modalBottom").style.display = "none";
        toggleView = false;
    } else if (toggleView ==false) {
        document.getElementById("modalBottom").style.display = "block";
        toggleView = true;
    }
}