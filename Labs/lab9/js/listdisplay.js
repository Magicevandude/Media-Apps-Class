
//HTML div fetch variable
let getwowtoons = document.getElementById("wowtoons");

//wowtoons array
let wowtoons = [
    { name: "Magicevan", race: "Human", class: "Mage", level: 70},
    { name: "Naturalevan", race: "Night Elf", class: "Druid", level: 70},
    { name: "Shadowevan", race: "Human", class: "Warlock", level: 62},
    { name: "Hunterevan", race: "Dwarf", class: "Hunter", level: 61}

];


//function with for loop to iterate the items in the wowtoons arrays. 
function wowtooninfo () {
    
for(let i = 0; i < wowtoons.length; i++) {
    console.log( wowtoons[1].level )
    let newEl = document.createElement("div");
    newEl.innerHTML = wowtoons[i].name + ": " + wowtoons[i].race + ":  " + wowtoons[i].class + ":  " + wowtoons[i].level;
    newEl.classList.add("level");
    getwowtoons.appendChild(newEl);
    
}

}
