import React from 'react'

const Question = () => {
	return (
		<div>
			<p>В JavaScript есть несколько основных типов объектов:</p>
			<p>
				<ol>
					<li>
						<b>Встроенные объекты:</b>
						<ul>
							<li>
								<b>Object: </b>Основной тип объекта в JavaScript.
							</li>
							<li>
								<b>Function: </b>Функции являются объектами.
							</li>
							<li>
								<b>Array: </b>Используется для хранения упорядоченных коллекций
								элементов.
							</li>
							<li>
								<b>String: </b>Используется для работы с текстовыми данными.
							</li>
							<li>
								<b>Number: </b>Для работы с числами.
							</li>
							<li>
								<b>Boolean: </b>Используется для хранения логических значений
								true или false.
							</li>
							<li>
								<b>Date: </b>Позволяет работать с датами и временем.
							</li>
							<li>
								<b>RegExp: </b>Для работы с регулярными выражениями.
							</li>
						</ul>
					</li>
					<li>
						<b>Глобальные объекты:</b>
						<ul>
							<li>
								<b>Math: </b>Предоставляет математические операции и константы.
							</li>
							<li>
								<b>JSON: </b>Используется для работы с данными в формате JSON
								(JavaScript Object Notation).
							</li>
							<li>
								<b>Error: </b>Объекты ошибок, используемые для обработки и
								создания исключений.
							</li>
						</ul>
					</li>
					<li>
						<b>Объекты, созданные пользователем:</b>
						<ul>
							<li>
								Пользователь может создавать свои собственные объекты с помощью
								конструкторов функций или литералов объектов.
							</li>
						</ul>
					</li>
					<li>
						<b>Примитивные типы данных:</b>
						<ul>
							<li>
								Примитивные типы данных, такие как числа, строки, логические
								значения (<b>null</b> и <b>undefined</b>), не являются
								объектами, хотя могут иметь соответствующие объекты-обертки (
								<b>Number</b>, <b>String</b>, <b>Boolean</b>).
							</li>
						</ul>
					</li>
					<li>
						<b>Прочие объекты:</b>
						<ul>
							<li>
								<b>ArrayBuffer, Map, Set, WeakMap, WeakSet: </b>Другие типы
								объектов, предоставляющие различные структуры данных и
								функциональность.
							</li>
						</ul>
					</li>
				</ol>
			</p>
			<p>
				JavaScript является языком со слабой типизацией, и типы данных часто
				автоматически приводятся, что может привести к неожиданным результатам.
			</p>
		</div>
	)
}

export default Question
