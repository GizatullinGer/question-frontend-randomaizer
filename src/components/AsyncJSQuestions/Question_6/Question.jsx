/* eslint-disable react/jsx-no-comment-textnodes */
import React from 'react'

import { Examples } from '../../Examples/Examples'

const Question = () => {
	return (
		<div>
			<p>
				<b>queueMicrotask</b> - это функция, введенная в JavaScript для
				постановки микрозадачи (microtask) в очередь событий. Она предоставляет
				способ добавить функцию в очередь микрозадач с высоким приоритетом, что
				позволяет ей выполниться как можно скорее, после завершения текущей
				операции.
			</p>
			<p>
				Основные характеристики <b>queueMicrotask:</b>
			</p>
			<p>
				<ol>
					<li>
						<b>Приоритет микрозадачи: </b>
						Как упоминалось ранее, микрозадачи имеют более высокий приоритет
						выполнения по сравнению с макрозадачами. Использование{' '}
						<b>queueMicrotask</b> позволяет вам запланировать выполнение функции
						в микрозадаче, что гарантирует, что она будет выполнена как можно
						скорее после завершения текущей выполненной микрозадачи.
					</li>
					<li>
						<b>Применение:</b>
						<b>queueMicrotask</b> часто используется для выполнения функций,
						которые должны быть выполнены сразу после завершения текущего стека
						вызовов и перед тем, как браузер начнет перерисовку (rendering) или
						другие асинхронные операции. Это полезно, например, для обновления
						состояния приложения в ответ на изменения данных или для обработки
						обещаний (promises) и других асинхронных операций.
					</li>
				</ol>
			</p>
			<p>Пример использования queueMicrotask:</p>
			<Examples>
				function myMicrotaskFunction() &#123;
				<br />
				&emsp;&emsp;console.log("Микрозадача выполнена");
				<br /> &#125;
				<br />
				<br /> // Используем queueMicrotask для постановки функции в очередь
				микрозадач
				<br />
				queueMicrotask(myMicrotaskFunction);
				<br />
				<br /> console.log("Конец текущей операции");
			</Examples>
			<p>
				В этом примере <b>myMicrotaskFunction</b> будет добавлена в очередь
				микрозадачи и выполнится сразу после завершения текущей операции (после
				вывода "Конец текущей операции").
			</p>
			<p>
				Важно отметить, что <b>queueMicrotask</b> поддерживается современными
				браузерами и средами выполнения JavaScript, и он предоставляет удобный
				способ для выполнения функций в контексте микрозадач с высоким
				приоритетом.
			</p>
		</div>
	)
}

export default Question
