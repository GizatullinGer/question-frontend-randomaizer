import React from 'react'

const Question = () => {
	return (
		<div>
			<p>
				ARIA (Accessible Rich Internet Applications) - это набор стандартов и
				атрибутов, разработанный с целью улучшения доступности веб-приложений
				для пользователей с ограниченными возможностями. ARIA предоставляет
				дополнительную информацию о структуре и взаимодействии веб-приложений,
				чтобы скринридеры и другие вспомогательные технологии могли правильно
				интерпретировать и взаимодействовать с веб-содержанием. Основное
				предназначение ARIA - это улучшение доступности веб-приложений, которые
				используют технологии, такие как JavaScript, AJAX и другие, которые
				могут создавать динамическое и интерактивное содержание.
			</p>
			<p>
				ARIA включает в себя роли, свойства и состояния, которые могут быть
				применены к элементам HTML, чтобы определить, как они взаимодействуют с
				пользователями и вспомогательными технологиями. Вот некоторые из
				ключевых аспектов ARIA:
			</p>
			<ol>
				<li>
					<b>Роли (Roles): </b>ARIA определяет роли, которые можно назначить
					элементам HTML, чтобы указать их функциональное назначение. Примеры
					ролей включают "button" (кнопка), "link" (ссылка), "menu" (меню) и
					другие. Эти роли помогают скринридерам и другим вспомогательным
					технологиям понять, как взаимодействовать с элементами.
				</li>
				<li>
					<b>Состояния (States): </b>ARIA предоставляет атрибуты, которые
					описывают текущее состояние элементов. Например, атрибут aria-checked
					может указывать, включен ли флажок, а aria-expanded - развернуто ли
					меню.
				</li>
				<li>
					<b>Свойства (Properties): </b>ARIA также включает атрибуты, которые
					предоставляют дополнительную информацию об элементах. Например,
					атрибут aria-label может использоваться для предоставления
					альтернативного текста для элемента, а aria-describedby - для
					связывания элемента с описательным текстом.
				</li>
			</ol>
			<p>
				Использование ARIA важно для создания доступных веб-приложений, особенно
				тех, которые используют сложные интерактивные элементы, динамический
				контент или SPA (Single Page Application). Он помогает сделать
				веб-приложения более понятными и управляемыми для пользователей с
				ограниченными возможностями, такими как слепые и слабовидящие, и
				повышает их доступность.
			</p>
		</div>
	)
}

export default Question
