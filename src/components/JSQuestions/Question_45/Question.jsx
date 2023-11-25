import React from 'react'
import { Examples } from '../../Examples/Examples'

const Question = () => {
	return (
		<div>
			<p>
				Методы <b>slice()</b> и <b>splice()</b> являются методами массивов в
				JavaScript, но они имеют различное назначение и поведение.
			</p>
			<p>
				<ol>
					<li>
						<b>Метод slice():</b>
						<ul>
							<li>
								<b>slice()</b> используется для создания нового массива, который
								содержит выбранные элементы из исходного массива.
							</li>
							<li>
								Он не изменяет исходный массив, а возвращает новый массив,
								содержащий копию выбранных элементов.
							</li>
							<li>
								Метод <b>slice()</b> принимает два аргумента: начальный и
								конечный индексы (не включительно). Если аргументы не указаны,
								создается копия полного массива.
							</li>
						</ul>
						Пример <b>slice()</b>:
						<Examples>
							const fruits = ['apple', 'banana', 'orange', 'grape', 'kiwi'];
							<br />
							<br />
							const slicedFruits = fruits.slice(1, 3);
							<br />
							console.log(slicedFruits); // Output: ['banana', 'orange']
							<br />
							console.log(fruits); // Output: ['apple', 'banana', 'orange',
							'grape', 'kiwi'], исходный массив остается неизменным
						</Examples>
					</li>
					<li>
						<b>Метод splice():</b>
						<ul>
							<li>
								<b>splice()</b> используется для изменения содержимого массива
								путем удаления или замены существующих элементов или добавления
								новых элементов.
							</li>
							<li>
								Он изменяет исходный массив и возвращает массив, содержащий
								удаленные элементы.
							</li>
							<li>
								Метод <b>splice()</b> принимает три аргумента: начальный индекс,
								количество элементов для удаления и необязательные элементы,
								которые могут быть вставлены на место удаленных элементов.
							</li>
						</ul>
						Пример <b>splice()</b>:
						<Examples>
							const colors = ['red', 'green', 'blue', 'yellow'];
							<br />
							<br />
							const removedElements = colors.splice(1, 2, 'orange', 'purple');
							<br />
							console.log(removedElements); // Output: ['green', 'blue'],
							удаленные элементы
							<br />
							console.log(colors); // Output: ['red', 'orange', 'purple',
							'yellow'], измененный исходный массив
						</Examples>
					</li>
				</ol>
			</p>
			<p>
				Итак, основное различие между <b>slice()</b> и <b>splice()</b>{' '}
				заключается в их поведении:
			</p>
			<p>
				<ul>
					<li>
						<b>slice()</b> создает копию выбранных элементов в новом массиве, не
						изменяя исходный.
					</li>
					<li>
						<b>splice()</b> изменяет исходный массив путем удаления, замены или
						добавления элементов и возвращает удаленные элементы в новом
						массиве.
					</li>
				</ul>
			</p>
		</div>
	)
}

export default Question
