# js
##1. Какие бывают варианты объявления переменных?
```js
let message;
message='Hello!';

alert(message);
```
```js
let a=2;
let b=3;

alert(a+b);
```
```js
let message;
message='April';
message='May'; //замена значения message, объявит 'May'

alert(message);
```
```js
let message='Hello, world!';
let notification;

notification=message; //имеют одинаковые значения
alert(message);
alert(notification);
```
```js 
const COLOR_MAIN = #fff;
const USER = 100;

let color=COLOR_MAIN;
alert(color);
```
***
2.
```js
let name = "Ilya";
lert(`hello ${1}`); //выявит: hello 1
alert(`hello ${"name"}`); //выявит: hello name 
alert(`hello ${name}`); //выявит: hello Ilya
```
***
3.
```js
var x = 5;
var y = 2;
var z = x + y;
alert(z);
```
Ответ: 7
***
4. Какими тремя способами можно подключить js?
*В файле html прописать в теге. Например:
```html
<button onClick="alert('Hello!')"></button>
```
*В файле html перед закрывающимся тегом body вставить ссылку на скрипт:
```html
<script src="index.js"></script>
```
*В файле html внутри head вставить тег script (как со style):
```html
<head>
    <title>Document</title>
    <script>
        let message = 'hello';
        alert(message);
    </script>
<head>
```
***
5. Есть ли какая-то разница между записями typeof str и typeof(str)?
Ответ:
***
6.
```js
function showX(x)
{
    return x;
}
alert(showX(28));
```
Вернет 28.
***
7. 
```js
"" + 1 + 0 //1
"" - 1 + 0 //-1
true + false
6 / "3" 
"2" * "3" 
4 + 5 + "px" 
"$" + 4 + 5 
"4" - 2 
"4px" - 2 
7 / 0 // infinity
" -9 " + 5
" -9 " - 5
null + 1 //null
undefined + 1 //underfined
" \t \n " - 2
```
***
8.
```js
let a = prompt("Первое число?", 1);
let b = prompt("Второе число?", 2);

alert(a+b);
``` 
Ответ: "Первое число?", 1 "Второе число?", 2
***
9.
```js
x = 5;
++x;
x -= 2;
alert(x);
```
***
10.
```js
function sum(x, y=0) {
    return x+y;
}
alert(sum(5));
```

