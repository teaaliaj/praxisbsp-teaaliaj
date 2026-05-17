const popUp = document.getElementById("cookiePopup");

popUp.addEventListener("click", (event)=> {
    if(event.target.tagName ==="BUTTON"){
        popUp.style.display="none";
    }
});