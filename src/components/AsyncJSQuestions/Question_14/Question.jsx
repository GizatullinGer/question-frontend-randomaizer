import React from 'react'
import { Examples } from '../../Examples/Examples'

const Question = () => {
	return (
		<div>
			<p>
				Callback-функция (колбэк-функция) - это функция, которая передается как
				аргумент в другую функцию и выполняется после завершения выполнения этой
				функции. Callback-функции используются в асинхронном программировании,
				чтобы выполнить код после завершения асинхронной операции, такой как
				чтение файла, отправка запроса на сервер или обработка события.
			</p>
			<p>Пример простой колбэк-функции в JavaScript:</p>
			<Examples>
				function fetchData(url, callback) &#123;
				<br />
				&emsp;&emsp;// Симулируем асинхронный запрос данных
				<br />
				&emsp;&emsp;setTimeout(() =&gt; &#123;
				<br />
				&emsp;&emsp;&emsp;&emsp;const data = &#123; name: 'John', age: 30
				&#125;;
				<br />
				&emsp;&emsp;&emsp;&emsp;callback(data);
				<br />
				&emsp;&emsp;&#125;, 1000);
				<br />
				&#125;
				<br />
				<br />
				function processUserData(user) &#123;
				<br />
				&emsp;&emsp;console.log(`Имя: $&#123;user.name&#125;, Возраст:
				$&#123;user.age&#125;`);
				<br />
				&#125;
				<br />
				<br />
				fetchData('https://example.com/api/user', processUserData);
			</Examples>
			<p>
				В этом примере <b>`processUserData`</b> является колбэк-функцией,
				которая будет вызвана после того, как данные будут получены из
				асинхронной операции <b>`fetchData`</b>.
			</p>
			<p>
				<b>Callback Hell (ад)</b> - это термин, используемый для описания
				ситуации, когда в коде слишком много вложенных колбэк-функций, делая код
				трудночитаемым и трудноподдерживаемым. Это часто возникает, когда вы
				работаете с несколькими асинхронными операциями, которые зависят друг от
				друга, и код выглядит примерно так:
			</p>
			<Examples>
				asyncOperation1(function () &#123;
				<br />
				&emsp;&emsp;asyncOperation2(function () &#123;
				<br />
				&emsp;&emsp;&emsp;&emsp;asyncOperation3(function () &#123;
				<br />
				&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;// И так далее...
				<br />
				&emsp;&emsp;&emsp;&emsp;&#125;);
				<br />
				&emsp;&emsp;&#125;);
				<br />
				&#125;;
			</Examples>
			<p>
				Это усложняет отслеживание порядка выполнения операций и усложняет
				отладку и поддержку кода. Callback Hell также иногда называют "пирамидой
				колбэков" или "вложенными колбэками".
			</p>
			<p>
				Для решения проблемы Callback Hell в JavaScript были разработаны
				альтернативные подходы, такие как использование промисов (Promises) и
				синтаксиса async/await, которые делают код более линейным и читаемым,
				устраняя глубокую вложенность колбэк-функций.
			</p>
		</div>
	)
}

export default Question
