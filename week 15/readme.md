#15
1. Сколько есть видов условных операторов?

Ответ: Есть 5 видов условных операторов, таких как оператор if, if...else, else if, тернарный оператор, switch. 
***
2. Перепишите пример про определение времени суток через тернарный оператор
    
    ```jsx
    let date = new Date();
    let time = date.getHours();
    
    if (time < 10) {
      alert( "Доброе утро!" );
    } else {
      alert( "Добрый день!" );
    }
    ```
Ответ: 
  ```js
    let date = new Date();
    let time = date.getHours();

    (time < 10) ? alert( "Доброе утро!" ):alert( "Добрый день!" );
  ```
***
3. Выведется ли `alert`?
    
    ```jsx
    if ("0") {
      alert( 'Привет' );
    }
    ```
Ответ: да, выведется - Привет.
***
4. Чему будет равно условие (правда или ложь) в этих случаях, если `x = 6` and `y = 3`?
    - (x < 10 && y > 1) *логическое И* //true
    - (x == 5 || y == 5) *логическое ИЛИ* //false
    - !(x == y) *логическое НЕ* //true
***
5. Назовите три способа назначения обработчиков событий. Какой из них самый универсальный?

Ответ: `<button id="hello" onclick="alert('Hello!')"></button>`
```html
<button id="hello" onclick=hello()></button>

<script>
  function hello() {
    alert('Hello!'); 
  }
</script>
```
```html 
<script>
  hello.onclick = hello() {
    alert('Hello!');
  };
</script>
```
```js
function hello() {
  alert('Hello!');
}

hello.onclick = hello;
```

```html
<body>
  <input id="elem" type="button" value="Click me!">
</body>

<script>
  function handler1() {
    alert('Thank you');
  };
  function handler2() {
    alert('Thank you again');
  }
  elem.onclick = () => alert ("Hello");
  elem.addEventListener("click", handler1);
  elem.addEventListener("click", handler2); //самый универсальный, так как есть события, которые можно назначить только через addEventListener
</script> 
```
***
6. Корректна ли такая запись? `button.onclick = hello();`

Ответ: `button.onclick = hello;`
***
7. Какие есть события у клавиатуры?

Ответ: keydown/keyup(когда пользователь нажимает/отпускает клавишу)
***
8. Что такое объект события и какие у него могут быть свойства?

Ответ: Когда происходит событие, браузер создает объект события, записывает в него детали и передаёт в качестве аргумента функции-обработчику. У него есть такие свойства, как event.type, event.currentTarget, event.clientX(/Y).
***
9. Самостоятельно разберитесь, какие бывают операторы сравнения? Напишите сюда как выглядят сравнение "равно", "не равно", "больше чем".

Ответ:
* <b>"равно"</b> - <i>==</i>
* <b>"не равно"</b> - <i>!=</i>
* <b>"больше чем"</b> - <i>>=</i>