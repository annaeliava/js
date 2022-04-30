function insert(num) {
    document.form.textview.value += num;
}
function clean() {
    document.form.textview.value = "";
}
function back() {
    let data = document.form.textview.value;
    document.form.textview.value = data.substring(0,data.length-1);
}
function equal() {
    let data = document.form.textview.value;
    if(data) {
        document.form.textview.value = eval(data);
    }
}