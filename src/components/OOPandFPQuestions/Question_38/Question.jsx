import React from 'react'

const Question = () => {
	return (
		<div>
			<p>
				Процедурное программирование и функциональное программирование - это две
				различные парадигмы программирования, которые отличаются по подходам к
				написанию кода и обработке данных.
			</p>
			<h3>Процедурное программирование:</h3>
			<p>
				<ol>
					<li>
						<b>Основной элемент: </b>Программирование основано на использовании
						процедур, функций или подпрограмм.
					</li>
					<li>
						<b>Изменяемое состояние: </b>Программы могут изменять общее
						состояние и имеют переменные, которые могут изменяться во время
						выполнения.
					</li>
					<li>
						<b>Способ работы: </b>Фокус на последовательности шагов для
						выполнения задачи.
					</li>
					<li>
						<b>Побочные эффекты: </b>Процедурное программирование допускает
						побочные эффекты, которые могут влиять на состояние программы или
						среды выполнения.
					</li>
					<li>
						<b>Примеры языков: </b>С, Pascal, Basic.
					</li>
				</ol>
			</p>
			<h3>Функциональное программирование:</h3>
			<p>
				<ol>
					<li>
						<b>Основной элемент: </b>Программирование основано на функциях.
					</li>
					<li>
						<b>Неизменяемое состояние: </b>Данные являются неизменяемыми
						(immutable), и функции не изменяют состояние программы.
					</li>
					<li>
						<b>Фокус на вычислениях: </b>Функциональное программирование
						фокусируется на результате вычислений, а не на последовательности
						шагов.
					</li>
					<li>
						<b>Отсутствие побочных эффектов: </b>Побочные эффекты
						минимизированы, и функции стремятся быть "чистыми", без изменения
						состояния программы или среды.
					</li>
					<li>
						<b>Примеры языков: </b>Haskell, Lisp, Erlang, JavaScript (возможно
						использование функциональных концепций).
					</li>
				</ol>
			</p>
			<h3>Основные различия:</h3>
			<p>
				<ul>
					<li>
						<b>Состояние: </b>Процедурное программирование допускает изменение
						состояния программы, в то время как функциональное программирование
						обычно предпочитает неизменяемые структуры данных.
					</li>
					<li>
						<b>Функции: </b>В функциональном программировании функции являются
						основным строительным блоком и обычно не имеют побочных эффектов, в
						то время как в процедурном программировании функции используются для
						выполнения задач в последовательности.
					</li>
				</ul>
			</p>
			<p>
				Выбор между процедурным и функциональным подходами зависит от конкретных
				требований проекта, предпочтений разработчика и контекста использования
				программы.
			</p>
		</div>
	)
}

export default Question