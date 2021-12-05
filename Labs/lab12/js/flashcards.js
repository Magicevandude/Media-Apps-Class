// setting element variable for HTML div element
let element = document.getElementById("flashcards");
element.addEventListener("click", flashcard);

function flashcard(event) {

    event.target.style.backgroundColor = "#999";
    
    let response = event.target.getAttribute("data-response");
    event.target.innerHTML = response;



}

for(var i = 0; i < 4; i++) {
    let newEl = document.createElement("div");
    newEl.style.width = "25px";
    newEl.style.height = "25px";
    newEl.style.position = "absolute";
    newEl.style.top = "50px";
    newEl.style.left = "550px";
    newEl.style.backgroundColor = "#555";

    flashcards.appendChild(newEl);

}
