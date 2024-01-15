import React from 'react'

const Question = () => {
	return (
		<div>
			<p>
				События указателя (Pointer Events) - это API браузера, предназначенное
				для обработки взаимодействия с указателями устройства, такими как мышь,
				сенсорные экраны, стилусы и другие входные устройства, которые могут
				давать информацию о точке контакта на экране.
			</p>
			<p>
				<b>Обычный addEventListener</b>
			</p>
			<p>
				Это API включает в себя различные события, связанные с указателями,
				такие как pointerdown, pointerup, pointermove и другие, которые
				соответствуют различным состояниям взаимодействия указателя с
				устройством.
			</p>
			<p>Преимущества использования событий указателя:</p>
			<ol>
				<li>
					<b>Унификация взаимодействия: </b>Эти события объединяют в себе
					функциональность событий мыши, сенсорных экранов и других указателей,
					обеспечивая единый интерфейс для обработки взаимодействия с различными
					типами устройств.
				</li>
				<li>
					<b>Поддержка мультитач: </b>Они также поддерживают мультитач, позволяя
					отслеживать несколько указателей одновременно.
				</li>
				<li>
					<b>Легкая настройка: </b>API предоставляет возможности для работы с
					дополнительной информацией о событиях, такой как координаты указателя,
					давление, тип устройства и т.д.
				</li>
			</ol>
		</div>
	)
}

export default Question