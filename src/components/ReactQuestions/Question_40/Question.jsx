import React from 'react'

const Question = () => {
	return (
		<div>
			<p>
				<b>useEffect()</b> и <b>componentDidMount()</b> - это методы, которые
				используются для выполнения определенных действий при монтировании
				компонента в React. Однако они применяются в разных контекстах и имеют
				некоторые отличия:
			</p>
			<h3>componentDidMount() (для классовых компонентов):</h3>
			<ul>
				<li>
					<b>componentDidMount() </b>- это метод жизненного цикла классовых
					компонентов React, который вызывается после того, как компонент был
					добавлен в DOM (после его монтирования).
				</li>
			</ul>
			<h3>useEffect() (для функциональных компонентов):</h3>
			<ul>
				<li>
					<b>useEffect() </b>- это хук React, используемый в функциональных
					компонентах для выполнения побочных эффектов в компоненте. Он
					объединяет методы жизненного цикла, такие как <b>componentDidMount</b>
					, <b>componentDidUpdate</b>, <b>componentWillUnmount</b>.
				</li>
			</ul>
			<h3>Основные различия:</h3>
			<ol>
				<li>
					<b>Синтаксис и контекст использования: </b>componentDidMount()
					используется в классовых компонентах, тогда как useEffect() - в
					функциональных компонентах.
				</li>
				<li>
					<b>Контроль завершения эффекта: </b>В <b>useEffect()</b> можно
					опционально указать зависимости, чтобы контролировать, когда эффект
					должен быть запущен или завершен.
				</li>
				<li>
					<b>Обработка множественных эффектов: </b>В функциональных компонентах
					можно использовать несколько useEffect() для отдельных эффектов, тогда
					как в классовых компонентах методы жизненного цикла могут быть вызваны
					только в соответствующем порядке.
				</li>
			</ol>
			<p>
				Оба метода, <b>componentDidMount()</b> и <b>useEffect()</b>,
				используются для выполнения кода после монтирования компонента, но
				useEffect() - это предпочтительный способ для функциональных
				компонентов, так как он предоставляет больше гибкости и контроля над
				эффектами.
			</p>
		</div>
	)
}

export default Question
