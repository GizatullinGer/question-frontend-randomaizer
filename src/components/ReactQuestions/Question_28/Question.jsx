import React from 'react'

const Question = () => {
	return (
		<div>
			<p>
				"Бурение пропсов" (Prop Drilling) - это ситуация в React, когда пропсы
				передаются через несколько уровней компонентов вглубь иерархии, чтобы
				достичь компонента, где они фактически используются. Это может привести
				к необходимости передавать данные через множество промежуточных
				компонентов, даже если они не используют эти данные сами по себе.
			</p>
			<h3>Как избежать бурения пропсов?</h3>
			<ol>
				<li>
					<b>Контекст (Context): </b>Используйте контекст, чтобы передавать
					данные на глубокие уровни компонентов без необходимости явной передачи
					пропсов через все промежуточные компоненты. Однако, не стоит
					использовать контекст для передачи большого количества данных, так как
					это может снизить читаемость кода и усложнить его поддержку.
				</li>
				<li>
					<b>State Management библиотеки: </b>Использование библиотек управления
					состоянием, таких как Redux, MobX или Context API вместе с хуком
					useContext, может помочь управлять состоянием приложения и избегать
					бурения пропсов.
				</li>
				<li>
					<b>Компоненты высшего порядка (HOC): </b>Используйте компоненты
					высшего порядка для оборачивания компонентов и передачи им
					дополнительных данных без необходимости бурения пропсов через все
					уровни.
				</li>
				<li>
					<b>Рефакторинг структуры компонентов: </b>Пересмотрите структуру
					компонентов, чтобы избежать передачи пропсов через много уровней.
					Иногда перестройка компонентов может сделать передачу данных более
					простой и понятной.
				</li>
			</ol>
		</div>
	)
}

export default Question
