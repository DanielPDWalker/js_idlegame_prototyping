export class Market_Controller {

    constructor(){
      this.ore_buy_value = 100;
      this.ore_buy_value_display = document.getElementById("ore_market_price");
      this.ore_buy_value_display.innerText = this.ore_buy_value;
    };

    sellOre(CC, OC){
        CC.updateCreditAmount((100*this.ore_buy_value));
        OC.sell100Ore();
        OC.updateOreAmounts(100);
    };

    buyBlueprint(CC, BP, selected_blueprint){
      if (CC.total_credits >= BP.blueprint_for_sale[selected_blueprint]){
        CC.total_credits -= BP.blueprint_for_sale[selected_blueprint];
        BP.addBlueprintToPlayer(selected_blueprint);
        CC.refreshCreditAmount()
        let button = document.getElementById(selected_blueprint+"_blueprint_buy_button");
        button.disabled = true;
      }
    };

};
