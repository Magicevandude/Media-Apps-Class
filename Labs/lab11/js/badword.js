
let txt = document.getElementById("txt");
let userword = document.getElementById("foundbadword");

let badword = [{bdword: "clear"},
                {bdword: "water"}, 
                {bdword: "tires"}
            ];


function findbadword () {

    for(var i = 0; i < badword.length; i++) {
        let newEl = document.createElement("div");
        newEl.innerHTML = badword[i].bdword;
        userword.appendChild(newEl);
    }


}


