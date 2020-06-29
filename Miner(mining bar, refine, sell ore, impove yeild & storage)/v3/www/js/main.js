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
import { Ore_Controller } from './ore.js';
import { Refinery_Controller } from './refinery.js';

var OC = new Ore_Controller();
var RC = new Refinery_Controller();

// var material_count = {
//     "Iron" : 0,
//     "Silicon" : 0,
//     "Copper" : 0,
//     "Silver" : 0,
//     "Gold" : 0
// };

OC.updateMiningYieldUpgradeCost()

function refine() {
    RC.ore_to_refine = OC.ore_min.innerText

    if (RC.ore_to_refine == 0) {
        return;
    } else {
        OC.resetOreAmounts();
        RC.refineMaterial();
    };    
};

setInterval(() => {
    if (OC.currently_mining === true) {
        if (OC.bar.style.width == "100%") {
            OC.resetBar();
            OC.miningCycle();
        } else {
            OC.bar.style.width = OC.percent + "%";
            OC.percent += 5;
        };
    };
    OC.checkStorage();
    
}, 200);

document.getElementById("refine_button").addEventListener("click", function() {
    refine();
});

document.getElementById("upgrade_storage_button").addEventListener("click", function() {
    if (RC.material_count["Iron"] >= OC.upgrade_cost_storage){
        RC.material_count["Iron"] = RC.material_count["Iron"] - OC.upgrade_cost_storage;
        OC.upgradeStorage();
        RC.updateMaterialCount();
    }
});

document.getElementById("upgrade_mining_yeild_button").addEventListener("click", function() {
        OC.upgradeMining(RC);
});