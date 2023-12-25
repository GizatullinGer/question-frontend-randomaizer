/* eslint-disable react/jsx-no-comment-textnodes */
import React from 'react'
import { Examples } from '../../Examples/Examples'

const Question = () => {
	return (
		<div>
			<p>
				<b>`async/await`</b> - это синтаксический сахар в JavaScript,
				представленный в ECMAScript 2017 (ES8), который упрощает асинхронное
				программирование и управление асинхронным кодом. Этот синтаксический
				сахар основан на промисах (Promises) и делает код более линейным и
				читаемым, избегая глубокой вложенности колбэк-функций (Callback Hell).
			</p>
			<p>
				Основные компоненты <b>`async/await`</b>:
			</p>
			<p>
				<ol>
					<li>
						<b>`async` функции: </b> Вы можете объявить функцию как асинхронную,
						добавив ключевое слово async перед её объявлением. Это говорит
						JavaScript, что функция будет содержать асинхронный код и может
						использовать await для ожидания завершения асинхронных операций.
					</li>
					<li>
						<b>`await` оператор: </b> <b>`await`</b> используется внутри
						асинхронной функции для ожидания выполнения асинхронной операции,
						такой как промис. Когда await используется, выполнение функции
						приостанавливается до тех пор, пока операция не завершится, и затем
						возвращается результат или выбрасывается ошибка, если операция
						завершилась с ошибкой.
					</li>
				</ol>
			</p>
			<p>
				Пример использования <b>`async/await`</b>:
			</p>
			<Examples>
				async function fetchData(url) &#123;
				<br />
				&emsp;&emsp;try &#123;
				<br />
				&emsp;&emsp;&emsp;&emsp;// Ждем завершения асинхронного запроса и
				получаем результат
				<br />
				&emsp;&emsp;&emsp;&emsp;const response = await fetch(url);
				<br />
				&emsp;&emsp;&emsp;&emsp;const data = await response.json();
				<br />
				<br />
				&emsp;&emsp;&emsp;&emsp;// Далее можно обрабатывать данные
				<br />
				&emsp;&emsp;&emsp;&emsp;console.log(data);
				<br />
				&emsp;&emsp;&#125; catch (error) &#123;
				<br />
				&emsp;&emsp;&emsp;&emsp;// Обрабатываем ошибки, если они возникли
				<br />
				&emsp;&emsp;&emsp;&emsp;console.error('Произошла ошибка:', error);
				<br />
				&emsp;&emsp;&#125;
				<br />
				&#125;
				<br />
				<br />
				// Вызываем асинхронную функцию
				<br />
				fetchData('https://example.com/api/data');
			</Examples>
			<p>
				Преимущества <b>`async/await`</b>:
			</p>
			<p>
				<ol>
					<li>
						<b>Читаемость кода: </b> Код становится более линейным и понятным,
						что упрощает его чтение и поддержку.
					</li>
					<li>
						<b>Обработка ошибок: </b> Ошибки обрабатываются с помощью try/catch,
						что делает код более надежным.
					</li>
					<li>
						<b>Устранение "Callback Hell": </b> async/await устраняет глубокую
						вложенность колбэк-функций, что улучшает структуру кода.
					</li>
					<li>
						<b>Интеграция с промисами: </b> async/await легко интегрируется с
						промисами, что позволяет использовать существующий асинхронный код.
					</li>
					<li>
						<b>Легкая отладка: </b> Отладка асинхронного кода становится более
						простой и предсказуемой.
					</li>
				</ol>
			</p>
			<p>
				<b>`async/await`</b> является мощным инструментом для работы с
				асинхронным кодом в современном JavaScript и рекомендуется для
				использования при разработке асинхронных веб-приложений.
			</p>
		</div>
	)
}

export default Question
