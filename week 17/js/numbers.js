let num=document.querySelector('#numbers');
let btn = document.querySelector('#btn');
let min = document.querySelector('#min');
let max = document.querySelector('#max');
let average = document.querySelector('#average');
let sum = document.querySelector('#sum');
let mult = document.querySelector('#mult');

function numGenerator() {
    let numbers = [];

    console.log(numbers);

    for (let i = 0; i < 10; i++) {
        let randomNumbers = Math.floor(Math.random() *21 -10); 
        numbers.push(randomNumbers); 
    };

    console.log(numbers);

    num.innerHTML = numbers;

    let minNumber = Math.min.apply(null, numbers);
    min.innerHTML='Минимальное:'+" "+minNumber;

    let maxNumber = Math.max.apply(null, numbers);
    max.innerHTML ='Максимальное:'+" "+ maxNumber;

    let sumNumbers = 0;
    for (let i = 0; i < numbers.length; i++) {
        sumNumbers += numbers[i];
    }
    sum.innerHTML ='Сумма:'+" "+sumNumbers;
    
    let averageNumbers=sumNumbers/numbers.length;
    average.innerHTML = 'Среднее арифметическое:'+" "+averageNumbers;

    let multNumbers=numbers.reduce((a,b)=>a*b);
    mult.innerHTML ='Произведение чисел:'+" "+ multNumbers;
}
