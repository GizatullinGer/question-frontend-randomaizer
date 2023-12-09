/* eslint-disable react/jsx-no-comment-textnodes */
import React from 'react'
import { Examples } from '../../Examples/Examples'

const Question = () => {
	return (
		<div>
			<p>
				Метод <b>addEventListener</b> принимает три аргумента:
			</p>
			<p>
				<ol>
					<li>
						<b>Тип события (event type): </b>Первый аргумент - это строка,
						указывающая тип события, на которое вы хотите добавить обработчик.
						Например, <b>'click', 'mouseover', 'keydown'</b>, и так далее.
					</li>
					<li>
						<b>Обработчик события (event listener): </b>Второй аргумент - это
						функция, которая будет вызвана при возникновении указанного события.
						Это может быть анонимная функция или ссылка на уже существующую
						функцию.
					</li>
					<li>
						<b>UseCapture (необязательный): </b>Третий аргумент - это
						опциональный булевый параметр <b>useCapture</b>, который по
						умолчанию имеет значение <b>false</b>. Если он установлен в{' '}
						<b>true</b>, обработчик будет выполнен в фазе погружения (capturing
						phase) вместо фазы всплытия (bubbling phase). Обычно этот аргумент
						остается неопределенным или устанавливается в <b>false</b>, так как
						большинство обработчиков событий привязываются в фазу всплытия.
					</li>
				</ol>
			</p>
			<p>Пример использования addEventListener:</p>
			<Examples>
				document.addEventListener('click', function(event) &#123;
				<br />
				&emsp;&emsp;console.log('Событие click произошло');
				<br />
				&#125;);
				<br />
				<br />
				// Добавление обработчика события с опциональным параметром useCapture
				<br />
				element.addEventListener('mouseover', mouseOverHandler, true);
			</Examples>
			<p>
				Таким образом, у <b>addEventListener</b> три обязательных аргумента: тип
				события, обработчик события и опциональный <b>useCapture</b>.
			</p>
		</div>
	)
}

export default Question
