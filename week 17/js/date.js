function formatDate(date) {
    let now = new Date();
    let diff = now - date;
    let seconds = Math.floor(diff / 1000);
    let minutes = Math.floor(diff / 60000);
    if (diff < 1000) {
        return ("прямо сейчас")
    } else if (seconds < 60) {
        return seconds +" " + "секунд назад"
    } else if (minutes < 60) {
        return minutes + " " +"минут назад"
    } else {
        return `${date.getDate()}.${"0"+(date.getMonth()+1)}.${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}`
    }
};

alert(formatDate(new Date(new Date - 1))); // "прямо сейчас"
console.log(formatDate(new Date(new Date - 1)));
alert(formatDate(new Date(new Date - 30 * 1000))); // "30 сек. назад"
console.log(formatDate(new Date(new Date - 30 * 1000)));
alert(formatDate(new Date(new Date - 5 * 60 * 1000))); // "5 мин. назад"
console.log(formatDate(new Date(new Date - 5 * 60 * 1000)));
alert(formatDate(new Date(new Date - 86400 * 1000))); // вчерашняя дата 
console.log(formatDate(new Date(new Date - 86400 * 1000)));