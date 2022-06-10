function changeTheme() {
    let info = document.getElementById('theme');
    let body = document.body;

    switch(info.value) {
        case "gray": body.style.backgroundColor = 'gray';
        break;
        case "pink": body.style.backgroundColor = 'pink';
        break;
        case "yellow": body.style.backgroundColor = 'yellow';
        break;
        case "blue": body.style.backgroundColor = 'blue';
        break;
    }
}