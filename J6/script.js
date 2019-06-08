let money = prompt("Ваш счет на месяц?");
let time = prompt("Введите дату в формате YYYY-MM-DD");
let expenses1 = prompt("Введите обязательную статью расходов в этом месяце");
let expenses2 = prompt("Во сколько обойдется?");
let income = [];
let savings = false;
let expenses = {
    costs : expenses1,
    cost : expenses2
}
let optionalExpenses = {

}
let appData = {
    budget : money,
    timeData: time,
    expenses,
    optionalExpenses,
    income,
    savings
}

console.log(appData["budget"]);
console.log(appData["timeData"]);
console.log(appData["expenses"]);
console.log(appData["savings"]);

let budget = appData["budget"]/30;

alert("Бюджет на один день: " + budget);