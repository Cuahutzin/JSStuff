//this is not a closure, is not using th lex. env. to reach oiutside env. variables.
//And thus not able to save money
const moneyBox = (coins) => {
    var savedCoins = 0;
    savedCoins +=  coins;
    console.log (`MoneyBox:$${savedCoins}` );
}
moneyBox(5);
moneyBox(10);

const moneyBoxC = () => {
    var saveCoins = 0;
    const countCoins = (coins) => {
        saveCoins += coins;
        console.log(`MoneyBox: $${saveCoins}`);
    }
    return countCoins;
};

let myMoneyBox = moneyBoxC();
myMoneyBox(4);//4
myMoneyBox(6);//10
myMoneyBox(10);//20

