/* eslint-disable react/jsx-no-comment-textnodes */
import React from 'react'
import { Examples } from '../../Examples/Examples'

const Question = () => {
	return (
		<div>
			<p>
				Метод <b>Array.from()</b> в JavaScript используется для создания нового
				массива из массивоподобных или итерируемых объектов. Он преобразует
				массивоподобные или итерируемые структуры данных в настоящие массивы.
			</p>
			<p>
				Основные ситуации, когда используется <b>Array.from()</b>:
			</p>
			<p>
				<ol>
					<li>
						<b>
							Преобразование массивоподобных или итерируемых объектов в массив:
						</b>
						<p>
							<b>Array.from()</b> может преобразовать строку, объект{' '}
							<b>arguments, Set, Map, TypedArray</b> и другие итерируемые
							структуры данных в массив.
						</p>
						<p>Пример:</p>
						<Examples>
							// Преобразование строки в массив символов
							<br />
							let str = 'Hello';
							<br />
							let charArray = Array.from(str);
							<br />
							console.log(charArray); // Выведет: ['H', 'e', 'l', 'l', 'o']
						</Examples>
					</li>
					<li>
						<b>Использование функции-отображения (map function):</b>
						<p>
							<b>Array.from()</b> позволяет использовать второй аргумент для
							преобразования каждого элемента в массиве во что-то другое с
							помощью переданной функции.
						</p>
						<p>Пример:</p>
						<Examples>
							// Преобразование чисел из массивоподобного объекта в новый
							массив, умножив каждое число на 2<br />
							let arrayLike = &#123; length: 3, 0: 1, 1: 2, 2: 3 &#125;;
							<br />
							let newArray = Array.from(arrayLike, num =&gt; num * 2);
							<br />
							console.log(newArray); // Выведет: [2, 4, 6]
						</Examples>
					</li>
					<li>
						<b>
							Использование объекта-маппера или объекта с методом
							Symbol.iterator:
						</b>
						<p>
							Если объект содержит метод <b>Symbol.iterator</b> (метод для
							итерации по объекту), <b>Array.from()</b> будет использовать этот
							метод для создания массива.
						</p>
						<p>Пример:</p>
						<Examples>
							// Использование объекта-маппера для преобразования массива
							<br />
							let mapper = &#123;
							<br />
							&emsp;&emsp;map: function* () &#123;
							<br />
							&emsp;&emsp;&emsp;&emsp;yield 1;
							<br />
							&emsp;&emsp;&emsp;&emsp;yield 2;
							<br />
							&emsp;&emsp;&emsp;&emsp;yield 3;
							<br />
							&emsp;&emsp;&#125;
							<br />
							&#125;;
							<br />
							<br />
							let newArray = Array.from(mapper.map(), num =&gt; num * 2);
							<br />
							console.log(newArray); // Выведет: [2, 4, 6]
						</Examples>
					</li>
				</ol>
			</p>
			<p>
				<b>Array.from()</b> предоставляет удобный способ преобразовать различные
				структуры данных в массивы, что упрощает работу с данными в JavaScript.
			</p>
		</div>
	)
}

export default Question
