import React from 'react'

const Question = () => {
	return (
		<div>
			<p>
				JavaScript предоставляет множество методов для работы с массивами. Вот
				несколько основных методов массивов:
			</p>
			<p>
				<ol>
					<li>
						<b>push(element) и pop(): </b>push() добавляет элемент в конец
						массива, а pop() удаляет и возвращает последний элемент.
					</li>
					<li>
						<b>unshift(element) и shift(): </b>unshift() добавляет элемент в
						начало массива, а shift() удаляет и возвращает первый элемент.
					</li>
					<li>
						<b>concat(...arrays): </b>Объединяет массивы.
					</li>
					<li>
						<b>join(separator): </b>Объединяет все элементы массива в строку с
						указанным разделителем.
					</li>
					<li>
						<b>slice(start, end): </b>Возвращает новый массив, содержащий
						элементы от start до end (не включительно).
					</li>
					<li>
						<b>splice(start, deleteCount, ...items): </b>Изменяет содержимое
						массива, удаляя существующие элементы и/или добавляя новые.
					</li>
					<li>
						<b>indexOf(element) и lastIndexOf(element): </b>Возвращают индекс
						первого (или последнего) вхождения элемента в массиве. Если элемент
						не найден, возвращается -1.
					</li>
					<li>
						<b>forEach(callback): </b>Выполняет указанную функцию один раз для
						каждого элемента массива.
					</li>
					<li>
						<b>map(callback): </b>Создает новый массив с результатами вызова
						указанной функции для каждого элемента.
					</li>
					<li>
						<b>filter(callback): </b>Создает новый массив с элементами, для
						которых функция обратного вызова вернула true.
					</li>
					<li>
						<b>reduce(callback) и reduceRight(callback): </b>Применяют функцию к
						аккумулятору и каждому значению массива (слева направо или справа
						налево) для уменьшения массива до одного значения.
					</li>
					<li>
						<b>find(callback): </b>Возвращает первый элемент массива, который
						удовлетворяет условию, заданному функцией обратного вызова.
					</li>
					<li>
						<b>some(callback) и every(callback): </b>some() возвращает true,
						если хотя бы один элемент удовлетворяет условию, every() возвращает
						true, если все элементы удовлетворяют условию.
					</li>
					<li>
						<b>sort(): </b>Сортирует элементы массива.
					</li>
					<li>
						<b>reverse(): </b>Меняет порядок элементов в массиве на обратный.
					</li>
				</ol>
			</p>
		</div>
	)
}

export default Question
