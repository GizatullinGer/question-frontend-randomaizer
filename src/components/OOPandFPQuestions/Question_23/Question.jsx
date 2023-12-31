import React from 'react'

const Question = () => {
	return (
		<div>
			<p>
				Паттерн проектирования (или шаблон проектирования) - это повторяемое
				решение для типичных проблем в проектировании программного обеспечения.
				Это архитектурный рецепт, предоставляющий проверенное и оптимальное
				решение для конкретной задачи или проблемы.
			</p>
			<p>
				Каждый паттерн проектирования описывает проблему, которая может
				возникнуть в контексте разработки программного обеспечения, и предлагает
				общепринятое решение для этой проблемы. Он включает в себя набор правил
				и структурных элементов, которые могут быть использованы для создания
				эффективного и гибкого кода.
			</p>
			<p>Основные принципы паттернов проектирования:</p>
			<p>
				<ol>
					<li>
						<b>Решение типичных проблем: </b>Паттерны проектирования предлагают
						решения для часто встречающихся проблем в разработке программного
						обеспечения.
					</li>
					<li>
						<b>Примеры языков: </b>JavaScript
					</li>
					<li>
						<b>Документированное решение: </b>Они описаны и задокументированы,
						чтобы разработчики могли легко применять их в своих проектах.
					</li>
					<li>
						<b>Проверенные методы: </b>Паттерны проектирования основаны на опыте
						и проверенных методах решения проблем.
					</li>
					<li>
						<b>Универсальность: </b>Они являются универсальными и могут быть
						применены к различным типам задач и языков программирования.
					</li>
					<li>
						<b>Руководство для архитектуры: </b>Паттерны помогают создавать
						гибкую и расширяемую архитектуру программного обеспечения.
					</li>
				</ol>
			</p>
			<p>Некоторые из наиболее известных паттернов проектирования включают:</p>
			<p>
				<ul>
					<li>
						<b>Фабрика (Factory): </b>Создает экземпляры объектов без указания
						их конкретных классов.
					</li>
					<li>
						<b>Стратегия (Strategy): </b>Позволяет выбирать алгоритм из набора
						алгоритмов на лету.
					</li>
					<li>
						<b>Наблюдатель (Observer): </b>Определяет зависимость типа
						"один-ко-многим" между объектами таким образом, что если один объект
						меняется, все зависящие от него объекты уведомляются об изменениях.
					</li>
					<li>
						<b>Одиночка (Singleton): </b>Гарантирует, что у класса есть только
						один экземпляр и предоставляет глобальную точку доступа к этому
						экземпляру.
					</li>
				</ul>
			</p>
			<p>
				Использование паттернов проектирования помогает разработчикам создавать
				более чистый, модульный и легко поддерживаемый код. Они представляют
				собой ценный инструмент в арсенале программиста для решения типичных
				проблем, с которыми они сталкиваются при проектировании программного
				обеспечения.
			</p>
		</div>
	)
}

export default Question
