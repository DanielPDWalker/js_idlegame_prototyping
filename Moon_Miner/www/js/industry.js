export class Industry_Controller {
  constructor(BP) {
    // Mining drone
    this.md_cost = BP.blueprint_industry_cost.mining_drone;
    this.md_iron_text = document.getElementById(
      "industry_mining_drone_iron_cost"
    );
    this.md_silicon_text = document.getElementById(
      "industry_mining_drone_silicon_cost"
    );
    this.md_copper_text = document.getElementById(
      "industry_mining_drone_copper_cost"
    );
    this.md_silver_text = document.getElementById(
      "industry_mining_drone_silver_cost"
    );
    this.md_gold_text = document.getElementById(
      "industry_mining_drone_gold_cost"
    );
  }

  updateIndustryCosts() {
    // Mining Drone
    this.md_iron_text.innerText = this.md_cost.iron;
    this.md_silicon_text.innerText = this.md_cost.silicon;
    this.md_copper_text.innerText = this.md_cost.copper;
    this.md_silver_text.innerText = this.md_cost.silver;
    this.md_gold_text.innerText = this.md_cost.gold;
  }
}
