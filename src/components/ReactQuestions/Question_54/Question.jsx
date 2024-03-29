import React from 'react'

const Question = () => {
	return (
		<div>
			<p>
				React Router - это библиотека для маршрутизации в приложениях,
				построенных с использованием React. Она предназначена для обеспечения
				навигации в приложении и сопоставления URL с отображаемыми компонентами.
				Вот несколько ключевых отличий React Router от обычной маршрутизации:
			</p>
			<ol>
				<li>
					<b>Декларативный подход:</b>
					<ul>
						<li>
							<b>React Router: </b>Использует декларативный подход. Определение
							маршрутов происходит через React-компоненты, которые отображаются
							при соответствующих URL-адресах.
						</li>
						<li>
							<b>Обычная маршрутизация: </b>Часто требует императивного кода,
							который явно указывает, как обрабатывать запросы к определенным
							URL-адресам.
						</li>
					</ul>
				</li>
				<li>
					<b>Интеграция с React:</b>
					<ul>
						<li>
							<b>React Router: </b>Разработан с учетом интеграции с React. Его
							компоненты интегрируются непосредственно в древо компонентов
							React, что упрощает управление состоянием и поведением
							маршрутизации.
						</li>
						<li>
							<b>Обычная маршрутизация: </b>Может использовать различные
							библиотеки или реализации, независимые от React, что может
							потребовать больше усилий для интеграции с React-приложением.
						</li>
					</ul>
				</li>
				<li>
					<b>Динамические маршруты:</b>
					<ul>
						<li>
							<b>React Router: </b>Позволяет определять динамические маршруты,
							где параметры в URL могут изменяться, и компоненты могут быть
							отображены в зависимости от этих параметров.
						</li>
						<li>
							<b>Обычная маршрутизация: </b>Может потребовать дополнительного
							кода для обработки динамических параметров в URL.
						</li>
					</ul>
				</li>
				<li>
					<b>SPA (Single Page Application) поддержка:</b>
					<ul>
						<li>
							<b>React Router: </b>Часто используется в SPA, где приложение
							загружается один раз, и маршрутизация происходит без полной
							перезагрузки страницы.
						</li>
						<li>
							<b>Обычная маршрутизация: </b>Может быть ориентирована на
							традиционные многoстраничные приложения, требующие перезагрузки
							страницы при переходе между различными секциями.
						</li>
					</ul>
				</li>
			</ol>
			<p>
				React Router предоставляет богатые возможности для создания сложной
				маршрутизации в React-приложениях, учитывая особенности современных
				веб-приложений.
			</p>
		</div>
	)
}

export default Question
