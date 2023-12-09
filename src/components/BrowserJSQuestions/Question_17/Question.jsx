import React from 'react'

const Question = () => {
	return (
		<div>
			<p>
				<b>e.preventDefault()</b> и <b>e.stopPropagation()</b> - это два разных
				метода для работы с событиями в JavaScript, и они решают разные задачи:
			</p>
			<p>
				<ol>
					<li>
						<b>e.preventDefault():</b>
						<ul>
							<li>
								Метод <b>e.preventDefault()</b> вызывается в обработчике события
								и предотвращает стандартное поведение браузера, связанное с
								событием.
							</li>
							<li>
								Например, если вы вызовете <b>e.preventDefault()</b> в
								обработчике события <b>submit</b> формы, это предотвратит
								отправку формы браузером. Аналогично, вызов этого метода в
								обработчике события <b>click</b> ссылки ({'<'}a{'>'} тега)
								предотвратит переход по ссылке.
							</li>
							<li>
								Этот метод не останавливает дальнейшее распространение события
								внутри дерева DOM.
							</li>
						</ul>
					</li>
					<li>
						<b>e.stopPropagation():</b>
						<ul>
							<li>
								Метод e.stopPropagation() также вызывается в обработчике
								события, но он предотвращает дальнейшее распространение текущего
								события вверх или вниз по дереву DOM.
							</li>
							<li>
								Если у вас есть вложенные элементы с одним и тем же типом
								события (например, клик), вызов <b>e.stopPropagation()</b> в
								обработчике события элемента остановит дальнейшую передачу этого
								события на родительские или дочерние элементы.
							</li>
							<li>
								Это позволяет избежать выполнения обработчиков событий для
								других элементов, которые находятся на пути всплытия или
								погружения события.
							</li>
						</ul>
					</li>
				</ol>
			</p>
			<p>
				Итак, <b>e.preventDefault()</b> используется для предотвращения
				стандартного поведения браузера, связанного с событием, а{' '}
				<b>e.stopPropagation()</b> - для остановки дальнейшего распространения
				события вверх или вниз по дереву DOM.
			</p>
		</div>
	)
}

export default Question
