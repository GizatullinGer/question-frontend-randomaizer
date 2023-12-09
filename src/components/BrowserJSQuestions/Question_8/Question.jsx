/* eslint-disable react/jsx-no-comment-textnodes */
import React from 'react'
import { Examples } from '../../Examples/Examples'

const Question = () => {
	return (
		<div>
			<p>
				Чтобы добавить обработчик события на DOM-элемент, используйте метод{' '}
				<b>addEventListener()</b>. Этот метод позволяет добавить функцию
				обработчика для определенного события на элементе. Вот пример:
			</p>
			<Examples>
				// Получаем ссылку на элемент, к которому хотим добавить обработчик
				<br />
				let myElement = document.getElementById('myElementId');
				<br />
				<br />
				// Создаем функцию-обработчик события
				<br />
				function myEventHandler(event) &#123;
				<br />
				&emsp;&emsp;// Ваш код обработки события здесь
				<br />
				&emsp;&emsp;console.log('Событие произошло!', event);
				<br />
				&#125;
				<br />
				<br />
				// Добавляем обработчик события 'click' на элемент
				<br />
				myElement.addEventListener('click', myEventHandler);
			</Examples>
			<p>В этом примере:</p>
			<p>
				<ul>
					<li>
						<b>myElementId </b>- это идентификатор (ID) элемента, к которому вы
						хотите привязать обработчик события.
					</li>
					<li>
						<b>myEventHandler </b>- это функция, которая будет вызываться при
						событии <b>'click'</b>.
					</li>
					<li>
						<b>addEventListener('click', myEventHandler) </b>- добавляет
						обработчик события <b>'click'</b> на элемент <b>myElement</b>.
					</li>
				</ul>
			</p>
			<p>
				Когда происходит событие <b>'click'</b> на <b>myElement</b>, вызывается
				функция <b>myEventHandler</b>.
			</p>
			<p>
				Метод <b>addEventListener()</b> также может использоваться для других
				событий, перечисленных ранее (например, <b>'mouseover'</b>,{' '}
				<b>'keydown'</b>, <b>'submit'</b> и т.д.). Вторым параметром этого
				метода передается функция-обработчик, которая будет выполнена, когда
				событие произойдет на указанном элементе.
			</p>
		</div>
	)
}

export default Question
