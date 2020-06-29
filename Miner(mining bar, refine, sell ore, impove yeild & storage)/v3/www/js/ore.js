export class Ore_Controller {

    constructor(){
        this.bar = document.getElementById("mining_bar");

        this.ore_min = document.getElementById("total_ore_min");
        this.ore_capacity_min = document.getElementById("ore_capacity_min");

        this.ore_ref = document.getElementById("total_ore_ref");
        this.ore_capacity_ref = document.getElementById("ore_capacity_ref");

        this.total_ore = 0;
        this.percent = 0;
        this.currently_mining = true;
        this.ore_gain = 150;
        this.ore_storage = 1000;

        this.ore_min.innerText = this.total_ore;
        this.ore_capacity_min.innerText = this.ore_storage;

        this.ore_ref.innerText = this.total_ore;
        this.ore_capacity_ref.innerText = this.ore_storage;

        this.upgrade_cost_storage = 150;

        this.mining_yield_span = document.getElementById("mining_yeild_span");
        this.mining_yield_span.innerText = this.ore_gain;

        this.upgrade_cost_storage_span = document.getElementById("upgrade_cost_storage");
        this.upgrade_cost_storage_span.innerText = this.upgrade_cost_storage;

        this.upgrade_cost_mining_yield = {
            "Iron" : 17,
            "Silicon" : 10,
            "Copper" : 5,
            "Silver" : 2,
            "Gold" : 1
        };


    };

    resetBar(){
        this.percent = 0;
        this.bar.style.width = this.percent + "%";
    };

    miningCycle(){
        if ((this.total_ore + this.ore_gain) < this.ore_capacity_min.innerText) {
            this.total_ore += this.ore_gain;

             //Update ore in mining section
            this.ore_min.innerText = this.total_ore;

            //Update ore in refinery section
            this.ore_ref.innerText = this.total_ore;
        } else {
            this.total_ore = this.ore_capacity_min.innerText;
            this.ore_min.innerText = this.total_ore;
            this.ore_ref.innerText = this.total_ore;
        };
    };

    resetOreAmounts(){
        //This is for when the player refines.
        this.ore_min.innerText = 0;
        this.ore_ref.innerText = 0;
        this.total_ore = 0;
    };

    checkStorage(){
        if (this.ore_min.innerText == this.ore_capacity_min.innerText){
            this.currently_mining = false;
        } else {
            this.currently_mining = true;
        };
    };

    upgradeStorage(){
        this.ore_storage += Math.round(this.ore_storage*0.2);
        this.ore_capacity_min.innerText = this.ore_storage;
        this.ore_capacity_ref.innerText = this.ore_storage;
        this.upgrade_cost_storage = Math.round(this.upgrade_cost_storage * 1.3);
        this.upgrade_cost_storage_span.innerText = this.upgrade_cost_storage;
    };

    upgradeMining(RC){
        var counter = 0;

        for (var item in RC.material_count) {
            if (RC.material_count[item] >= this.upgrade_cost_mining_yield[item]){
                counter ++;
            };
        };
        if (counter === 5) {
            for (var item in RC.material_count) {
                RC.material_count[item] = RC.material_count[item] - this.upgrade_cost_mining_yield[item];  
                this.upgrade_cost_mining_yield[item] =  Math.round(this.upgrade_cost_mining_yield[item]*1.6);
            };
            this.ore_gain += Math.round(this.ore_gain*0.1);
            document.getElementById("mining_yeild_span").innerText = this.ore_gain;
            RC.updateMaterialCount();
            this.updateMiningYieldUpgradeCost();
        };
    };

    updateMiningYieldUpgradeCost(){
        document.getElementById("upgrade_cost_mining_iron").innerText = this.upgrade_cost_mining_yield["Iron"];
        document.getElementById("upgrade_cost_mining_silicon").innerText = this.upgrade_cost_mining_yield["Silicon"];
        document.getElementById("upgrade_cost_mining_copper").innerText = this.upgrade_cost_mining_yield["Copper"];
        document.getElementById("upgrade_cost_mining_silver").innerText = this.upgrade_cost_mining_yield["Silver"];
        document.getElementById("upgrade_cost_mining_gold").innerText = this.upgrade_cost_mining_yield["Gold"];
    };
};
