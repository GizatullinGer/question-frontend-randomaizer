/* eslint-disable react/jsx-no-comment-textnodes */
import React from 'react'
import { Examples } from '../../Examples/Examples'

const Question = () => {
	return (
		<div>
			<p>
				Делегирование событий (Event Delegation) в JavaScript - это паттерн,
				который позволяет обрабатывать события на родительском элементе за счёт
				использования всплытия событий в DOM. Вместо назначения обработчика
				событий на каждый дочерний элемент в иерархии DOM, обработчик
				устанавливается на их общего родителя.
			</p>
			<p>
				Когда происходит событие на дочернем элементе, оно всплывает вверх по
				иерархии DOM и достигает родительского элемента, на котором установлен
				обработчик события. Затем можно определить, какой именно дочерний
				элемент был источником события, обратившись к свойству{' '}
				<b>event.target</b>. Это позволяет обрабатывать события, возникшие на
				дочерних элементах, через общий обработчик, назначенный на родительский
				элемент.
			</p>
			<p>Преимущества делегирования событий:</p>
			<p>
				<ol>
					<li>
						<b>Эффективность и масштабируемость: </b>Назначение обработчика на
						родительский элемент уменьшает количество обработчиков событий, что
						делает код более эффективным и легче масштабируемым, особенно при
						динамическом добавлении или удалении дочерних элементов.
					</li>
					<li>
						<b>Работа с динамическим содержимым: </b>Если содержимое страницы
						генерируется динамически (например, через AJAX-запросы или
						добавление элементов через JavaScript), делегирование событий
						позволяет применять обработчики событий к элементам, которые могут
						быть созданы позже.
					</li>
				</ol>
			</p>
			<p>Пример использования делегирования событий:</p>
			<Examples>
				// Назначаем обработчик клика на родительский элемент
				<br />
				document.getElementById('parentElement').addEventListener('click',
				function(event) &#123;
				<br />
				&emsp;&emsp;// Проверяем целевой элемент, на который кликнули
				<br />
				&emsp;&emsp;if (event.target.matches('.specificChildElement')) &#123;
				<br />
				&emsp;&emsp;&emsp;&emsp;// Действия при клике на определенный дочерний
				элемент
				<br />
				&emsp;&emsp;&emsp;&emsp;console.log('Кликнули на
				.specificChildElement');
				<br />
				&emsp;&emsp;&#125;
				<br />
				&#125;);
			</Examples>
			<p>
				Этот пример демонстрирует, как делегирование событий позволяет
				обрабатывать события клика на определенном дочернем элементе через
				родительский элемент.
			</p>
		</div>
	)
}

export default Question
