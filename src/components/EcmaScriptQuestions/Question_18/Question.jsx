import React from 'react'
import { Examples } from '../../Examples/Examples'

const Question = () => {
	return (
		<div>
			<p>
				Методы <b>.keys()</b>, <b>.values()</b> и <b>.entries()</b> являются
				методами, предоставляемыми объектами <b>Map</b> в JavaScript для доступа
				к ключам, значениям и записям (пары ключ-значение) в коллекциях. Эти
				методы также могут быть использованы для перебора элементов в объектах{' '}
				<b>Map</b>.
			</p>
			<p>
				<ol>
					<li>
						<b>Map.keys():</b>
						<ul>
							<li>
								Метод <b>.keys()</b> используется для получения всех ключей
								(ключевых элементов) из объекта <b>Map</b>.
							</li>
							<li>
								Возвращает итератор, который может быть использован для перебора
								ключей.
							</li>
						</ul>
						<p>Пример:</p>
						<Examples>
							const myMap = new Map();
							<br />
							myMap.set('name', 'John');
							<br />
							myMap.set('age', 30);
							<br />
							<br />
							const keys = myMap.keys();
							<br />
							for (const key of keys) &#123;
							<br />
							&emsp;&emsp;console.log(key); // Вывод: 'name', 'age'
							<br />
							&#125;
						</Examples>
					</li>
					<li>
						<b>Map.values()</b>
						<ul>
							<li>
								Метод <b>.values()</b> используется для получения всех значений
								из объекта Map.
							</li>
							<li>
								Возвращает итератор, который может быть использован для перебора
								значений.
							</li>
						</ul>
						<p>Пример:</p>
						<Examples>
							const myMap = new Map();
							<br />
							myMap.set('name', 'John');
							<br />
							myMap.set('age', 30);
							<br />
							<br />
							const values = myMap.values();
							<br />
							for (const value of values) &#123;
							<br />
							&emsp;&emsp;console.log(value); // Вывод: 'John', 30
							<br />
							&#125;
						</Examples>
					</li>
					<li>
						<b>Map.entries()</b>
						<ul>
							<li>
								Метод <b>.entries()</b> используется для получения всех записей
								(пар ключ-значение) из объекта <b>Map</b>.
							</li>
							<li>
								Возвращает итератор, который может быть использован для перебора
								записей.
							</li>
							<li>
								Каждая запись представлена в виде массива{' '}
								<b>[ключ, значение]</b>.
							</li>
						</ul>
						<p>Пример:</p>
						<Examples>
							const myMap = new Map();
							<br />
							myMap.set('name', 'John');
							<br />
							myMap.set('age', 30);
							<br />
							<br />
							const entries = myMap.entries();
							<br />
							for (const entry of entries) &#123;
							<br />
							&emsp;&emsp;console.log(entry); // Вывод: ['name', 'John'],
							['age', 30]
							<br />
							&#125;
						</Examples>
					</li>
				</ol>
			</p>
			<p>
				Эти методы полезны при работе с коллекциями, когда вам нужно получить
				ключи, значения и записи для дальнейшей обработки или перебора.
			</p>
		</div>
	)
}

export default Question
