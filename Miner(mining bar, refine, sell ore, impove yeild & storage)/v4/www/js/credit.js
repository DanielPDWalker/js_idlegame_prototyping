export class Credit_Controller {

    constructor(){
      this.total_credits = 0;
      this.credit_display = document.getElementById("current_credits");
      this.credit_display.innerText = this.total_credits;
    };

    updateCreditAmount(credit_addition){
      this.total_credits = this.total_credits + credit_addition;
      this.credit_display.innerText = this.total_credits.toLocaleString(undefined);
    };

};
