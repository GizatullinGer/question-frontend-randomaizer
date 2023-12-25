import React from 'react'
import { Examples } from '../../Examples/Examples'

const Question = () => {
	return (
		<div>
			<p>
				Ключевое слово <b>currentColor</b> в CSS используется для установки
				значения свойств, которые принимают цвет, равным текущему цвету текста
				(или другого элемента). Он предоставляет удобный способ сделать цвет
				определенного элемента зависимым от текущего цвета текста или фона.
			</p>
			<p>
				Пример использования <b>currentColor</b> в свойстве <b>border-color</b>:
			</p>
			<Examples>
				div &#123;
				<br />
				&emsp;&emsp;color: #3498db; /* Устанавливаем цвет текста элемента */
				<br />
				&emsp;&emsp;border: 2px solid currentColor; /* Граница будет того же
				цвета, что и текст */
				<br />
				&#125;
			</Examples>
			<p>
				В этом примере граница элемента будет иметь цвет, равный цвету текста{' '}
				<b>(#3498db)</b>. Если вы измените цвет текста с помощью другого правила
				стилей, граница автоматически изменится на новый цвет.
			</p>
		</div>
	)
}

export default Question