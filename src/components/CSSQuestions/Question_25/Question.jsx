import React from 'react'
import { Examples } from '../../Examples/Examples'

const Question = () => {
	return (
		<div>
			<p>
				Под "перечислением селекторов" обычно понимают использование нескольких
				селекторов в одном правиле CSS для выбора конкретных элементов. Это
				позволяет применять одни и те же стили к нескольким элементам или
				группам элементов, что делает код более компактным и удобным для
				обслуживания.
			</p>
			<p>
				Перечисление селекторов осуществляется путем разделения селекторов
				запятыми. Например:
			</p>
			<Examples>
				h1, h2, h3 &#123;
				<br />
				&emsp;&emsp;color: #333;
				<br />
				&emsp;&emsp;font-family: 'Arial', sans-serif;
				<br />
				&#125;
			</Examples>
		</div>
	)
}

export default Question
