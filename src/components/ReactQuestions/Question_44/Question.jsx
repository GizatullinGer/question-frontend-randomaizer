import React from 'react'

const Question = () => {
	return (
		<div>
			<p>
				Поднятие состояния вверх (Lifting State Up) - это паттерн в React,
				который используется для управления состоянием компонентов в иерархии
				компонентов. Суть этого паттерна заключается в том, чтобы поднять
				управление состоянием на более высокий уровень и передавать его вниз по
				иерархии через пропсы.
			</p>
			<p>
				Когда несколько компонентов в приложении должны иметь доступ и влиять на
				одно и то же состояние, целесообразно поднять это состояние на ближайший
				общий родительский компонент. Таким образом, родительский компонент
				становится единым источником правды для состояния, и любые изменения
				состояния передаются через пропсы дочерним компонентам.
			</p>
		</div>
	)
}

export default Question
