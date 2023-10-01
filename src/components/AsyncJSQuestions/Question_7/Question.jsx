import React from 'react'
import { Examples } from '../../Examples/Examples'

const Question = () => {
	return (
		<div>
			<p>
				Промисы (Promises) - это асинхронный механизм в JavaScript, который
				позволяет управлять выполнением асинхронных операций. Они представляют
				собой объекты, представляющие результат успешного выполнения или ошибки
				асинхронной операции в будущем.
			</p>
			<p>Промисы имеют три состояния:</p>
			<ol>
				<li>
					<b>Ожидание (Pending): </b>
					Исходное состояние, когда операция выполняется, но результат еще не
					готов.
				</li>
				<li>
					<b>Исполнено (Fulfilled):</b>
					Состояние, которое наступает, когда операция завершается успешно. В
					этом случае промис возвращает значение.
				</li>
				<li>
					<b>Отклонено (Rejected): </b>
					Состояние, которое наступает, когда операция завершается с ошибкой. В
					этом случае промис возвращает объект ошибки
				</li>
			</ol>
			<p>
				Промисы позволяют обрабатывать асинхронный код более удобным способом с
				использованием методов <b>`.then()`</b> и <b>`.catch()`</b>:
			</p>
			<ul>
				<li>
					<b>`.then()`</b>используется для обработки успешного выполнения
					промиса и получения результата.
				</li>
				<li>
					<b>`.catch()`</b>используется для обработки ошибок, которые могут
					возникнуть в промисе.
				</li>
			</ul>
			<p>
				<Examples>
					const promise = new Promise((resolve, reject) =&gt; &#123;
					<br />
					&emsp;&emsp;// Асинхронная операция
					<br />
					&emsp;&emsp;setTimeout(() =&gt; &#123;
					<br />
					&emsp;&emsp;&emsp;&emsp;const randomNumber = Math.random();
					<br />
					&emsp;&emsp;&emsp;&emsp;if (randomNumber &gt; 0.5) &#123;
					<br />
					&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;resolve(randomNumber); // Успешное
					выполнение
					<br />
					&emsp;&emsp;&emsp;&emsp;&#125; else &#123;
					<br />
					&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;reject(new Error('Случилась
					ошибка')); // Ошибка
					<br />
					&emsp;&emsp;&emsp;&emsp;&#125;
					<br />
					&emsp;&emsp;&#125;, 1000);
					<br />
					&#125;);
					<br />
					<br />
					promise
					<br />
					&emsp;&emsp;.then(result =&gt; &#123;
					<br />
					&emsp;&emsp;&emsp;&emsp;console.log('Успешно выполнено:', result);
					<br />
					&emsp;&emsp;&#125;)
					<br />
					&emsp;&emsp;.catch(error =&gt; &#123;
					<br />
					&emsp;&emsp;&emsp;&emsp;console.error('Ошибка:', error);
					<br />
					&emsp;&emsp;&#125;);
					<br />
				</Examples>
			</p>
			<p>
				Промисы позволяют более читаемо и управляемо обрабатывать асинхронные
				операции и избегать "callback hell" (глубокой вложенности колбэков) при
				выполнении множества асинхронных задач.
			</p>
		</div>
	)
}

export default Question
