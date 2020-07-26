const asteroid = document.getElementById("roid");
const mined = document.getElementById("ore");
const botCount = document.getElementById("bot");
const buyBot = document.getElementById("buybot");
const botCost = document.getElementById("botcost");
const botBuyError = document.getElementById("botbuyerror");

asteroid.addEventListener("click", function(e) {
  mined.innerText = Number(mined.innerText) + 10;
  botBuyError.innerText = "";
});

buyBot.addEventListener("click", function(e) {
  if (Number(botCost.innerText) <= Number(mined.innerText)) {
    mined.innerText = mined.innerText - botCost.innerText;
    botCost.innerText = Math.round(botCost.innerText * 1.05);
    botCount.innerText++;
  } else {
    botBuyError.innerText = "You cannot afford a bot";
  }
});

function botCycle() {
  mined.innerText = Number(mined.innerText) + Number(botCount.innerText * 10);
}

setInterval(() => {
  botCycle();
}, 1000);
