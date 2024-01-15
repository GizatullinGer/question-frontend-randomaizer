import React from 'react'

const Question = () => {
	return (
		<div>
			<p>
				Контекст (Context) в React - это механизм, который позволяет передавать
				данные глубоко вниз по иерархии компонентов без явной передачи пропсов
				через каждый уровень компонентов.
			</p>
			<p>
				Основное предназначение контекста - это обеспечить способ передачи
				данных, таких как состояние приложения, настройки или локализация, между
				компонентами без необходимости передавать пропсы через промежуточные
				компоненты, которые эти данные не используют.
			</p>
			<p>
				Контекст состоит из двух основных частей: <b>Provider</b> (поставщик) и{' '}
				<b>Consumer</b> (потребитель).
			</p>
			<p>
				<ul>
					<li>
						<b>Provider: </b>Компонент, который предоставляет данные контекста.
						Он оборачивает все компоненты, которым необходим доступ к этим
						данным.
					</li>
					<li>
						<b>Consumer: </b>Компонент, который использует данные контекста. Он
						позволяет компонентам «потреблять» контекст и использовать
						предоставленные им данные.
					</li>
				</ul>
			</p>
			<p>
				Контекст помогает избежать "Props Drilling" пропсов через несколько
				уровней компонентов и упрощает передачу глобальных данных или настроек
				по всему приложению в React, обеспечивая удобный способ передачи данных
				от одного компонента к другому. Однако его следует использовать
				осознанно, чтобы не усложнять структуру приложения и не затруднять
				отладку кода.
			</p>
		</div>
	)
}

export default Question