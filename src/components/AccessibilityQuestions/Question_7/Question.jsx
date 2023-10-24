import React from 'react'
import { Examples } from '../../Examples/Examples'

const Question = () => {
	return (
		<div>
			<p>
				Цикл <b>for...of</b> используется в JavaScript для итерации по элементам
				итерируемых объектов, таких как массивы, строки, наборы (Set), карты
				(Map), и другие объекты, которые предоставляют итерируемый интерфейс.
				Этот цикл предоставляет простой способ перебора элементов коллекции без
				необходимости вручную управлять индексами или ключами.
			</p>
			<p>
				Вот примеры использования цикла <b>for...of</b>:
			</p>
			<ol>
				<li>
					<p>
						<b>Итерация по массиву: </b>
						<Examples>
							const fruits = ['яблоко', 'банан', 'апельсин'];
							<br />
							<br />
							for (const fruit of fruits) &#123;
							<br />
							&emsp;&emsp;console.log(fruit);
							<br />
							&#125;
						</Examples>
					</p>
					<p>
						Этот код переберет элементы массива fruits и выведет каждый из них.
					</p>
				</li>
				<li>
					<p>
						<b>Итерация по строке:</b>
						<Examples>
							const message = 'Привет, мир!';
							<br />
							<br />
							for (const char of message) &#123;
							<br />
							&emsp;&emsp;console.log(char);
							<br />
							&#125;
						</Examples>
					</p>
					<p>
						Здесь мы перебираем символы в строке <b>message</b>.
					</p>
				</li>
				<li>
					<p>
						<b>Итерация по набору (Set):</b>
						<Examples>
							const mySet = new Set([1, 2, 3, 4, 5]);
							<br />
							<br />
							for (const item of mySet) &#123;
							<br />
							&emsp;&emsp;console.log(item);
							<br />
							&#125;
						</Examples>
					</p>
					<p>
						<b>for...of</b> также работает с наборами (Set) и позволяет
						перебирать уникальные элементы.
					</p>
				</li>
				<li>
					<p>
						<b>Итерация по карте (Map):</b>
						<Examples>
							const myMap = new Map([
							<br />
							&emsp;&emsp;['name', 'John'],
							<br />
							&emsp;&emsp;['age', 30]
							<br />
							]);
							<br />
							<br />
							for (const [key, value] of myMap) &#123;
							<br />
							&emsp;&emsp;console.log(key, value);
							<br />
							&#125;
						</Examples>
					</p>
					<p>Здесь мы перебираем ключи и значения в карте (Map).</p>
				</li>
			</ol>
			<p>
				<b>for...of</b> делает код более читаемым и упрощает процесс перебора
				элементов в сравнении с использованием традиционных циклов <b>for</b>,
				которые требуют работу с индексами или ключами.
			</p>
		</div>
	)
}

export default Question
