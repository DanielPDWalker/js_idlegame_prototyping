export class Blueprint_Controller {
  constructor() {
    this.blueprint_for_sale = {
      mining_drone: 100000,
    };
    this.blueprint_industry_cost = {
      mining_drone: {
        iron: 1000,
        silicon: 150,
        copper: 225,
        silver: 45,
        gold: 15,
      },
    };
    this.player_owned_blueprint = {};
  }

  updatePlayerOwnedBlueprint() {
    let div = document.getElementById("industry_mining_drone_div");
    div.hidden = false;
  }

  addBlueprintToPlayer(selected_blueprint) {
    this.player_owned_blueprint += this.blueprint_industry_cost[
      selected_blueprint
    ];
    this.updatePlayerOwnedBlueprint();
  }
}
