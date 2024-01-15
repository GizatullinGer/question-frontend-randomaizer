import React from 'react'

const Question = () => {
	return (
		<div>
			<p>
				В React Router версии 5 были добавлены несколько хуков, предназначенных
				для упрощения работы с маршрутами в функциональных компонентах. Ниже
				представлен краткий обзор некоторых из них:
			</p>
			<ol>
				<li>
					<b>useHistory: </b>Хук useHistory предоставляет доступ к объекту
					history, который используется для управления навигацией в приложении.
					Он предоставляет методы, такие как push, replace, goBack, и другие.
				</li>
				<li>
					<b>useLocation: </b>Хук useLocation предоставляет доступ к текущему
					объекту location, который содержит информацию о текущем URL.
				</li>
				<li>
					<b>useParams: </b>Хук useParams предоставляет доступ к параметрам из
					текущего маршрута.
				</li>
				<li>
					<b>useRouteMatch: </b>Хук useRouteMatch используется для получения
					информации о совпадении текущего маршрута.
				</li>
			</ol>
			<p>
				Эти хуки обеспечивают удобный способ доступа к данным маршрутизации в
				функциональных компонентах, облегчая взаимодействие с библиотекой React
				Router в React-приложениях.
			</p>
		</div>
	)
}

export default Question