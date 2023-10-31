import React from 'react'

const Question_1 = () => {
	return (
		<div>
			<p>
				History API - это набор методов и интерфейсов, предоставляемых
				браузером, который позволяет JavaScript-приложениям манипулировать
				историей браузера без перезагрузки страницы. Это позволяет создавать
				более плавные и интерактивные пользовательские интерфейсы, такие как
				асинхронная загрузка контента, переходы между страницами и управление
				историей навигации.
			</p>
			<p>Основные компоненты History API включают:</p>
			<p>
				<ol>
					<li>
						<b>history.pushState(): </b>Этот метод добавляет новую запись в
						историю браузера. Он принимает три аргумента: состояние (state),
						заголовок (title) и URL. Это позволяет изменить URL без фактической
						загрузки новой страницы.
					</li>
					<li>
						<b>history.replaceState(): </b>Этот метод изменяет текущую запись в
						истории браузера. Он аналогичен <b>pushState()</b>, но он заменяет
						текущую запись вместо добавления новой.
					</li>
					<li>
						<b>popstate event: </b>Это событие возникает, когда пользователь
						переходит по истории (например, при использовании кнопок навигации
						браузера). Оно позволяет приложению реагировать на изменение истории
						и обрабатывать соответствующие действия.
					</li>
				</ol>
			</p>
			<p>
				History API полезен для создания одностраничных приложений (SPA), где
				контент обновляется динамически, без полной перезагрузки страницы. Он
				также позволяет сохранять состояние приложения и управлять URL для
				поддержки навигации и закладок в браузере. Вместе с Event-driven
				Architecture, он дает возможность создавать более плавный и
				интерактивный пользовательский опыт.
			</p>
		</div>
	)
}

export default Question_1
