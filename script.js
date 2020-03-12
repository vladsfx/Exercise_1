'use strict';

let money = prompt('Ваш бюджет на месяц', '');
let time = prompt('Введите дату в формате YYYY-MM-DD', '');

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false
};

console.log(appData.budget);
console.log(appData.timeData);

let article1 = prompt('Введите обязательную статью расходов в этом месяце', '');
let amount1 = prompt('Во сколько обойдётся?', '');

appData.expenses.article1 = amount1;
console.log(article1 + ': ' + appData.expenses.article1);

let article2 = prompt('Введите обязательную статью расходов в этом месяце', '');
let amount2 = prompt('Во сколько обойдётся?', '');

appData.expenses.article2 = amount2;
console.log(article2 + ': ' + appData.expenses.article2);

alert('Бюджет на 1 день составляет ' + money / 30 + ' рублей');