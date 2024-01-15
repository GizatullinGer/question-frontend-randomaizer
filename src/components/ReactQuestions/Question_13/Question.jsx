import React from 'react'

const Question = () => {
	return (
		<div>
			<p>
				Хуки (Hooks) в React - это функции, которые позволяют вам использовать
				состояние и другие возможности React в функциональных компонентах. Они
				были представлены в React начиная с версии 16.8. Хуки позволяют
				добавлять состояние и другие React-функциональности в функциональные
				компоненты без необходимости преобразования их в классы.
			</p>
			<h3>Некоторые из основных хуков, предоставляемых React:</h3>
			<p>
				<ol>
					<li>useState</li>
					<li>useEffect</li>
					<li>useContext</li>
					<li>useRef</li>
					<li>useMemo</li>
					<li>useCallback</li>
				</ol>
			</p>
			<h3>Преимущества использования хуков:</h3>
			<p>
				<ol>
					<li>
						<b>Простота использования: </b>Хуки позволяют использовать состояние
						и другие функциональности React без использования классов, что
						упрощает код и делает его более читаемым.
					</li>
					<li>
						<b>Повторное использование логики: </b>Хуки позволяют легко
						разделить и повторно использовать логику между компонентами, не
						требуя использования высшего порядка компонентов (HOC) или
						рендер-пропов.
					</li>
					<li>
						<b>Более чистый код: </b>Использование хуков обычно приводит к более
						компактному и понятному коду.
					</li>
				</ol>
			</p>
			<p>
				Хуки предоставляют удобный способ управлять состоянием, жизненным циклом
				и другими аспектами компонентов в React-приложениях, особенно в
				функциональных компонентах.
			</p>
		</div>
	)
}

export default Question