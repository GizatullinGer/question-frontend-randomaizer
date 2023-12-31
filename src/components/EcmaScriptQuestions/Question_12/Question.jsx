import React from 'react'
import { Examples } from '../../Examples/Examples'

const Question = () => {
	return (
		<div>
			<p>
				Итераторы (Iterators) - это понятие в JavaScript, которое представляет
				собой объект, который предоставляет механизм для последовательного
				перебора элементов в коллекции или структуре данных. Итераторы
				используются во многих встроенных объектах и языковых конструкциях,
				таких как массивы, строки, множества (Set), карты (Map), циклы{' '}
				<b>for...of</b>, и другие.
			</p>
			<p>Итераторы обычно включают два метода:</p>
			<p>
				<ol>
					<li>
						<b>next()</b>: Этот метод возвращает следующий элемент в
						последовательности итерации в виде объекта, содержащего два
						свойства: <b>value</b> (значение текущего элемента) и <b>done</b>{' '}
						(булевое значение, указывающее, завершена ли итерация). Когда{' '}
						<b>done</b> равно <b>true</b>, это означает, что итерация завершена.
					</li>
					<li>
						<b>[Symbol.iterator]</b>: Это специальное свойство объекта, которое
						возвращает сам объект итератора. Это свойство используется
						внутренне, чтобы определить, что объект можно перебирать. Объекты,
						которые имеют это свойство, могут быть использованы в циклах{' '}
						<b>for...of</b>.
					</li>
				</ol>
			</p>
			<p>
				Пример использования итератора в цикле <b>for...of</b>:
			</p>
			<Examples>
				const arr = [1, 2, 3];
				<br />
				const iterator = arr[Symbol.iterator]();
				<br />
				<br />
				for (const value of iterator) &#123;
				<br />
				&emsp;&emsp;console.log(value); // Вывод: 1, 2, 3<br />
				&#125;
			</Examples>
			<p>
				Многие встроенные объекты, такие как массивы, строки и коллекции,
				автоматически предоставляют итераторы, что делает возможным перебор их
				элементов с использованием цикла <b>for...of</b>.
			</p>
			<p>
				Итераторы предоставляют удобный и общий способ перебора элементов в
				различных структурах данных в JavaScript, и они являются важной частью
				языка для работы с последовательностями элементов в коллекциях.
			</p>
		</div>
	)
}

export default Question
