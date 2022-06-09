let numberFirst;
let numberSecond;
let operator;
let result;

function equals() {
    let numberFirst = document.getElementById('firstNum');
    let numberSecond = document.getElementById('secondNum');
    let operator = document.getElementsByClassName("item");
    
    if (operator[0].checked == true) {
        let result = +numberFirst.value + +numberSecond.value;
        let textElement = document.querySelector('#formCalc');
        let newElement = document.createElement('div');
        newElement.id = 'calcResult';
        newElement.innerHTML = result;
        textElement.append(newElement);
    } else if (operator[1].checked == true){
        let result = +numberFirst.value - +numberSecond.value;
        let textElement = document.querySelector('#formCalc');
        let newElement = document.createElement('div');
        newElement.id = 'calcResult';
        newElement.innerHTML = result;
        textElement.append(newElement);
    } else if (operator[2].checked == true) {
        let result = +numberFirst.value * +numberSecond.value;
        let textElement = document.querySelector('#formCalc');
        let newElement = document.createElement('div');
        newElement.id = 'calcResult';
        newElement.innerHTML = result;
        textElement.append(newElement);
    } else if (operator[3].checked == true && numberSecond.value == 0){
        let textElement = document.querySelector('#formCalc');
        let newElement = document.createElement('div');
        newElement.id = 'calcResult';
        newElement.innerHTML = `На ноль делить нельзя!`;
        textElement.append(newElement);
    }
    else {
        let result = +numberFirst.value / +numberSecond.value;
        let textElement = document.querySelector('#formCalc');
        let newElement = document.createElement('div');
        newElement.id = 'calcResult';
        newElement.innerHTML = result;
        textElement.append(newElement);
    }
}




