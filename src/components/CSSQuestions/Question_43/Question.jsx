import React from 'react'

const Question = () => {
	return (
		<div>
			<p>
				<b>Плюсы методологии БЭМ (Блок-Элемент-Модификатор):</b>
			</p>
			<p>
				<ol>
					<li>
						<b>Структурированность и Читаемость: </b>БЭМ способствует
						структурированному и понятному коду, делая его легким для понимания
						другими разработчиками.
					</li>
					<li>
						<b>Масштабируемость: </b>Методология разработана с учетом
						масштабируемости проектов. Компонентный подход упрощает добавление и
						изменение функциональности.
					</li>
					<li>
						<b>Переиспользование Компонентов: </b>Благодаря четкому определению
						блоков и элементов, компоненты легко переиспользуются в различных
						частях проекта.
					</li>
					<li>
						<b>Понятные Названия: </b>Именование классов в соответствии с БЭМ
						делает их осмысленными и понятными, что улучшает коммуникацию в
						команде разработки.
					</li>
					<li>
						<b>Изоляция Стилей: </b>Стили блока не затрагивают стили других
						блоков, благодаря чему избегаются конфликты и нежелательное
						переопределение стилей.
					</li>
					<li>
						<b>Автоматизация: </b>Существует множество инструментов и
						препроцессоров, поддерживающих БЭМ, что упрощает автоматизацию и
						оптимизацию стилей.
					</li>
					<li>
						<b>Простота Тестирования: </b>Из-за изоляции стилей и четкой
						структуры, тестирование блоков и их модификаций происходит более
						просто.
					</li>
				</ol>
			</p>
			<p>
				<b>Минусы методологии БЭМ:</b>
			</p>
			<p>
				<ol>
					<li>
						<b>Лишний Объем Кода: </b>Некоторые разработчики считают, что
						использование БЭМ может привести к избыточному объему кода из-за
						длинных имен классов.
					</li>
					<li>
						<b>Комплексность Именования: </b>В некоторых случаях именование
						классов может стать слишком сложным, особенно в глубоко вложенных
						элементах.
					</li>
					<li>
						<b>Избыточность в Простых Проектах: </b>В небольших проектах или
						простых веб-сайтах применение БЭМ может показаться избыточным и
						усложнить разработку.
					</li>
					<li>
						<b>Начальная Крутизна Кривой Обучения: </b>Для новых разработчиков
						БЭМ может показаться сложной в начале из-за уникальных правил
						именования.
					</li>
					<li>
						<b>Поддержка и Адаптация: </b>В некоторых средах разработки или для
						некоторых инструментов поддержка БЭМ может быть ограниченной.
					</li>
					<li>
						<b>Неочевидность Взаимосвязей: </b>В глубоко вложенных структурах
						классов может стать трудно понять взаимосвязи между элементами и
						блоками.
					</li>
					<li>
						<b>Изменение Стилей в Языке HTML: </b>В классическом подходе БЭМ,
						для изменения стилей элементов часто приходится изменять HTML, что
						нарушает разделение стилей и разметки.
					</li>
				</ol>
			</p>
			<p>
				Все эти плюсы и минусы зависят от конкретных потребностей проекта, опыта
				команды разработки и предпочтений разработчиков. Каждая методология
				имеет свои сильные и слабые стороны, и выбор зависит от контекста и
				целей проекта.
			</p>
		</div>
	)
}

export default Question
