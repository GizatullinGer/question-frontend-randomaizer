import React from 'react'

const Question = () => {
	return (
		<div>
			<p>
				JavaScript предоставляет множество методов для работы со строками. Вот
				несколько основных методов строк:
			</p>
			<p>
				<ol>
					<li>
						<b>length: </b>Возвращает длину строки.
					</li>
					<li>
						<b>charAt(index): </b>Возвращает символ строки по указанному
						индексу.
					</li>
					<li>
						<b>concat(...strings): </b>Объединяет строки.
					</li>
					<li>
						<b>indexOf(substring) и lastIndexOf(substring): </b>Возвращают
						индекс первого (или последнего) вхождения подстроки в строке. Если
						подстрока не найдена, возвращается -1.
					</li>
					<li>
						<b>slice(start, end): </b>Возвращает подстроку от start до end (не
						включительно).
					</li>
					<li>
						<b>substring(start, end): </b>То же, что и slice(), но не
						поддерживает отрицательные индексы.
					</li>
					<li>
						<b>toUpperCase() и toLowerCase(): </b>Преобразуют строку в верхний
						или нижний регистр.
					</li>
					<li>
						<b>replace(searchValue, replaceValue): </b>Заменяет часть строки на
						другую строку.
					</li>
					<li>
						<b>trim(): </b>Удаляет пробельные символы в начале и в конце строки.
					</li>
				</ol>
			</p>
		</div>
	)
}

export default Question
