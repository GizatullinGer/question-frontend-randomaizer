/* eslint-disable react/jsx-no-comment-textnodes */
import React from 'react'
import { Examples } from '../../Examples/Examples'

const Question = () => {
	return (
		<div>
			<p>
				Чтобы удалить обработчик события с DOM-элемента, используйте метод{' '}
				<b>removeEventListener()</b>. Этот метод позволяет удалить ранее
				добавленный обработчик события с элемента. Ниже приведен пример удаления
				обработчика события <b>'click'</b> с элемента:
			</p>
			<Examples>
				// Получаем ссылку на элемент, с которого хотим удалить обработчик
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
				<br />
				<br />
				// Удаляем обработчик события 'click' с элемента
				<br />
				myElement.removeEventListener('click', myEventHandler);
			</Examples>
			<p>В этом примере:</p>
			<p>
				<ul>
					<li>
						<b>myElementId </b>- это идентификатор (ID) элемента, с которого вы
						хотите удалить обработчик события.
					</li>
					<li>
						<b>myEventHandler </b> - это функция-обработчик события, которую вы
						добавили ранее с помощью <b>addEventListener</b>.
					</li>
					<li>
						<b>removeEventListener('click', myEventHandler)</b>- удаляет
						обработчик события <b>'click'</b> с элемента <b>myElement</b>.
					</li>
				</ul>
			</p>
			<p>
				Убедитесь, что функция, которую вы передаете в{' '}
				<b>removeEventListener</b>, совпадает с той функцией, которую вы
				добавили с помощью <b>addEventListener</b>. Это важно, так как удаление
				обработчика должно быть точным соответствием функции-обработчика,
				которая была привязана к событию ранее.
			</p>
		</div>
	)
}

export default Question
