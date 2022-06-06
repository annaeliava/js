let numberLeft;
let numberRight;

const sum = () => {
    let numberLeft = document.getElementById('left');
    let numberRight = document.getElementById('right');
    alert(Number(numberLeft.value)+Number(numberRight.value));
}

const minus = () => {
    let numberLeft = document.getElementById('left');
    let numberRight = document.getElementById('right');
    alert(Number(numberLeft.value)-Number(numberRight.value));
}

const multiply = () => {
    let numberLeft = document.getElementById('left');
    let numberRight = document.getElementById('right');
    alert(Number(numberLeft.value)*Number(numberRight.value));
}
const divide = () => {
    let numberLeft = document.getElementById('left');
    let numberRight = document.getElementById('right');
    alert(Number(numberLeft.value)/Number(numberRight.value));
}




