# js
***
##1. Какие бывают варианты объявления переменных?
***
```js
let message;
message='Hello!';

alert(message);
```
***
```js
let a=2;
let b=3;

alert(a+b);
```
***
```js
let message;
message='April';
message='May'; //замена значения message, объявит 'May'

alert(message);
```
***
```js
let message='Hello, world!';
let notification;

notification=message; //имеют одинаковые значения
alert(message);
alert(notification);
```
***
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
***
Ответ: 7
