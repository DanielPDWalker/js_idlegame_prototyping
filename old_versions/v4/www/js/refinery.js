export class Refinery_Controller {

    constructor(){
        this.material_count = {
            "Iron" : 0,
            "Silicon" : 0,
            "Copper" : 0,
            "Silver" : 0,
            "Gold" : 0
        };

        this.ore_to_refine

    };

    refineMaterial(){

        for (let index = 0; index < this.ore_to_refine; index++) {
            let key = Math.round(Math.random() * 100);
            
            if (key == 1) {
                this.material_count["Gold"] += 1;    
            } else if (key <= 3) {
                this.material_count["Silver"] += 1;            
            } else if (key <= 10 ) {
                this.material_count["Copper"] += 1;
            } else if (key <= 22) {
                this.material_count["Silicon"] += 1;
            } else {
                this.material_count["Iron"] += 1;
            }
        };
        
        document.getElementById("iron_amount").innerText = this.material_count["Iron"];
        document.getElementById("silicon_amount").innerText = this.material_count["Silicon"];
        document.getElementById("copper_amount").innerText = this.material_count["Copper"];
        document.getElementById("silver_amount").innerText = this.material_count["Silver"];
        document.getElementById("gold_amount").innerText = this.material_count["Gold"];
    };

    updateMaterialCount(){
        document.getElementById("iron_amount").innerText = this.material_count["Iron"];
        document.getElementById("silicon_amount").innerText = this.material_count["Silicon"];
        document.getElementById("copper_amount").innerText = this.material_count["Copper"];
        document.getElementById("silver_amount").innerText = this.material_count["Silver"];
        document.getElementById("gold_amount").innerText = this.material_count["Gold"];
    };
};