import React from 'react'
import { Examples } from '../../Examples/Examples'

const Question = () => {
	return (
		<div>
			<p>
				Псевдокласс :invalid в CSS применяется к элементам формы, которые
				содержат недопустимое (неверное) значение ввода в соответствии с их
				атрибутами проверки. Это часто используется совместно с встроенными
				HTML5-атрибутами проверки формы, такими как required, pattern, min, max,
				и другими.
			</p>
			<p>
				Пример использования псевдокласса :invalid с элементом ввода, который
				должен содержать числовое значение в диапазоне от 1 до 100:
			</p>
			<Examples>
				&lt;input type="number" id="userInput" required min="1" max="100"&gt;
			</Examples>
			<Examples>
				#userInput:invalid &#123;
				<br />
				&emsp;&emsp;border: 2px solid red; /* Применение стилей к недопустимому
				(неверному) вводу */
				<br />
				&#125;
			</Examples>
			<p>
				В этом примере, если пользователь вводит значение, которое не
				соответствует указанным критериям (например, пустое поле, текст вместо
				числа, число вне диапазона), то применяются стили, заданные для
				селектора #userInput:invalid.
			</p>
		</div>
	)
}

export default Question
