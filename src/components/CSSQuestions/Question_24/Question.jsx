import React from 'react'
import { Examples } from '../../Examples/Examples'

const Question = () => {
	return (
		<div>
			<p>
				CSS-функция <b>attr()</b> используется для встраивания значения атрибута
				HTML-элемента непосредственно в стиль элемента. Она позволяет
				использовать значение атрибута в качестве части стилевого правила.
				Функция <b>attr()</b> имеет следующий синтаксис:
			</p>
			<Examples>
				element::before &#123; <br />
				&emsp;&emsp;content: attr(attribute);
				<br />
				&#125;
			</Examples>
			<p>
				где <b>element</b> - это HTML-элемент, а <b>attribute</b> - имя атрибута
				этого элемента.
			</p>
			<p>
				Пример использования <b>attr()</b> для встраивания значения атрибута{' '}
				<b>data-text</b> в контент псевдоэлемента <b>::before</b>:
			</p>
			<Examples>
				&lt;div data-text="Пример"&gt;Этот текст не виден&lt;/div&gt;
			</Examples>
			<Examples>
				div::before &#123;
				<br />
				&emsp;&emsp;content: attr(data-text);
				<br />
				&emsp;&emsp;color: red; /* Дополнительные стили */
				<br />
				&#125;
			</Examples>
			<p>
				В результате визуализации этого кода, текст "Пример" будет отображаться
				перед текстом внутри &lt;div&gt; блока.
			</p>
			<p>
				Эта техника часто используется для динамического встраивания содержимого
				атрибутов в стили, что может быть полезно при создании интерфейсов,
				основанных на данными из атрибутов HTML.
			</p>
		</div>
	)
}

export default Question
