import React from 'react'
import { Examples } from '../../Examples/Examples'

const Question = () => {
	return (
		<div>
			<p>
				В JavaScript существует несколько типов таймеров, которые позволяют
				выполнять определенные действия через заданный интервал времени. Эти
				таймеры полезны для выполнения асинхронных операций, анимаций, обработки
				задержек и других задач. Вот некоторые из основных типов таймеров:
			</p>
			<ol>
				<li>
					<b>setTimeout: </b>
					<p>
						Функция setTimeout используется для запуска выполнения функции или
						кода один раз через определенное время (задержку). Время задержки
						указывается в миллисекундах.
					</p>
					<Examples>
						setTimeout(function() &#123;
						<br />
						&emsp;&emsp;console.log("Этот код выполнится через 2000 миллисекунд
						(2 секунды).");
						<br />
						&#125;, 2000);
					</Examples>
				</li>
				<li>
					<b>setInterval: </b>
					<p>
						Функция setInterval позволяет выполнять функцию или код периодически
						через заданный интервал времени. Интервал также указывается в
						миллисекундах.
					</p>
					<Examples>
						setInterval(function() &#123;
						<br />
						&emsp;&emsp;console.log("Этот код будет выполняться каждые 1000
						миллисекунд (1 секунда).");
						<br />
						&#125;, 1000);
					</Examples>
				</li>
				<li>
					<b>requestAnimationFrame: </b>
					<p>
						Функция requestAnimationFrame используется для создания анимаций и
						выполнения кода перед следующей перерисовкой веб-страницы. Она
						обычно используется для создания более плавных анимаций, так как она
						синхронизируется с обновлениями кадров браузера.
					</p>
					<Examples>
						function animate() &#123;
						<br />
						&emsp;&emsp;// Ваш код анимации здесь
						<br />
						&emsp;&emsp;requestAnimationFrame(animate);
						<br />
						&#125;
						<br />
						animate(); // Запуск анимации
					</Examples>
				</li>
				<li>
					<b>clearTimeout и clearInterval: </b>
					<p>
						Функции clearTimeout и clearInterval используются для остановки
						выполнения таймеров, созданных с помощью setTimeout и setInterval.
					</p>
					<Examples>
						const timeoutId = setTimeout(function() &#123;
						<br />
						&emsp;&emsp;console.log("Этот код не выполнится.");
						<br />
						&#125;, 2000);
						<br />
						clearTimeout(timeoutId); // Остановка таймера
					</Examples>
				</li>
			</ol>
		</div>
	)
}

export default Question
