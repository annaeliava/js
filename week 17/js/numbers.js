let arr = [];

for(let i = 0; i < 10; i++) {
    let randomText = document.querySelector('#randomNumbers');
    resultRandom = arr.push(Math.round(Math.random()*10));
    randomText.innerHTML = resultRandom;
}




console.log(arr);
