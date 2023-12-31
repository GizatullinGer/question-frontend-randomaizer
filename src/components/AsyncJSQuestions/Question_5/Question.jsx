import React from 'react'

const Question = () => {
	return (
		<div>
			<p>
				Микрозадачи (microtasks) и макрозадачи (macrotasks) - это два типа
				задач, которые могут быть добавлены в очередь событий (event queue) и
				обработаны в цикле событий (event loop) в JavaScript. Они имеют разные
				приоритеты и порядок выполнения. Вот основные различия между ними:
			</p>
			<p>
				<ol>
					<li>
						<b>Приоритет выполнения:</b>
						<p>
							<ul>
								<li>
									<b>Микрозадачи (Microtasks): </b>Микрозадачи имеют более
									высокий приоритет выполнения по сравнению с макрозадачами. Это
									означает, что они будут выполняться важнее и раньше, чем
									макрозадачи.
								</li>
								<li>
									<b>Макрозадачи (Macrotasks): </b>Макрозадачи имеют более
									низкий приоритет и выполняются после завершения выполнения
									текущей микрозадачи и других микрозадач в очереди.
								</li>
							</ul>
						</p>
					</li>
					<li>
						<b>Примеры:</b>
						<p>
							<ul>
								<li>
									<b>Микрозадачи (Microtasks): </b>Примерами микрозадач являются
									обещания (promises), обработчики событий (event handlers) и
									методы process.nextTick в Node.js.
								</li>
								<li>
									<b>Макрозадачи (Macrotasks): </b>Примерами макрозадач являются
									таймеры (setTimeout, setInterval), запросы к серверу (AJAX),
									обработка событий DOM (например, клики), и выполнение скриптов
									внешних ресурсов, таких как изображения или стили.
								</li>
							</ul>
						</p>
					</li>
					<li>
						<b>Порядок выполнения:</b>
						<p>
							<ul>
								<li>
									<b>Микрозадачи (Microtasks): </b>Микрозадачи обрабатываются
									строго в порядке добавления в очередь. Это означает, что
									первая добавленная микрозадача будет выполнена первой, и так
									далее.
								</li>
								<li>
									<b>Макрозадачи (Macrotasks): </b>Порядок выполнения макрозадач
									зависит от их типа и приоритета. Они могут быть выполнены в
									порядке добавления в очередь, но могут быть отложены, если
									есть активные микрозадачи в очереди.
								</li>
							</ul>
						</p>
					</li>
					<li>
						<b>Использование:</b>
						<p>
							<ul>
								<li>
									<b>Микрозадачи (Microtasks): </b>Микрозадачи полезны для
									выполнения задач, которые должны быть выполнены как можно
									скорее, и их результаты могут повлиять на текущее состояние
									приложения.
								</li>
								<li>
									<b>Макрозадачи (Macrotasks): </b>Макрозадачи используются для
									планирования действий, которые могут быть выполнены с
									некоторой задержкой (например, анимации, таймеры) или после
									завершения текущего выполнения стека вызовов.
								</li>
							</ul>
						</p>
					</li>
				</ol>
			</p>
			<p>
				Понимание разницы между микро и макрозадачами в цикле событий важно для
				понимания асинхронного выполнения кода и управления временем выполнения
				в JavaScript.
			</p>
		</div>
	)
}

export default Question
