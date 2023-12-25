import React from 'react'

const Question = () => {
	return (
		<div>
			<p>
				JavaScript поддерживает как объектно-ориентированное программирование
				(ООП), так и функциональное программирование (ФП). Вот основные различия
				между ними в контексте JavaScript:
			</p>
			<p>
				<ol>
					<li>
						<b>Парадигмы программирования:</b>
						<ul>
							<li>
								<b>ООП: </b>Основано на создании объектов, которые содержат
								свойства и методы. В JavaScript, объекты могут быть созданы с
								помощью классов или функций-конструкторов.
							</li>
							<li>
								<b>ФП: </b>Сосредоточено на функциях как основных строительных
								блоках программы. Функции в JavaScript являются объектами
								первого класса, что означает, что их можно передавать как
								аргументы, возвращать из других функций и присваивать
								переменным.
							</li>
						</ul>
					</li>
					<li>
						<b>Изменчивость (Mutability):</b>
						<ul>
							<li>
								<b>ООП: </b>Объекты могут быть изменены, свойства могут быть
								добавлены, изменены или удалены после их создания.
							</li>
							<li>
								<b>ФП: </b>Стремится к неизменяемости (immutability) данных.
								Ориентирован на создание и использование неизменяемых структур
								данных, что способствует предсказуемости и устойчивости
								программы.
							</li>
						</ul>
					</li>
					<li>
						<b>Состояние и побочные эффекты:</b>
						<ul>
							<li>
								<b>ООП: </b>Обычно работает с изменяемым состоянием объектов.
								Методы объектов могут изменять внутреннее состояние объекта.
							</li>
							<li>
								<b>ФП: </b>Стремится минимизировать изменения состояния и
								побочные эффекты. Функции должны быть без побочных эффектов
								(pure functions), т.е. функции, которые не изменяют состояние и
								всегда возвращают одинаковый результат для одних и тех же
								входных данных.
							</li>
						</ul>
					</li>
					<li>
						<b>Подход к разработке:</b>
						<ul>
							<li>
								<b>ООП: </b>Часто используется для построения и работы с
								объектами, которые могут иметь внутренние свойства и методы для
								работы с данными.
							</li>
							<li>
								<b>ФП: </b>Уделяет внимание комбинированию функций,
								использованию функций высшего порядка, рекурсии и работе с
								неизменяемыми данными.
							</li>
						</ul>
					</li>
					<li>
						<b>Примеры основных концепций:</b>
						<ul>
							<li>
								<b>ООП: </b>Классы, объекты, наследование, инкапсуляция,
								полиморфизм.
							</li>
							<li>
								<b>ФП: </b>Функции высшего порядка, замыкания, каррирование,
								рекурсия.
							</li>
						</ul>
					</li>
				</ol>
			</p>
			<p>
				Обе парадигмы могут использоваться в JavaScript, и часто разработчики
				комбинируют элементы ООП и ФП в своих проектах в зависимости от
				требований задачи, предпочтений и понимания принципов программирования.
			</p>
		</div>
	)
}

export default Question