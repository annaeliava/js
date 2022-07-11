function whatsUrName() {
    let answer = document.getElementById('answer').value;
    let user = answer.trim().split(' ');
    console.log(user);
    let cases = document.getElementsByClassName('nameSections');
    for (let i=0; i<user.length; i++) {
        let result = user[i][0].toUpperCase() + user[i].slice(1).toLowerCase(); 
        console.log(result);
        cases[i].value=result;
    }
    let surnameResult = document.getElementById('surname');
    surnameResult.innerHTML = user[0];
    let nameResult = document.getElementById('name');
    nameResult.innerHTML = user[1];
    let paternalNameResult = document.getElementById('paternalName');
    paternalNameResult.innerHTML = user[2];
}