/* eslint-disable react/jsx-no-comment-textnodes */
import React from 'react'
import { Examples } from '../../Examples/Examples'

const Question = () => {
	return (
		<div>
			<p>
				В JavaScript для генерации случайного числа можно использовать метод{' '}
				<b>Math.random()</b>.
			</p>
			<p>
				<ol>
					<li>
						<b>Метод Math.random():</b>
						<p>
							Метод <b>Math.random()</b> возвращает псевдослучайное число в
							диапазоне от 0 (включительно) до 1 (исключительно).
						</p>
						<p>Пример генерации случайного числа от 0 до 1:</p>
						<Examples>
							let randomNumber = Math.random();
							<br />
							console.log(randomNumber); // Выведет случайное число от 0 до 1
						</Examples>
					</li>
					<li>
						<b>Генерация случайного числа в определенном диапазоне:</b>
						<p>
							Чтобы получить случайное число в определенном диапазоне (например,
							от минимального до максимального значения), можно использовать{' '}
							<b>Math.random()</b> вместе с математическими операциями.
						</p>
						<p>
							Пример генерации случайного целого числа в заданном диапазоне:
						</p>
						<Examples>
							// Генерация случайного целого числа от min (включительно) до max
							(исключительно)
							<br />
							function getRandomInt(min, max) &#123;
							<br />
							&emsp;&emsp;return Math.floor(Math.random() * (max - min)) + min;
							<br />
							&#125;
							<br />
							<br />
							let randomInt = getRandomInt(1, 10);
							<br />
							console.log(randomInt); // Выведет случайное целое число от 1 до 9
						</Examples>
						Этот код генерирует случайное целое число от <b>min</b>{' '}
						(включительно) до <b>max</b> (исключительно) с помощью{' '}
						<b>Math.random()</b>, <b>Math.floor()</b> и арифметических операций.
					</li>
				</ol>
			</p>
			<p>
				Важно отметить, что метод <b>Math.random()</b> генерирует числа, которые
				можно считать псевдослучайными, потому что они основаны на алгоритме и
				не являются истинно случайными.
			</p>
		</div>
	)
}

export default Question
