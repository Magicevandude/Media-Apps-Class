let divcolor = document.getElementById("divcolor");


for(var i = 0; i < 4; i++) {
    let newcolor = document.createElement("div");
    newcolor.style.width = "200px";
    newcolor.style.height = "200px";
    newcolor.style.position = "absolute";
    newcolor.style.top = "25px";
    newcolor.style.left = "25px";
    newcolor.style.backgroundColor = "#555";

    divcolor.appendChild(newcolor);

    newcolor.addEventListener("click", changecolor1);

}

for(var i = 0; i < 4; i++) {
    let newcolor = document.createElement("div");
    newcolor.style.width = "200px";
    newcolor.style.height = "200px";
    newcolor.style.position = "absolute";
    newcolor.style.top = "25px";
    newcolor.style.left = "250px";
    newcolor.style.backgroundColor = "#555";

    divcolor.appendChild(newcolor);

    newcolor.addEventListener("click", changecolor2);

}

for(var i = 0; i < 4; i++) {
    let newcolor = document.createElement("div");
    newcolor.style.width = "200px";
    newcolor.style.height = "200px";
    newcolor.style.position = "absolute";
    newcolor.style.top = "25px";
    newcolor.style.left = "475px";
    newcolor.style.backgroundColor = "#555";

    divcolor.appendChild(newcolor);

    newcolor.addEventListener("click", changecolor3);

}

function changecolor1(event) {
    event.target.style.backgroundColor = "#FF0000";

}

function changecolor2(event) {
    event.target.style.backgroundColor = "#00FF00";

}

function changecolor3(event) {
    event.target.style.backgroundColor = "#0000FF";

}