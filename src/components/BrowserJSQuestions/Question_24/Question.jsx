/* eslint-disable react/jsx-no-comment-textnodes */
import React from 'react'
import { Examples } from '../../Examples/Examples'

const Question = () => {
	return (
		<div>
			<p>
				Чтобы узнать, был ли вызван метод <b>event.preventDefault()</b> в
				обработчике события, вы можете проверить свойство{' '}
				<b>defaultPrevented</b> объекта события (<b>event</b>). Это свойство
				возвращает логическое значение (<b>true</b> или <b>false</b>),
				указывающее, было ли предотвращено стандартное действие события.
			</p>
			<p>Пример:</p>
			<Examples>
				let link = document.getElementById('myLink');
				<br />
				<br />
				link.addEventListener('click', function(event) &#123;
				<br />
				&emsp;&emsp;if (event.defaultPrevented) &#123;
				<br />
				&emsp;&emsp;&emsp;&emsp;console.log('Метод event.preventDefault() был
				вызван');
				<br />
				&emsp;&emsp;&#125; else &#123;
				<br />
				&emsp;&emsp;&emsp;&emsp;console.log('Метод event.preventDefault() НЕ был
				вызван');
				<br />
				&emsp;&emsp;&#125;
				<br />
				&#125;);
				<br />
				<br />
				// Функция, которая вызывает event.preventDefault()
				<br />
				function handleClick(event) &#123;
				<br />
				&emsp;&emsp;event.preventDefault();
				<br />
				&#125;
				<br />
				<br />
				// Вызов функции handleClick() по клику на ссылку
				<br />
				link.addEventListener('click', handleClick);
			</Examples>
			<p>
				При выполнении кода, если метод <b>event.preventDefault()</b> был вызван
				в обработчике события <b>click</b>, то вывод будет: "Метод
				event.preventDefault() был вызван". Если метод не был вызван, то будет
				выведено: "Метод event.preventDefault() НЕ был вызван".
			</p>
			<p>
				Обратите внимание, что это свойство <b>defaultPrevented</b> показывает
				только факт вызова метода <b>event.preventDefault()</b> в обработчике
				события. Оно не предоставляет информации о том, было ли стандартное
				действие события фактически предотвращено успешно (например, ссылка не
				была переходом).
			</p>
		</div>
	)
}

export default Question
