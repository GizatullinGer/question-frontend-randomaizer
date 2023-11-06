/* eslint-disable react/jsx-no-comment-textnodes */
import React from 'react'
import { Examples } from '../../Examples/Examples'

const Question = () => {
	return (
		<div>
			<p>
				JavaScript не имеет встроенной поддержки абстрактных классов, но можно
				эмулировать поведение абстрактных классов. Обычно это достигается путем
				создания базового класса с методами, которые должны быть реализованы в
				подклассах.
			</p>
			<p>Вот пример эмуляции абстрактного класса:</p>
			<Examples>
				// Создаем "абстрактный" класс
				<br />
				class AbstractShape &#123;
				<br />
				&emsp;&emsp;constructor() &#123;
				<br />
				&emsp;&emsp;&emsp;&emsp;if (new.target === AbstractShape) &#123;
				<br />
				&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;throw new Error("Abstract classes
				cannot be instantiated.");
				<br />
				&emsp;&emsp;&emsp;&emsp;&#125;
				<br />
				&emsp;&emsp;&#125;
				<br />
				<br />
				&emsp;&emsp;// Абстрактный метод, который должен быть реализован в
				подклассах
				<br />
				&emsp;&emsp;draw() &#123;
				<br />
				&emsp;&emsp;&emsp;&emsp;throw new Error("Method 'draw' must be
				implemented.");
				<br />
				&emsp;&emsp;&#125;
				<br />
				&#125;
				<br />
				<br />
				// Класс-наследник, который расширяет абстрактный класс
				<br />
				class Circle extends AbstractShape &#123;
				<br />
				&emsp;&emsp;constructor(radius) &#123;
				<br />
				&emsp;&emsp;&emsp;&emsp;super();
				<br />
				&emsp;&emsp;&emsp;&emsp;this.radius = radius;
				<br />
				&emsp;&emsp;&#125;
				<br />
				<br />
				&emsp;&emsp;// Реализация абстрактного метода
				<br />
				&emsp;&emsp;draw() &#123;
				<br />
				&emsp;&emsp;&emsp;&emsp;console.log(`Drawing a circle with radius $
				&#123;this.radius&#125;`);
				<br />
				&emsp;&emsp;&#125;
				<br />
				&#125;
				<br />
				<br />
				// Использование класса Circle
				<br />
				const circle = new Circle(5);
				<br />
				circle.draw(); // Выведет: "Drawing a circle with radius 5"
			</Examples>
			<p>
				В этом примере <b>AbstractShape</b> выступает в качестве "абстрактного"
				класса. Подкласс <b>Circle</b> наследует <b>AbstractShape</b> и
				реализует абстрактный метод <b>draw</b>. Если попытаться создать
				экземпляр <b>AbstractShape</b>, код вызовет ошибку, так как абстрактный
				класс не может быть инстанциирован напрямую. Это позволяет обеспечить,
				что подклассы должны реализовать методы, определенные в абстрактном
				классе.
			</p>
			<p>
				Хотя JavaScript не имеет специального синтаксиса для абстрактных
				классов, такой подход позволяет эмулировать их поведение, обеспечивая
				структуру для создания и использования абстрактных классов.
			</p>
		</div>
	)
}

export default Question
