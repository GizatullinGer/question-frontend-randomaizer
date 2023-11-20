import React from 'react'
import { Examples } from '../../Examples/Examples'

const Question = () => {
	return (
		<div>
			<p>
				В JavaScript <b>arguments</b> - это специальная переменная, доступная
				внутри функций, которая представляет собой объект, похожий на массив
				(псевдомассив), содержащий все аргументы, переданные функции при вызове.
			</p>
			<p>
				<b>arguments</b> содержит все переданные аргументы в виде списка, даже
				если они не были объявлены как параметры функции.
			</p>
			<p>
				Пример использования <b>arguments</b>:
			</p>
			<Examples>
				function example(a, b, c) &#123;
				<br />
				&emsp;&emsp;console.log(arguments); // Псевдомассив, содержащий
				переданные аргументы
				<br />
				&#125;
				<br />
				<br />
				example(1, 2, 3, 4);
			</Examples>
			<p>
				Особенности <b>arguments</b>:
			</p>
			<p>
				<ul>
					<li>
						<b>arguments</b> не является настоящим массивом, хотя похож на
						массив: у него есть числовые индексы и свойство <b>length</b>, но
						отсутствуют методы массивов, такие как <b>forEach</b>, <b>map</b>,{' '}
						<b>slice</b> и другие.
					</li>
					<li>
						<b>arguments</b> автоматически создается при вызове функции и
						содержит все переданные ей аргументы, независимо от объявленных
						параметров функции.
					</li>
					<li>
						Можно обращаться к аргументам через индекс <b>arguments[индекс]</b>{' '}
						или использовать цикл для перебора всех аргументов.
					</li>
				</ul>
			</p>
			<p>
				Пример использования <b>arguments</b> для суммирования всех переданных
				аргументов в функцию:
			</p>
			<Examples>
				function sum() &#123;
				<br />
				&emsp;&emsp;let total = 0;
				<br />
				&emsp;&emsp;for (let i = 0; i &lt; arguments.length; i++) &#123;
				<br />
				&emsp;&emsp;&emsp;&emsp;total += arguments[i];
				<br />
				&emsp;&emsp;&#125;
				<br />
				&emsp;&emsp;return total;
				<br />
				&#125;
				<br />
				<br />
				console.log(sum(1, 2, 3)); // Output: 6<br />
				console.log(sum(5, 10, 15, 20)); // Output: 50
			</Examples>
			<p>
				Хотя <b>arguments</b> всё ещё поддерживается в JavaScript, использование
				его вместо более современных конструкций, таких как оператор расширения
				... (rest parameters) или метод <b>Array.from()</b>, не рекомендуется
				из-за ограниченной функциональности и возможных проблем с
				производительностью.
			</p>
		</div>
	)
}

export default Question
