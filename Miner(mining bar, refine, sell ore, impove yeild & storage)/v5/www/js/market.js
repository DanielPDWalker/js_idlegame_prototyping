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
};
