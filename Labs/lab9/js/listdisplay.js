
let getwowtoons = document.getElementsByClassName("wowtoons");

let wowtoons = [
    { name: "Magicevan", race: "Human", class: "Mage", level: 70},
    { name: "Naturalevan", race: "Night Elf", class: "Druid", level: 70},
    { name: "Shadowevan", race: "Human", class: "Warlock", level: 62},
    { name: "Hunterevan", race: "Dwarf", class: "Hunter", level: 61}

];

console.log( wowtoons[1].level )

function wowtooninfo () {
for(let i = 0; i < getwowtoons.level; i++) {
    let newEl = document.createElement("div");
    newEl.innerHTML = wowtoons[i].name + ": " + wowtoons[i].level;
    newEl.classList.add("level");
    getwowtoons.appendChild(newEl);
}

}
