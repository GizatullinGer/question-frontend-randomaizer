import React from 'react'

const Question = () => {
	return (
		<div>
			<p>
				Состояние (state) и пропсы (props) - это два основных концепта в React,
				которые используются для управления данными в компонентах, но они имеют
				различное назначение и область применения.
			</p>
			<h3>Состояние (state):</h3>
			<p>
				<ol>
					<li>
						<b>Определение: </b>Состояние - это внутреннее свойство компонента,
						которое может хранить данные, изменяемые во время жизненного цикла
						компонента.
					</li>
					<li>
						<b>Изменяемость: </b>Состояние управляется и изменяется самим
						компонентом, в котором оно определено, с помощью метода{' '}
						<b>setState()</b>.
					</li>
					<li>
						<b>Локальность: </b>Каждый компонент в React имеет своё собственное
						состояние, которое является локальным для этого компонента. Оно
						недоступно для других компонентов без передачи через пропсы.
					</li>
					<li>
						<b>Использование: </b>Состояние используется для хранения данных,
						которые могут изменяться во время жизненного цикла компонента, такие
						как значения полей ввода, результаты запросов к API и другие
						динамические данные.
					</li>
				</ol>
			</p>
			<h3>Пропсы (props):</h3>
			<p>
				<ol>
					<li>
						<b>Определение: </b>Пропсы - это данные, которые передаются в
						компонент извне, от родительского компонента, и доступны для чтения,
						но не могут быть изменены внутри самого компонента.
					</li>
					<li>
						<b>Изменяемость: </b>Пропсы доступны только для чтения в компоненте,
						они передаются сверху вниз и не могут быть изменены внутри
						компонента, который их получает..
					</li>
					<li>
						<b>Локальность: </b>Пропсы передаются от родительского компонента
						дочернему через атрибуты в JSX.
					</li>
					<li>
						<b>Использование: </b>Пропсы используются для передачи данных от
						родительских компонентов в дочерние, чтобы настраивать и управлять
						поведением и внешним видом дочерних компонентов.
					</li>
				</ol>
			</p>
			<h3>Краткое сравнение:</h3>
			<p>
				<ul>
					<li>Состояние </li>управляется и изменяется внутри компонента, оно
					локально для компонента и используется для хранения изменяющихся
					данных внутри компонента.
					<li>Пропсы </li>передаются извне в компонент, они доступны только для
					чтения внутри компонента и используются для передачи данных от
					родителя к дочерним компонентам.
				</ul>
			</p>
			<p>
				Оба концепта - состояние и пропсы - играют важную роль в React, позволяя
				компонентам быть гибкими и многократно используемыми, обеспечивая
				передачу данных в приложении от одного компонента к другому.
			</p>
		</div>
	)
}

export default Question