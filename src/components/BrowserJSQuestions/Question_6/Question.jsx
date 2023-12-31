import React from 'react'

const Question = () => {
	return (
		<div>
			<p>
				BOM расшифровывается как Browser Object Model (Объектная модель
				браузера). BOM представляет собой интерфейс, предоставляемый браузером
				для взаимодействия с окном браузера, его компонентами и другими внешними
				элементами, за исключением документа (который обрабатывается с помощью
				DOM).
			</p>
			<p>Основные компоненты BOM включают в себя:</p>
			<p>
				<ol>
					<li>
						<b>Window Object (Объект Window): </b>Главный объект в BOM,
						представляющий окно браузера. Он содержит свойства и методы для
						управления окном браузера, такие как размер окна, открытие новых
						окон, управление историей браузера (<b>history</b>), таймеры (
						<b>setTimeout, setInterval</b>) и многое другое.
					</li>
					<li>
						<b>Navigator Object (Объект Navigator):</b>Предоставляет информацию
						о браузере пользователя, такую как его название, версия,
						поддерживаемые технологии и так далее.
					</li>
					<li>
						<b>Screen Object (Объект Screen): </b>Предоставляет информацию о
						параметрах экрана пользователя, таких как размер, разрешение,
						цветовая глубина и другие характеристики.
					</li>
					<li>
						<b>Location Object (Объект Location): </b>Представляет текущий
						URL-адрес документа и предоставляет интерфейс для его изменения.
					</li>
					<li>
						<b>History Object (Объект History): </b>Предоставляет возможность
						управления историей браузера, такой как переход назад или вперед по
						истории посещенных страниц.
					</li>
					<li>
						<b>Cookies: </b>Хотя не является частью BOM, управление cookies
						также является важной частью взаимодействия браузера с веб-сайтами.
						Cookies используются для хранения информации на стороне клиента и
						могут быть использованы для хранения сеансов, настроек и других
						данных.
					</li>
				</ol>
			</p>
			<p>
				BOM предоставляет возможности для управления окном браузера, работает с
				навигацией, информацией о пользователе и экране, что позволяет
				разработчикам создавать более интерактивные и адаптивные веб-приложения,
				а также управлять поведением браузера на стороне клиента.
			</p>
		</div>
	)
}

export default Question
