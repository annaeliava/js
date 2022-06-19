class Validator {
    static CheckEmail(collection){
        let isEmail;
        for(let input of collection){
            if (input.value == /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/){
                isEmail = true;
            }
            else 
            isEmail = false;
        }
        return isEmail;
    }
    static CheckDomain(collection){
        let isDomain;
        for(let input of collection){
            if(input.value == /^[a-zA-Z0-9][a-zA-Z0-9-]{1,61}[a-zA-Z0-9](?:\.[a-zA-Z]{2,})+$/){
                isDomain = true;
            }
            else
            isDomain = false;
        }
        return isDomain;
    }
    static CheckDate(collection){
        let isDate;
        for(let input of collection){
            if(input.value == /^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/){
                isDate = true;
            }
            else
            isDate = false;
        }
        return isDate;
    }
    static CheckPhone(collection){
        let isPhone;
        for(let input of collection){
            if(input.value == /^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/){
                isPhone = true;
            }
            else 
            isPhone = false;
        }
        return isPhone;
    }
}

console.log(Validator.CheckEmail('alisa@mail.ru'));
console.log(Validator.CheckDomain('itgirlschool.ru'));
console.log(Validator.CheckDate('12.05.2021'));
console.log(Validator.CheckPhone('+7(910)123-45-67'));


