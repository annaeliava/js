function sumInput() {
    let answers = [];

    while (true) {
        let num = prompt("Введите число", '');

        if ( num === "" || num === null || !isFinite(num)) break;

        answers.push(+num);
    } //принимаем и отправляем в массив answers

    let sum = 0; //сумма элементов в данный момент равен 0

    for (let answer of answers) {
        sum += answer;
    } //суммируем реузльтаты

    console.log(answers.sort((a,b)=>a-b)); //сортируем по возрастанию

    return sum; //выводим результат вычислений в for
}

alert(sumInput()); //выводим на экран результат