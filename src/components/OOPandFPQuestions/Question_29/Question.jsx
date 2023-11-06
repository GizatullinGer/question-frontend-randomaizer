/* eslint-disable react/jsx-no-comment-textnodes */
import React from 'react'
import { Examples } from '../../Examples/Examples'

const Question = () => {
	return (
		<div>
			<p>
				Механизм прототипов в JavaScript обеспечивает основу для наследования и
				организации объектов. В JavaScript все объекты имеют прототип, который
				является ссылкой на другой объект. Этот прототип используется для
				наследования свойств и методов.
			</p>
			<h3>Как работает механизм прототипов:</h3>
			<p>
				<ol>
					<li>
						<b>[[Prototype]]: </b>Каждый объект в JavaScript имеет специальное
						внутреннее свойство <b>[[Prototype]]</b> (в некоторых стандартах оно
						называется <b>__proto__</b>), которое указывает на прототип этого
						объекта.
					</li>
					<li>
						<b>Наследование: </b>Когда JavaScript ищет свойство или метод в
						объекте, и если оно не найдено, поиск будет продолжен в прототипе
						этого объекта (цепочка прототипов). Если свойство не найдено в
						прототипе, поиск продолжится в его прототипе и так далее, пока не
						будет найдено свойство или будет достигнут корень цепочки прототипов
						(обычно это объект <b>Object.prototype</b>).
					</li>
					<li>
						<b>Object.prototype: Object.prototype </b>является вершиной цепочки
						прототипов. Он содержит общие методы и свойства, доступные для всех
						объектов, такие как <b>toString()</b>, <b>hasOwnProperty()</b>, и
						другие.
					</li>
				</ol>
			</p>
			<p>Пример:</p>
			<Examples>
				// Создаем объект
				<br />
				const person = &#123;
				<br />
				&emsp;&emsp;name: 'Alice',
				<br />
				&emsp;&emsp;age: 30,
				<br />
				&#125;;
				<br />
				<br />
				// Выводим свойства объекта person
				<br />
				console.log(person.name); // Выведет: "Alice"
				<br />
				console.log(person.age); // Выведет: 30
				<br />
				<br />
				// Добавляем метод через прототип
				<br />
				Object.prototype.greeting = function() &#123;
				<br />
				&emsp;&emsp;console.log(`Hello, my name is $&#123;this.name&#125; and I
				am $&#123;this.age&#125; years old.`);
				<br />
				&#125;;
				<br />
				<br />
				// Вызываем метод, определенный в прототипе
				<br />
				person.greeting(); // Выведет: "Hello, my name is Alice and I am 30
				years old."
			</Examples>
			<p>
				Цепочка прототипов позволяет объектам в JavaScript наследовать методы и
				свойства из других объектов. Этот механизм очень мощен и используется
				для реализации наследования и организации объектов в JavaScript.
			</p>
		</div>
	)
}

export default Question
