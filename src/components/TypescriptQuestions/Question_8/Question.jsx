import React from 'react'
import { Examples } from '../../Examples/Examples'

const Question = () => {
	return (
		<div>
			<p>
				Да, TypeScript поддерживает концепцию перегрузки функций, что позволяет
				определять несколько версий функции с различными сигнатурами в
				зависимости от переданных аргументов.
			</p>
			<p>
				Этот атрибут предназначен для уточнения роли элемента в случаях, когда
				стандартные роли, заданные атрибутом <b>role</b>, могут вызвать
				недопонимание или не содержат достаточно информации о функциональном
				назначении элемента. <b>aria-roledescription</b> предоставляет краткое
				описание роли, которое помогает пользователю или скринридеру лучше
				понять, что делает элемент.
			</p>
			<p>
				Перегрузка функций в TypeScript позволяет создавать несколько
				определений одной функции с разными параметрами и возвращаемыми
				значениями. При вызове такой функции TypeScript будет определять, какая
				из перегрузок должна быть использована, основываясь на типах и
				количестве переданных аргументов.
			</p>
			<p>Вот пример использования перегрузки функций в TypeScript:</p>
			<Examples>
				function display(val: number): void;
				<br />
				function display(val: string): void;
				<br />
				function display(val: any): void &#123;
				<br />
				&emsp;&emsp;console.log(`Value is: $&#123;val&#125;`);
				<br />
				&#125;
				<br />
				<br />
				display(10); // Вызов первой перегрузки
				<br />
				display("Hello"); // Вызов второй перегрузки
			</Examples>
			<p>
				В этом примере мы определяем три версии функции display. Первые две
				версии (перегрузки) указывают на то, какие типы данных могут быть
				переданы функции. Третья версия функции - это реальная реализация
				функции, которая принимает аргумент любого типа.
			</p>
			<p>
				TypeScript будет автоматически выбирать правильную версию функции
				display на основе переданных аргументов.
			</p>
			<p>
				Использование перегрузок функций может сделать код более читаемым и
				понятным, обеспечивая более строгую типизацию и помогая разработчикам
				понимать, какие типы данных могут быть переданы в функцию и какая логика
				должна быть применена.
			</p>
		</div>
	)
}

export default Question
