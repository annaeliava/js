#21

1. Приведите примеры GET-вызовов с параметрами (2-3 возможных адреса URL, можно реальных, можно из головы)?
    
    *Например,* 
    
    *www.clothes.com/catalog?category=dress - выбирает одежду категории платья*
    
    *https://www.ebay.com/sch/i.html?_from=R40&_nkw=handbag&_sacat=0&rt=nc&_udlo=200&_udhi=500 - выбирает сумки стоимостью от 200$ до 500$* 

Ответ: *https://www.google.com/search?q=get+%D0%B2%D1%8B%D0%B7%D0%BE%D0%B2&hl=ru&sxsrf=ALiCzsYAB7UtS_Zgw86asHKy8m-olpqBvg%3A1656879868555&source=hp&ei=_PrBYqGhHuzFrgSB-62oDQ&iflsig=AJiK0e8AAAAAYsIJDFwY6Vshju9959aCtezjcIYZbBsb&oq=get+dspjd&gs_lcp=Cgdnd3Mtd2l6EAMYADIJCCEQChCgARAqMgcIIRAKEKABMgcIIRAKEKABOgcIIxDqAhAnOgoILhDHARDRAxAnOgQIIxAnOgsIABCABBCxAxCDAToRCC4QgAQQsQMQgwEQxwEQ0QM6CwguEIAEELEDEIMBOggIABCABBCxAzoUCC4QgAQQsQMQgwEQxwEQ0QMQ1AI6DgguEIAEELEDEMcBENEDOgsILhCABBCxAxDUAjoFCAAQgAQ6CAguEIAEENQCOgUILhCABDoFCAAQywE6CAgAEB4QDxAWOgYIABAeEBZQkURYoXRg-XxoAXAAeACAAbIBiAHkCJIBAzQuNZgBAKABAbABCg&sclient=gws-wiz -поиск в гугле get вызов* 
*https://www.asos.com/women/sale/tops/cat/?cid=4167&ctaref=hp%7Cww%7Csale%7Ccarousel%7C2%7Ccategory%7Ctops&currentpricerange=0-160&refine=attribute_1046:72011,8335|size:41215 - поиск топа (кроп-топ и ассиметричный) на сейле в размере UK 4-7*
*https://yandex.ru/pogoda/krasnodar/details?via=ms#6 - погода в Краснодаре 6 июля* 
*** 
2. Расскажите своими словами, чем отличаются GET и POST-запросы?

Ответ: get запрос - мы запрашиваем данные из указанного ресурса. Мы можем его увидеть на ссылке сайта. Имеет ограничения в длине. Не должен содержать конфиденциальные данные. Можем обновлять сайт бесконечно раз и ничего не изменится. post - здесь уже наоборот, мы отправляем данные для обработки. Не имеет ограничения в длине. Не кэшируется.
***
3. Какой вид запроса лучше использовать для получения отфильтрованного списка товаров? 

Ответ: get запрос 
***
4. А какой - для формы регистрации? 

Ответ: POST запрос
***
5. Посмотрите на запрос и разберитесь, что он делает и что означают и на что влияют параметры api_key, q, limit, lang? Как сделать так, чтобы запрос возвращал не 25, а 5 картинок? 
    
    Документация к API находится здесь: [https://developers.giphy.com/explorer](https://developers.giphy.com/explorer) 
    
    ```jsx
    https://api.giphy.com/v1/gifs/search?api_key=SET_KEY_HERE&q=cats&limit=25&offset=0&rating=g&lang=en
    ```

Ответ: поиск гифок с котиками, количество гифок - 25, возрастное ограничение - g, язык - английский
***
6. Как посмотреть заголовки запроса к странице или API?

Ответ: через f12
***
7. Самостоятельно разберитесь, что такое CORS. Приведите пример их включения в запросе `fetch`.

Ответ: Cross-Origin Resource Sharing (CORS) — механизм, использующий дополнительные HTTP-заголовки, чтобы дать возможность агенту пользователя получать разрешения на доступ к выбранным ресурсам с сервера на источнике (домене), отличном от того, что сайт использует в данный момент.
***
8. Что можно писать в параметре заголовков `Content-Type` ?

Ответ: application/x-www-form-urlencoded, multipart/form-data || text/plain || application/json
***
9. Давайте отправим информацию о собачке в API по адресу `localhost/pets/add` 
    
    ```json
    JSON с информацией о собаке:
    {
    		"breed": "Beagle",
    		"size": "large",
    		"color": "orange",
    		"age": 6
    	}
    ```
    
    Как будет выглядеть `fetch` в таком случае?


Ответ:
```js
function test(){
    let info = document.getElementById("petSearch").value
    fetch("httpss://localhost/pets/add" + info)
        .then(response => response.json())
        .then(result => {
            document.getElementById("pet").innerText = pets.breed;
        })
        .catch(error=>console.log(error));

}
```
***
10. Изучите статью [https://learn.javascript.ru/promise-basics](https://learn.javascript.ru/promise-basics) и самостоятельно разберитесь, что такое промисы. Напишите в 1-2 предложения, что это такое и приведите пример, где вы уже сталкивались с промисами?

Ответ: Промисы - это специальный объект в в JS, который связывает "создающий" и "потребляющий" код вместе. "Создающий" код может выполнять сколько потребуется, чтобы получить реузльтат, а промис делает реузльтат доступным для кода, который подписан на него, когда результат готов. Методы then & catch мы уже встречали в fetch. С then мы парсили, получали данные, а при помощи catch - ловили ошибки.