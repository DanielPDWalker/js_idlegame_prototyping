/*
Energy
    - Battery
    - Solar Panels

Ore_storage
    - m3
        - Upgrades

Refinery
    - 50% Base
        - Upgrades

Mining_laser
    - 100m3 / 10 seconds
        - Upgrades

*/
const bar = document.getElementById("mining_bar");
const ore = document.getElementById("total_ore");
const ore_capacity = document.getElementById("ore_capacity");


ore_capacity.innerText = 1000;
var total_ore = 0;
var percent = 0;
ore.innerText = 0;
var currently_mining = true;

var ore_gain = 499;



function resetBar(){
    percent = 0;
    bar.style.width = percent + "%";
};

function miningCycle(){
    if ((total_ore + ore_gain) < ore_capacity.innerText) {
        total_ore += ore_gain;
        ore.innerText = total_ore;
    } else {
        total_ore = ore_capacity.innerText;
        ore.innerText = total_ore;
    };
    
};

setInterval(() => {
    if (currently_mining === true) {
        if (bar.style.width == "100%") {
            resetBar();
            miningCycle();
        } else {
            bar.style.width = percent + "%";
            percent += 5;
        };
        if (ore.innerText == ore_capacity.innerText){
            currently_mining = false;
        } else {
            currently_mining = true;
        };
    };
}, 250);
