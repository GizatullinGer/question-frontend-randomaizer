import React from 'react'
import { Examples } from '../../Examples/Examples'

const Question = () => {
	return (
		<div>
			<p>
				В JavaScript существует несколько способов проверить, является ли
				значение массивом. Вот несколько из них:
			</p>
			<p>
				<ol>
					<li>
						<b>Использование метода Array.isArray(): </b>Это предпочтительный и
						самый надежный способ проверки, так как он специально предназначен
						для определения, является ли значение массивом.
						<Examples>
							const arr = [1, 2, 3];
							<br />
							const notArr = 'Hello';
							<br />
							<br />
							console.log(Array.isArray(arr)); // Output: true
							<br />
							console.log(Array.isArray(notArr)); // Output: false
						</Examples>
					</li>
					<li>
						<b>Проверка с использованием метода instanceof: </b>Можно
						использовать оператор <b>instanceof</b>, чтобы проверить,
						принадлежит ли объект определенному классу (в данном случае -
						массиву <b>Array</b>).
						<Examples>
							const arr = [1, 2, 3];
							<br />
							const notArr = 'Hello';
							<br />
							<br />
							console.log(arr instanceof Array); // Output: true
							<br />
							console.log(notArr instanceof Array); // Output: false
						</Examples>
					</li>
					<li>
						<b>Проверка с помощью метода Object.prototype.toString:</b>Можно
						использовать метод <b>toString</b> для определения типа объекта и
						проверки его на соответствие типу <b>[object Array]</b>.
						<Examples>
							const arr = [1, 2, 3];
							<br />
							const notArr = 'Hello';
							<br />
							<br />
							console.log(Object.prototype.toString.call(arr) === '[object
							Array]'); // Output: true
							<br />
							console.log(Object.prototype.toString.call(notArr) === '[object
							Array]'); // Output: false
						</Examples>
					</li>
				</ol>
			</p>
			<p>
				Рекомендуется использовать метод <b>Array.isArray()</b> для проверки
				массива, так как он является наиболее чистым и надежным способом.
				Однако, для более старых версий JavaScript или в некоторых особых
				случаях, другие способы также могут быть полезны.
			</p>
		</div>
	)
}

export default Question
