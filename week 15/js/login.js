function check() {
    let name = document.getElementById('signUpName');
    let surname = document.getElementById('signUpSurname');
    let numEmail = document.getElementById('signUpNumEmail');
    let password = document.getElementById('signUpPassword');
    let birthdayDay = document.getElementById('signUpDay');
    let birthdayYear = document.getElementById('signUpYear');
    
    if(name.value == ""){
        document.getElementById('signUpName').style.border='2px solid red';
    }

    if(surname.value == ""){
        document.getElementById('signUpSurname').style.border='2px solid red';
    }

    if(numEmail.value == ""){
        document.getElementById('signUpNumEmail').style.border='2px solid red';
    }

    if(password.value == ""){
        document.getElementById('signUpPassword').style.border='2px solid red';
    }

    if(birthdayDay.value == ""){
        document.getElementById('signUpDay').style.border='2px solid red';
    }

    if(birthdayYear.value == ""){
        document.getElementById('signUpYear').style.border='2px solid red';
    }

    if(name.value == "" || surname.value == "" || numEmail.value == "" || password.value == "" || birthdayDay.value == "" || birthdayYear.value == ""){
        let form = document.querySelector('.signUpForm');
        let error = document.createElement('div');
        error.id = 'error';
        error.innerHTML = "Не заполнено";
        form.append(error);
    } else {
        alert(`Добро пожаловать, ${name.value}!`)
    }
}