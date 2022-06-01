#14
1. Какие есть способы объвлени функций?

Ответ: Function Declaration, Function Expression, функция мгновенного вызова, стрелочная функция (может быть еще многострелочной).
***
2. Приведите примеры вызова одной и той же функции всеми известными вам способами.

```js 
function test(a,b) {
    return a+b;
}
let result=test(10,5);
console.log(result);
```
```js
let test = function(a,b){
    return a+b;
};
let result=test(10,5);
console.log(result);
```
```js
(function(a,b){
    console.log(a+b);
})(10,5);
```
```js
console.log((function(a,b){
    return a+b;
}) (10,5));
```
```js
let test=(a,b) => a+b;
let result=test(10,5);
console.log(result);
```
***
3. В чем разница между тестированием и отладкой (дебаггингом)? А что такое логирование?

Ответ: <b>Тестрирование</b> - проверка кода. Осуществляется это двумя способами, первый - вручную на сайте проверить, также может быть автоматизированным, специально пишут скрипты для тестирования, обычно этим занимается другой отдел.

<b>Отладкой (дебаггингом)</b> - процесс поиска и исправления ошибок.

<b>Логирование</b> - когда нужно вывести что-то из кода для себя или других (внутренних).
***
4. В чем разница между Function Expression и Function Declaration?

Ответ: FE мы делаем все напрямую внутри переменной. В FD создаем отдельно переменную и вкладываем функцию. Но FE нельзя вызывать до объявлении функции в отличие от FD, где это возможно.
***
5. Что делает функция console.log()?

Ответ: Вводит код, вызывает функцию. Увидеть прямо на сайте невозможно (например, alert, который появлялся в виде моудльного окна), можно посмотреть результат в console (f12).
***
6. Что такое BOM и DOM?

Ответ: BOM или объектная модель браузера - объекты, представленные браузером (кроме документов), туда входит локация, история, alert, prompt, confirm. Менять данные объекты нельзя. DOM или объектная модель документа - содержимое страницы, представлено в виде объектов, которые можно менять.
***
7.
```html 
<!DOCTYPE HTML>
<html>

<body>
    <form name="search">
        <label>Поиск:
            <input type="text" name="search">
        </label>
        <input type="submit" value="Search!">
    </form>
    <hr>
    <form name="search-person">Поиск попосетителям:
        <table id="age-table">
            <tr>
                <td>Возраст:</td>
                <td id="age-list">
                    <label>
                        <input type="radio" name="age" value="young">до 18
                    </label>
                    <label>
                        <input type="radio" name="age" value="mature">18-50
                    </label>
                    <label>
                        <input type="radio" name="age" value="senior">старше 50
                    </label>
                </td>
            </tr>
            <tr>
                <td>Дополнительно:</td>
                <td>
                    <input type="text" name="info">
                    <input type="text" name="info">
                    <input type="text" name="info">
                </td>
            </tr>
        </table>
        <input type="button" value="Search!">
    </form> 
</body>

</html>
```
1) Таблица с ```id="age-table"```
2) Все элементы ```label``` внутри этой таблицы(их три)
3) Форму ```form``` с именем ```name="search"
***
8. Как сделать переход на другую страницу при клике на кнопку (без ```<a href=...>```, только средствами JavaScript)?
```html
<button id=testButton onclick="clickMe()">Press</button>
```
```js
function clickMe() {
    let testButton = document.getElementById ('testButton');
    testButton.src="link"; 
}
```
***
9. Как можно обнулить (очистить) значение внутри input?
***
10. Как будет выглядеть ваша функция приветствия из прошлого домашнего задания, если ее переписать в стрелочном формате?
```js 
let showMessage = () => {
    let name = prompt(`Привет, как тебя зовут?`);
    alert(`Привет, ${name} !`);
} 
```