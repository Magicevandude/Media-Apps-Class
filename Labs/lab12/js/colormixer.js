let divcolor = document.getElementById("rgbdiv");


for(var i = 0; i < 4; i++) {
    let newcolor = document.createElement("div");
    newcolor.style.width = "200px";
    newcolor.style.height = "200px";
    newcolor.style.position = "absolute";
    newcolor.style.top = "50px";
    newcolor.style.left = "300px";
    newcolor.style.backgroundColor = "#9A6ED4";

    divcolor.appendChild(newcolor);

    newcolor.addEventListener("click", changedivcolor);

}

function changedivcolor(event) {
    event.target.style.backgroundColor = "#9A6ED4";

}