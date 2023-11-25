/* eslint-disable react/jsx-no-comment-textnodes */
import React from 'react'
import { Examples } from '../../Examples/Examples'

const Question = () => {
	return (
		<div>
			<p>
				Существует несколько способов преобразования массива в объект в
				JavaScript. Вот некоторые из них:
			</p>
			<h3>
				1. Использование цикла for...of или forEach() для создания объекта:
			</h3>
			<Examples>
				// Использование цикла for...of
				<br />
				const array = ['a', 'b', 'c'];
				<br />
				let obj = &#123;&#125;;
				<br />
				let i = 0;
				<br />
				for (const element of array) &#123;
				<br />
				&emsp;&emsp;obj[i++] = element;
				<br />
				&#125;
				<br />
				console.log(obj); // Преобразованный объект: &#123; '0': 'a', '1': 'b',
				'2': 'c' &#125;
			</Examples>
			<h3>2. Использование метода reduce() для создания объекта:</h3>
			<Examples>
				const array = ['a', 'b', 'c'];
				<br />
				const obj = array.reduce((acc, cur, index) =&gt; &#123;
				<br />
				&emsp;&emsp;acc[index] = cur;
				<br />
				&emsp;&emsp;return acc;
				<br />
				&#125;, &#123;&#125;);
				<br />
				console.log(obj); // Преобразованный объект: &#123; '0': 'a', '1': 'b',
				'2': 'c' &#125;
			</Examples>
			<h3>3. Использование метода Object.fromEntries() с map():</h3>
			<Examples>
				const array = ['a', 'b', 'c'];
				<br />
				const entries = array.map((value, index) =&gt; [index.toString(),
				value]);
				<br />
				const obj = Object.fromEntries(entries);
				<br />
				console.log(obj); // Преобразованный объект: &#123; '0': 'a', '1': 'b',
				'2': 'c' &#125;
			</Examples>
			<h3>
				4. Использование оператора расширения (spread operator) вместе с
				Object.assign():
			</h3>
			<Examples>
				const array = ['a', 'b', 'c'];
				<br />
				const obj = Object.assign(&#123;&#125;, [...array]);
				<br />
				console.log(obj); // Преобразованный объект: &#123; '0': 'a', '1': 'b',
				'2': 'c' &#125;
			</Examples>
			<h3>
				5. Преобразование массива объектов с ключами key и value в объект:
			</h3>
			<Examples>
				const array = [<br />
				&emsp;&emsp;&#123; key: 'a', value: 1 &#125;,
				<br />
				&emsp;&emsp;&#123; key: 'b', value: 2 &#125;,
				<br />
				&emsp;&emsp;&#123; key: 'c', value: 3 &#125;
				<br />
				];
				<br />
				<br />
				const obj = array.reduce((acc, &#123; key, value &#125;) =&gt; &#123;
				<br />
				&emsp;&emsp;acc[key] = value;
				<br />
				&emsp;&emsp;return acc;
				<br />
				&#125;, &#123;&#125;);
				<br />
				console.log(obj); // Преобразованный объект: &#123; 'a': 1, 'b': 2, 'c':
				3 &#125;
			</Examples>
			<p>
				Эти способы позволяют преобразовать массив в объект, используя различные
				методы JavaScript и итеративные конструкции для создания нового объекта
				на основе значений и индексов/ключей из массива.
			</p>
		</div>
	)
}

export default Question
