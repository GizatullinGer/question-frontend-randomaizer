import React from 'react'
import { Examples } from '../../Examples/Examples'

const Question = () => {
	return (
		<div>
			<p>
				<b>NaN</b> расшифровывается как "Not a Number" (не число) и представляет
				собой специальное значение в JavaScript, которое указывает на нечисловое
				значение. Оно возвращается в результате операции, которая ожидает
				числовое значение, но не может вернуть корректный числовой результат.
			</p>
			<p>
				Для проверки, является ли значение <b>NaN</b>, используется функция{' '}
				<b>isNaN()</b>. Однако, стоит отметить, что <b>isNaN()</b> имеет
				некоторые особенности:
			</p>
			<p>
				<ul>
					<li>
						<b>isNaN() </b>пытается преобразовать переданное значение в число
						перед проверкой. Если значение не может быть преобразовано в число,
						isNaN() вернет true.
					</li>
					<li>
						Он также вернет <b>true</b>, если переданное значение является{' '}
						<b>NaN</b>.
					</li>
				</ul>
			</p>
			<p>
				Примеры использования <b>isNaN()</b>:
				<Examples>
					console.log(isNaN(NaN)); // Output: true
					<br />
					console.log(isNaN(123)); // Output: false
					<br />
					console.log(isNaN('abc')); // Output: true, так как 'abc' не является
					числом
					<br />
					console.log(isNaN('123')); // Output: false, '123' можно преобразовать
					в число
					<br />
					console.log(isNaN(undefined)); // Output: true, т.к. undefined не
					может быть преобразовано в число
				</Examples>
			</p>
			<p>
				Для более точной проверки на <b>NaN</b> можно использовать метод{' '}
				<b>Number.isNaN()</b>, который не пытается преобразовать переданное
				значение в число:
			</p>
			<Examples>
				console.log(Number.isNaN(NaN)); // Output: true
				<br />
				console.log(Number.isNaN('abc')); // Output: false, 'abc' не является
				NaN, так как не число
				<br />
				console.log(Number.isNaN(undefined)); // Output: false, undefined не
				является NaN
			</Examples>
			<p>
				Это более строгий способ проверки на <b>NaN</b>, который вернет{' '}
				<b>true</b> только в случае передачи реального <b>NaN</b>.
			</p>
		</div>
	)
}

export default Question
