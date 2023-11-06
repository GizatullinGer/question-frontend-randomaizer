/* eslint-disable react/jsx-no-comment-textnodes */
import React from 'react'
import { Examples } from '../../Examples/Examples'

const Question = () => {
	return (
		<div>
			<p>
				Полиморфизм - это концепция объектно-ориентированного программирования,
				которая позволяет объектам разных типов обрабатываться как объекты
				одного и того же базового типа. Полиморфизм позволяет использовать один
				интерфейс для обработки различных типов данных.
			</p>
			<p>Существуют различные виды полиморфизма:</p>
			<h3>
				1. Полиморфизм во время выполнения (Run-time Polymorphism) или Позднее
				связывание (Late Binding):
			</h3>
			<ul>
				<li>
					<b>Виртуальные методы: </b>Этот тип полиморфизма связан с
					использованием виртуальных методов в объектно-ориентированных языках
					программирования. Он позволяет вызывать методы подкласса через ссылку
					на суперкласс, и при выполнении кода определяется соответствующая
					реализация этого метода.
				</li>
				<li>
					Пример:
					<Examples>
						// Виртуальные методы через наследование
						<br />
						class Shape &#123;
						<br />
						&emsp;&emsp;draw() &#123;
						<br />
						&emsp;&emsp;&emsp;&emsp;console.log("Drawing a shape");
						<br />
						&emsp;&emsp;&#125;
						<br />
						&#125;
						<br />
						<br />
						class Circle extends Shape &#123;
						<br />
						&emsp;&emsp;draw() &#123;
						<br />
						&emsp;&emsp;&emsp;&emsp;console.log("Drawing a circle");
						<br />
						&emsp;&emsp;&#125;
						<br />
						&#125;
						<br />
						<br />
						class Square extends Shape &#123;
						<br />
						&emsp;&emsp;draw() &#123;
						<br />
						&emsp;&emsp;&emsp;&emsp;console.log("Drawing a square");
						<br />
						&emsp;&emsp;&#125;
						<br />
						&#125;
						<br />
						<br />
						const circle = new Circle();
						<br />
						const square = new Square();
						<br />
						<br />
						circle.draw(); // Выведет: "Drawing a circle"
						<br />
						square.draw(); // Выведет: "Drawing a square"
					</Examples>
					В этом примере метод draw() переопределен в классах-наследниках Circle
					и Square, и при вызове метода для каждого объекта вызывается
					соответствующая реализация метода.
				</li>
			</ul>
			<h3>
				2. Полиморфизм во время компиляции (Compile-time Polymorphism) или
				Раннее связывание (Early Binding):
			</h3>
			<ul>
				<li>
					<b>Перегрузка методов (Method Overloading): </b>Возможность
					использовать несколько методов с одинаковым именем в одном классе, но
					с разными параметрами.
				</li>
				<li>
					Пример:
					<Examples>
						function add(a, b) &#123;
						<br />
						&emsp;&emsp;return a + b;
						<br />
						&#125;
						<br />
						<br />
						add(5, 10); // Вызывает функцию для сложения чисел
						<br />
						add('Hello ', 'world'); // Вызывает функцию для конкатенации строк
					</Examples>
					Здесь функция add используется для сложения чисел и для конкатенации
					строк, в зависимости от типа переданных аргументов.
				</li>
			</ul>
			<h3>3. Параметрический полиморфизм (Parametric Polymorphism):</h3>
			<ul>
				<li>
					<b>Шаблоны (Generics): </b>Позволяют писать код, который работает с
					абстракциями типов данных.
				</li>
				<li>
					Пример:
					<Examples>
						// Шаблоны функций (Generics)
						<br />
						function printArray(arr) &#123;
						<br />
						&emsp;&emsp;for (let i = 0; i &lt; arr.length; i++) &#123;
						<br />
						&emsp;&emsp;&emsp;&emsp;console.log(arr[i]);
						<br />
						&emsp;&emsp;&#125;
						<br />
						&#125;
						<br />
						<br />
						const numbers = [1, 2, 3];
						<br />
						const names = ['Alice', 'Bob', 'Charlie'];
						<br />
						<br />
						printArray(numbers); // Выводит элементы числового массива
						<br />
						printArray(names); // Выводит элементы массива строк
					</Examples>
					Функция printArray принимает массив любого типа данных и выводит его
					содержимое, что является примером параметрического полиморфизма в
					JavaScript.
				</li>
			</ul>
		</div>
	)
}

export default Question
