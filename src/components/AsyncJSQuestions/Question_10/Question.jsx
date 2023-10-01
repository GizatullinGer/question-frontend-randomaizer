import React from 'react'

const Question = () => {
	return (
		<div>
			<p>
				Использование промисов вместо колбэк-функций при работе с асинхронным
				кодом предоставляет несколько преимуществ:
			</p>
			<p>
				<ol>
					<li>
						<b>Читаемость кода:</b>
						Промисы делают код более читаемым и легко понимаемым. Вместо
						вложенных колбэков (так называемого "callback hell") код
						структурируется с использованием методов .then() и .catch(), что
						делает его более линейным и понятным.
					</li>
					<li>
						<b>Обработка ошибок: </b>
						Промисы предоставляют отдельный механизм для обработки ошибок с
						использованием метода .catch(). Это делает код более надежным и
						удобным для обнаружения и обработки ошибок.
					</li>
					<li>
						<b>Цепочки промисов: </b>
						Промисы позволяют создавать цепочки асинхронных операций с помощью
						методов .then(), что упрощает последовательное выполнение нескольких
						асинхронных задач.
					</li>
					<li>
						<b>Параллельное выполнение задач: </b>
						Промисы позволяют использовать метод .all(), который позволяет
						выполнить несколько асинхронных операций параллельно и дождаться их
						завершения.
					</li>
					<li>
						<b>Прозрачность кода: </b>
						Промисы делают видимыми цепочки асинхронных операций и их
						зависимости, что упрощает отладку и поддержку кода.
					</li>
					<li>
						<b>Избегание "callback hell": </b>
						Избегание глубокой вложенности колбэк-функций упрощает разработку и
						поддержку кода, делая его более читаемым и модульным.
					</li>
					<li>
						<b>Легкая конвертация колбэков: </b>
						Промисы позволяют легко обернуть существующий колбэк-код в промис с
						помощью Promise.resolve() или создать промис, который выполнится при
						вызове колбэк-функции.
					</li>
					<li>
						<b>Совместимость с Async/await: </b>
						Промисы хорошо интегрируются с синтаксисом async/await, что упрощает
						асинхронное программирование и делает код более линейным и читаемым.
					</li>
				</ol>
			</p>
			<p>
				Хотя промисы обладают множеством преимуществ, важно помнить, что они не
				являются исключительным решением для работы с асинхронным кодом.
				Например, в некоторых случаях, особенно в сложных потоках данных,
				библиотеки, такие как RxJS с использованием Observables, могут
				предоставить более мощные инструменты для управления асинхронными
				операциями.
			</p>
		</div>
	)
}

export default Question
