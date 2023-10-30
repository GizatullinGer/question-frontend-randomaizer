import React from 'react'

import { Examples } from '../../Examples/Examples'

const Question = () => {
	return (
		<div>
			<p>
				TypeScript предоставляет различные типы данных, которые можно
				использовать для переменных, функций и объектов в коде. Вот несколько
				основных типов данных в TypeScript:
			</p>
			<p>
				<ol>
					<li>
						<p>
							<b>number: </b>Для представления чисел, как целых, так и с
							плавающей точкой.
						</p>
						<p>Пример:</p>
						<Examples>let age: number = 30;</Examples>
					</li>
					<li>
						<p>
							<b>string: </b>Для хранения текстовых данных.
						</p>
						<p>Пример:</p>
						<Examples>let name: string = "John";</Examples>
					</li>
					<li>
						<p>
							<b>boolean: </b>Для хранения значения true/false (логических
							значений).
						</p>
						<p>Пример:</p>
						<Examples>let isStudent: boolean = true;</Examples>
					</li>
					<li>
						<p>
							<b>array: </b>Для представления массивов.
						</p>
						<p>Пример:</p>
						<Examples>let numbers: number[] = [1, 2, 3, 4, 5];</Examples>
					</li>
					<li>
						<p>
							<b>tuple: </b>Позволяет создавать массивы фиксированной длины, но
							разных типов данных.
						</p>
						<p>Пример:</p>
						<Examples>let person: [string, number] = ["John", 30];</Examples>
					</li>
					<li>
						<p>
							<b>enum: </b>Для создания пользовательских типов с ограниченным
							набором значений.
						</p>
						<p>Пример:</p>
						<Examples>
							enum Color &#123;
							<br />
							&emsp;&emsp;Red, <br />
							&emsp;&emsp;Green,
							<br />
							&emsp;&emsp;Blue
							<br />
							&#125;
							<br />
							let selectedColor: Color = Color.Red;
						</Examples>
					</li>
					<li>
						<p>
							<b>any: </b>Для обозначения переменной без фиксированного типа.
							Использование <b>any</b> уменьшает преимущества статической
							типизации TypeScript.
						</p>
						<p>Пример:</p>
						<Examples>
							let variable: any = "Hello";
							<br />
							variable = 5; // Присваивание значения другого типа, что допустимо
							для any
						</Examples>
					</li>
					<li>
						<p>
							<b>void: </b>Используется для функций, которые не возвращают
							значение.
						</p>
						<p>Пример:</p>
						<Examples>
							function greet(): void &#123;
							<br />
							&emsp;&emsp;console.log("Hello!");
							<br />
							&#125;
						</Examples>
					</li>
					<li>
						<p>
							<b>null</b> и <b>undefined:</b> Соответствуют значениям null и
							undefined.
						</p>
						<p>Пример:</p>
						<Examples>
							let x: null = null;
							<br />
							let y: undefined = undefined;
						</Examples>
					</li>
				</ol>
			</p>
			<p>
				Помните, что семантика веб-страницы важна для навигации, поиска и
				понимания содержания как людьми, так и машинами. Поэтому удаление
				семантики следует рассматривать как крайнюю меру и использовать
				осторожно.
			</p>
		</div>
	)
}

export default Question
