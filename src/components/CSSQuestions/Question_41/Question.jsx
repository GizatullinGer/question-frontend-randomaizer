import React from 'react'

const Question = () => {
	return (
		<div>
			<p>
				Для создания анимаций и плавных переходов в CSS используются следующие
				свойства:
			</p>
			<h3>Анимации:</h3>
			<p>
				<ol>
					<li>
						<b>@keyframes: </b>Определение ключевых кадров для анимации.
					</li>
					<li>
						<b>
							animation-name, animation-duration, animation-timing-function,
							animation-delay, animation-iteration-count, animation-direction:{' '}
						</b>
						Применение анимации к элементу с указанием свойств.
					</li>
				</ol>
			</p>
			<h3>Плавные переходы:</h3>
			<p>
				<ol>
					<li>
						<b>
							transition-property, transition-duration,
							transition-timing-function, transition-delay:{' '}
						</b>
						Задание свойств, подлежащих плавному переходу.
					</li>
				</ol>
			</p>
		</div>
	)
}

export default Question
