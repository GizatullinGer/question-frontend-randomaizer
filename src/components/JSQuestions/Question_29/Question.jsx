/* eslint-disable react/jsx-no-comment-textnodes */
import React from 'react'
import { Examples } from '../../Examples/Examples'

const Question = () => {
	return (
		<div>
			<p>
				В JavaScript объекты могут быть созданы несколькими способами. Вот
				несколько способов создания объектов:
			</p>
			<p>
				<ol>
					<li>
						<b>Литерал объекта (Object Literal): </b>Самый распространенный
						способ создания объектов. Объект создается при помощи фигурных
						скобок &#123;&#125;.
						<Examples>
							// Создание пустого объекта
							<br />
							const myObj = &#123;&#125;;
							<br />
							<br />
							// Создание объекта с полями
							<br />
							const person = &#123;
							<br />
							&emsp;&emsp;name: 'John',
							<br />
							&emsp;&emsp;age: 30,
							<br />
							&emsp;&emsp;city: 'New York'
							<br />
							&#125;
						</Examples>
					</li>
					<li>
						<b>С помощью конструктора Object(): </b>Объект может быть создан с
						помощью конструктора Object().
						<Examples>
							const myObj = new Object();
							<br />
							myObj.name = 'Alice';
							<br />
							myObj.age = 25;
						</Examples>
					</li>
					<li>
						<b>Создание объекта с помощью функции-конструктора: </b>Можно
						создать объекты, используя пользовательские функции-конструкторы.
						<Examples>
							function Person(name, age, city) &#123;
							<br />
							&emsp;&emsp;this.name = name;
							<br />
							&emsp;&emsp;this.age = age;
							<br />
							&emsp;&emsp;this.city = city;
							<br />
							&#125;
							<br />
							<br />
							const person1 = new Person('Bob', 35, 'London');
						</Examples>
					</li>
					<li>
						<b>Создание объекта с использованием метода Object.create(): </b>
						Этот метод позволяет создавать новые объекты с указанием прототипа.
						<Examples>
							const car = &#123;
							<br />
							&emsp;&emsp;brand: 'Toyota',
							<br />
							&emsp;&emsp;model: 'Corolla',
							<br />
							&emsp;&emsp;year: 2020
							<br />
							&#125;;
							<br />
							<br />
							const myCar = Object.create(car);
							<br />
							myCar.color = 'blue';
						</Examples>
					</li>
					<li>
						<b>С помощью классов (синтаксис ES6): </b>В ES6 и более новых
						версиях JavaScript появился синтаксис классов для создания объектов.
						<Examples>
							class Animal &#123;
							<br />
							&emsp;&emsp;constructor(name, age) &#123;
							<br />
							&emsp;&emsp;&emsp;&emsp;this.name = name;
							<br />
							&emsp;&emsp;&emsp;&emsp;this.age = age;
							<br />
							&emsp;&emsp;&#125;
							<br />
							<br />
							&emsp;&emsp;makeSound() &#123;
							<br />
							&emsp;&emsp;&emsp;&emsp;console.log('Some sound');
							<br />
							&emsp;&emsp;&#125;
							<br />
							&#125;
							<br />
							<br />
							const myPet = new Animal('Dog', 5);
						</Examples>
					</li>
				</ol>
			</p>
			<p>
				Это лишь несколько способов создания объектов в JavaScript. Выбор
				способа создания зависит от конкретных требований и предпочтений
				разработчика.
			</p>
		</div>
	)
}

export default Question
