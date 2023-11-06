import React from 'react'

const Question = () => {
	return (
		<div>
			<p>
				GOF паттерны (или паттерны "Банды четырех") относятся к набору
				популярных паттернов проектирования, описанных в книге "Design Patterns:
				Elements of Reusable Object-Oriented Software" ("Паттерны
				проектирования: элементы повторного использования
				объектно-ориентированного программного обеспечения"), написанной "Бандой
				четырех" (Gang of Four). "Банда четырех" - это группа из четырех
				авторитетных программистов и авторов этой книги:
			</p>
			<p>
				<ol>
					<li>Эрих Гамма,</li>
					<li>Ричард Хелм,</li>
					<li>Ральф Джонсон,</li>
					<li>Джон Влиссидес.</li>
				</ol>
			</p>
			<p>
				Книга содержит 23 различных паттерна проектирования, разделенных на три
				основные категории: порождающие, структурные и поведенческие. Они
				представляют собой проверенные и широко используемые методы для решения
				типичных проблем в проектировании программного обеспечения.
			</p>
			<p>Примеры некоторых паттернов из "Банды четырех" включают:</p>
			<p>
				<ul>
					<li>
						<b>Фабричный метод (Factory Method): </b>Определяет интерфейс для
						создания объектов, но оставляет подклассам решение о том, какой
						класс инстанцировать.
					</li>
					<li>
						<b>Одиночка (Singleton): </b>Гарантирует, что у класса есть только
						один экземпляр, и предоставляет глобальную точку доступа к этому
						экземпляру.
					</li>
					<li>
						<b>Наблюдатель (Observer): </b>Определяет зависимость типа
						"один-ко-многим" между объектами таким образом, что если один объект
						меняется, все зависящие от него объекты уведомляются об изменениях.
					</li>
				</ul>
			</p>
			<p>
				Эти паттерны описывают лучшие практики в объектно-ориентированном
				программировании и являются основой для разработки эффективного, гибкого
				и легко поддерживаемого кода. Понимание и применение GOF паттернов
				помогает разработчикам создавать решения, которые могут быть
				масштабируемыми и переиспользуемыми.
			</p>
		</div>
	)
}

export default Question
