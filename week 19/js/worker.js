class Worker {
    constructor(name, surname, rate, days){
        this.name = name;
        this.surname = surname;
        this.rate = rate;
        this.days = days;
    }
    getSalary(){
        console.log(`${this.rate}` * `${this.days}`);
    }
}

let worker1 = new Worker('Anna', 'Eliava', 8, 31);
console.log(worker1.name);
console.log(worker1.surname);
console.log(worker1.rate);
console.log(worker1.days);
worker1.getSalary(); // когда записала код как в приложении к дз console.log(worker1.getSalary()), то показывал вместе с числом 248 ниже строку undefined