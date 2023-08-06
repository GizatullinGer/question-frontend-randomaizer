import React from 'react'
import { Examples } from '../../Examples/Examples'

const Question = () => {
	return (
		<div>
			<p>
				CSS-правило - это набор инструкций, определяющих стиль и внешний вид
				элемента или группы элементов на веб-странице. Оно состоит из селектора
				и блока объявлений стилей.
			</p>
			<p>Общая структура CSS-правила:</p>
			<Examples>
				селектор &#123;
				<br />
				&emsp;&emsp;свойство1: значение1;
				<br />
				&emsp;&emsp;свойство2: значение2;
				<br />
				&emsp;&emsp;/* ... */
				<br />
				&emsp;&emsp;свойствоN: значениеN;
				<br />
				&#125;
			</Examples>
		</div>
	)
}

export default Question
