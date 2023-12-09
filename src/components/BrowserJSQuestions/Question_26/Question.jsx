/* eslint-disable react/jsx-no-comment-textnodes */
import React from 'react'

import { Examples } from '../../Examples/Examples'

const Question = () => {
	return (
		<div>
			<p>
				Метод <b>focus()</b> используется для установки фокуса на определенный
				элемент на веб-странице. Когда элемент получает фокус, он становится
				активным и может принимать пользовательский ввод, такой как ввод текста
				с клавиатуры.
			</p>
			<p>Основные цели использования focus():</p>
			<p>
				<ol>
					<li>
						<b>Управление фокусом элементов: </b>Вы можете программно
						устанавливать фокус на элемент, что полезно, когда нужно сделать
						определенный элемент активным при определенных условиях или
						событиях.
					</li>
					<li>
						<b>Улучшение удобства использования (usability): </b>Установка
						фокуса на нужный элемент может улучшить удобство использования
						вашего веб-сайта или приложения. Например, при загрузке страницы
						фокус можно установить на поле ввода для удобства пользователей.
					</li>
				</ol>
			</p>
			<p>
				Пример использования <b>focus()</b> для установки фокуса на элементе:
			</p>
			<Examples>
				let inputField = document.getElementById('myInput');
				<br />
				<br />
				// Установка фокуса на поле ввода при загрузке страницы
				<br />
				window.addEventListener('load', function() &#123;
				<br />
				&emsp;&emsp;inputField.focus();
				<br />
				&#125;);
				<br />
				<br />
				// Программное установление фокуса на поле ввода по определенному
				событию или условию
				<br />
				// Например, по клику на кнопку или после определенных действий
				пользователя
				<br />
				document.getElementById('myButton').addEventListener('click', function()
				&#123;
				<br />
				&emsp;&emsp;inputField.focus();
				<br />
				&#125;);
			</Examples>
			<p>
				Этот метод полезен для улучшения интерактивности веб-страницы или
				веб-приложения, упрощая навигацию и взаимодействие пользователя с
				элементами страницы.
			</p>
		</div>
	)
}

export default Question
