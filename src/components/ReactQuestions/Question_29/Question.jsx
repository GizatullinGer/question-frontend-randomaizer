import React from 'react'
import { Examples } from '../../Examples/Examples'

const Question = () => {
	return (
		<div>
			<p>
				"Опрос" (Polling) - это метод, при котором клиентский код (например,
				веб-приложение) периодически отправляет запросы на сервер, чтобы
				получить обновленную информацию. Этот метод полезен, когда необходимо
				получать обновленные данные с сервера, не дожидаясь каких-либо событий
				или действий со стороны пользователя.
			</p>
			<h3>Реализация опроса в React:</h3>
			<ol>
				<li>
					С использованием <b>setInterval()</b>:
					<Examples>
						import React, &#123; useState, useEffect &#125; from 'react';
						<br />
						<br />
						const PollingComponent = () ={'>'} &#123;
						<br />
						&emsp;&emsp;const [data, setData] = useState(null);
						<br />
						<br />
						&emsp;&emsp;useEffect(() ={'>'} &#123;
						<br />
						&emsp;&emsp;&emsp;&emsp;const fetchData = async () ={'>'} &#123;
						<br />
						&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;// Здесь отправляется запрос на
						сервер для получения данных
						<br />
						&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;const response = await
						fetch('URL_ДЛЯ_ОПРОСА_ДАННЫХ');
						<br />
						&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;const result = await
						response.json();
						<br />
						&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;setData(result);
						<br />
						&emsp;&emsp;&emsp;&emsp;&#125;;
						<br />
						<br />
						&emsp;&emsp;&emsp;&emsp;const intervalId = setInterval(fetchData,
						5000); // Опрос каждые 5 секунд (5000 мс)
						<br />
						<br />
						&emsp;&emsp;&emsp;&emsp;// Остановка опроса при размонтировании
						компонента
						<br />
						&emsp;&emsp;&emsp;&emsp;return () ={'>'} clearInterval(intervalId);
						<br />
						&emsp;&emsp;&#125;, []); // [] - указывает на то, что useEffect
						будет вызван только один раз при монтировании компонента
						<br />
						<br />
						&emsp;&emsp;return (<br />
						&emsp;&emsp;&emsp;&emsp;{'<'}div{'>'}
						<br />
						&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&#123;/* Ваше отображение данных
						*/&#125;
						<br />
						&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&#123;data && (<br />
						&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;{'<'}ul{'>'}
						<br />
						&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&#123;data.map(item
						={'>'} (<br />
						&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
						{'<'}li key=&#123;item.id&#125;{'>'}&#123;item.name&#125;{'<'}/li
						{'>'}
						<br />
						&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;))&#125;
						<br />
						&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;{'<'}/ul{'>'}
						<br />
						&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;)&#125;
						<br />
						&emsp;&emsp;&emsp;&emsp;{'<'}/div{'>'}
						<br />
						&emsp;&emsp;);
						<br />
						&#125;;
						<br />
						<br />
						export default PollingComponent;
					</Examples>
					<p>
						Это пример компонента React, который использует <b>useEffect()</b> и{' '}
						<b>setInterval()</b> для выполнения опроса сервера каждые 5 секунд и
						обновления данных на основе полученных результатов.
					</p>
				</li>
				<li>
					С использованием библиотеки <b>react-query</b>: <br />
					Библиотека react-query предоставляет простой способ управления
					запросами к серверу, включая опрос данных. Она обеспечивает удобное
					кэширование данных, обработку ошибок и автоматическое обновление
					данных по расписанию.
				</li>
			</ol>
			<p>
				Каждый из этих способов позволяет осуществлять опрос сервера для
				получения обновленных данных в React.Выбор между использованием
				setInterval() и библиотеки react-query зависит от ваших предпочтений и
				специфики проекта.
			</p>
		</div>
	)
}

export default Question
