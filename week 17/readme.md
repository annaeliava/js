#17
1. Какие кавычки можно использовать для создания строк в JS и в чем разница между ними?

Ответ: <b>""</b> и <b>''</b> - одинковые. (если в строке есть тоже кавычки, нужно поставить разные или \ перед ними)
<b>``</b> - если использовать обратные кавычки, то в такую строку мы можем вставлять произвольные выражения, обернув их в ${}.
***
2. Какими методами можно найти подстроку в строке? Приведите пример.

Ответ: indexOf(), lastIndexOf(), .search
***
3. Самостоятельно разберитесь, зачем нужен специальный символ `\n`?

Ответ: перенос строки
***
4. Напишите код, который делает первый символ заглавным. Например, `"настя"` ⇒ `"Настя"`

Ответ:
```js
let str = 'настя';
let newStr = str[0].toUpperCase();
let strLast = str.slice(1); //почему не str.slice(0)?
let newName = newStr + strLast; 
alert(newName);
```
```js
let str = 'настя';
let newStr = str.replace("настя", "Настя");
alert(newStr);
```
```js 
let str = 'настя';
str = 'Н' + str[1] + str[2] + str[3] +str[4];
alert(str);
```
```js
let str = 'настя';
let part = str.substring(1,5);
let newStr = 'Н' + part;
alert(newStr);
```
```js
let str = 'настя';
let part = str.substr(1,4);
let newStr = 'Н' + part;
alert(newStr);
```
***
5. Как создать дату 24 января 2021 года, 22 часа 51 минута? Временная зона – местная.

Ответ:
```js
let date = new Date(2021, 0, 4, 22, 51);
alert(date);
```
***
6. Как посчитать, сколько секунд осталось до завтра?

Ответ:
```js
let now = new Date();
let diff = Date.now();
alert(diff/1000);
```
***
7. Как выделить из строки с денежной суммой (например, *120р.* или *99€*) только цифры, т.е. *120 и 99*?ƒ

Ответ:
```js
let num = "120р.";
let num1 = num.replace(/[^0-9]/g, "");
console.log(num1);
```
```js
let num = "120р.";
let num1 = num.slice(0,3);
console.log(num1);
```
***
8. Зачем нужны функции `join` и `split`?

Ответ: <b>split</b> - строка в массив. <b>join</b> - массив в строку.
***
9. Какой из вариантов округления делает это по математическим правилам?

Ответ: `Math.round`
***
10. Как сгенерировать случайное число от 1 до 100?

Ответ:
```js
let arr = [];
arr.push(Math.round(Math.random()*100));
console.log(arr);
```
***
11. Зачем нужна функция `str.trim()` ?

Ответ: `str.trim()` удаляет пробельны с начала и конца строки.
***
12. Что такое флаг?

Ответ: Флаги - шаблоны, используемые для сопоставления последовательностей символов в строках.