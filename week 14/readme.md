#14
1. Какие есть способы объвлени функций?
***
2. Приведите примеры вызова одной и той же функции всеми известными вам способами.
***
3. В чем разница между тестированием и отладкой (дебаггингом)? А что такое логирование?
***
4. В чем разница между Function Expression и Function Declaration?
***
5. Что делает функция console.log()?
***
6. Что такое BOM и DOM?
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
***
9. Как можно обнулить (очистить) значение внутри input?
***
10. Как будет выглядеть ваша функция приветствия из прошлого домашнего задания, если ее переписать в стрелочном формате?