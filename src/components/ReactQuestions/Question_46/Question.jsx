import React from 'react'
import { Examples } from '../../Examples/Examples'

const Question = () => {
	return (
		<div>
			<p>
				createElement и cloneElement - это два разных метода в React, которые
				используются для создания элементов, но они предназначены для разных
				целей.
			</p>
			<ol>
				<li>
					<ul>
						<li>
							<b>Цель: </b>Создание нового элемента React.
						</li>
						<li>
							<b>Использование: </b>Этот метод обычно используется в JSX-файлах
							в том случае, если JSX-синтаксис неудобен или если элементы
							создаются динамически.
						</li>
						<li>
							<b>Пример:</b>
							<Examples>
								const element = React.createElement('div', &#123; className:
								'example' &#125;, 'Hello, World!');
							</Examples>
						</li>
					</ul>
				</li>
				<li>
					<ul>
						<li>
							<b>Цель: </b>Клонирование существующего элемента React с
							возможностью внесения изменений в пропсы.
						</li>
						<li>
							<b>Использование: </b>Этот метод полезен, когда вы хотите
							использовать существующий элемент, но внести изменения в его
							пропсы (например, добавить новые пропсы или изменить
							существующие).
						</li>
						<li>
							<b>Пример:</b>
							<Examples>
								const originalElement = {'<'}div className="example"{'>'}Hello,
								World!{'<'}/div{'>'}; <br />
								const clonedElement = React.cloneElement(originalElement, &#123;
								style: &#123; color: 'red' &#125; &#125;);
							</Examples>
						</li>
					</ul>
				</li>
			</ol>
			<p>
				Таким образом, <b>createElement</b> используется для создания новых
				элементов, а <b>cloneElement</b> - для клонирования существующих с
				возможностью внесения изменений в пропсы.
			</p>
		</div>
	)
}

export default Question
