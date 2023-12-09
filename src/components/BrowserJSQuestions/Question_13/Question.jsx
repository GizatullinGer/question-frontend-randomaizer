import React from 'react'
import { Examples } from '../../Examples/Examples'

const Question = () => {
	return (
		<div>
			<p>
				В браузере координаты обычно используются для определения положения
				элементов на странице и для отслеживания позиции курсора мыши. Основные
				системы координат, используемые в браузере, включают экранные
				координаты, клиентские координаты и координаты относительно документа.
			</p>
			<p>
				<ol>
					<li>
						<b>Экранные координаты (Screen Coordinates): </b>Это абсолютные
						координаты относительно всего экрана монитора. Они измеряются от
						верхнего левого угла монитора. Но в большинстве случаев они
						используются нечасто, так как не учитывают прокрутку страницы.
					</li>
					<li>
						<b>Клиентские координаты (Client Coordinates): </b>Они относятся к
						координатам относительно верхнего левого угла видимой области
						браузера (viewport). Они полезны при определении положения курсора
						мыши или клика по отношению к окну браузера.
					</li>
					<li>
						<b>Координаты относительно документа (Document Coordinates): </b>Это
						координаты элемента относительно верхнего левого угла документа. Они
						учитывают прокрутку страницы и полезны при определении положения
						элемента на странице относительно других элементов.
					</li>
				</ol>
			</p>
			<p>
				Обычно используются события мыши, такие как <b>mousemove</b>,{' '}
				<b>click</b>, <b>mouseover</b>, чтобы отслеживать положение курсора мыши
				в клиентской системе координат и определять, находится ли он над
				определенным элементом.
			</p>
			<p>
				Для получения координат в JavaScript, можно использовать свойства
				события мыши, такие как <b>clientX, clientY, pageX, pageY,</b> которые
				предоставляют координаты курсора мыши относительно окна браузера или
				документа.
			</p>
			<p>Например:</p>
			<Examples>
				document.addEventListener('mousemove', function(event) &#123;
				<br />
				&emsp;&emsp;// Клиентские координаты
				<br />
				&emsp;&emsp;console.log('Client X:', event.clientX, 'Client Y:',
				event.clientY);
				<br />
				<br />
				&emsp;&emsp;// Координаты относительно документа
				<br />
				&emsp;&emsp;console.log('Page X:', event.pageX, 'Page Y:', event.pageY);
				<br />
				&#125;);
			</Examples>
			<p>
				Это позволяет отслеживать положение курсора мыши и использовать эти
				координаты для различных задач веб-разработки, таких как анимации,
				взаимодействие с элементами и т.д.
			</p>
		</div>
	)
}

export default Question
