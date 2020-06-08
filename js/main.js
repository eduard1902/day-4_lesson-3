//'use strict';

let money = +prompt('Ваш месячный доход?');  
let income = 20; 
let addExpenses1 = prompt('Перечислите возможные расходы за рассчитываемый период через запятую');
let n = prompt('Есть ли у вас депозит в банке?'); 
let deposit = n == 'да'? true: false;//3
let mission = 100000; //любое число (Какую сумму хотите накопить)
let period =  6;
let expenses = prompt('Введите обязательную статью расходов');
let amount1 = prompt('Во сколько это обойдется?');
let expenses2 = prompt('Введите обязательную статью расходов');
let amount2 = prompt('Во сколько это обойдется?');
let budgetMonth = Number(amount1) + Number(amount2); //5
let period1 =  Math.ceil(mission / (money - budgetMonth));
let budgetDay = Math.floor((money - budgetMonth) / 30);

console.log(typeof money);// 1
console.log(typeof income);
console.log(typeof deposit);
console.log(deposit);

// Вывести в консоль длину строки addExpenses

// Вывести в консоль “Период равен (period) месяцев” и “Цель заработать (mission) рублей/долларов/гривен/юани”
console.log('Период равен ' + period + ' месяцев');
console.log('Цель заработать ' + mission + ' рублей');

console.log(addExpenses1);
addExpenses = addExpenses1.split(' ');
console.log(addExpenses);
console.log(budgetMonth);

console.log('Бюджет на месяц  '  + budgetDay * 30);

console.log('Цель будет достигнута за: ' + period1 + ' месяцев');

console.log('Бюджет на день ' + budgetDay + ' рублей');

console.log(typeof budgetDay);

if (budgetDay > 1200) {
    console.log('У вас высокий уровень дохода');
} else  {
    if (600 < budgetDay){
    console.log('У вас средний уровень дохода');
} else {
    if (0 < budgetDay) {
    console.log('У вас средний уровень дохода');
} else { if (budgetDay < 0) {
    console.log('Что то пошло не так');
}}}
};