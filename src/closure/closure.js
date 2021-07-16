const moneyBox = (coins) => {
  var saveCoins = 0;
  saveCoins += coins;
};

moneyBox(5);
moneyBox(10);

/*No funciona el closure*/

/*********************************************************************/

const moneyBox = () => {
  var saveCoins = 0;
  const countCoins = (coins) => {
    saveCoins += coins;
    console.log(`moneyBox: $${saveCoins}`);
  };
  return countCoins;
};

let myMoneyBox = moneyBox();

myMoneyBox(4);
myMoneyBox(6);
myMoneyBox(10);

/*Si funciona el closure*/
