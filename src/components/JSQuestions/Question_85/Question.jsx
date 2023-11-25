import React from 'react'
import { Examples } from '../../Examples/Examples'

const Question = () => {
	return (
		<div>
			<p>
				Ошибка с <b>typeof null</b> возвращающая <b>'object'</b> фактически
				является ошибкой в реализации JavaScript, которая сохраняется для
				обеспечения обратной совместимости с более ранними версиями языка. В
				истории развития JavaScript это поведение стало частью языка и
				сохраняется для поддержки старого кода.
			</p>
			<p>
				На самом деле, <b>null</b> является отдельным типом данных,
				представляющим "ничего" или "отсутствие значения". Технически,{' '}
				<b>typeof null</b> должен возвращать <b>'null'</b>, но из-за ошибки в
				истории реализации JavaScript, возвращается <b>'object'</b>.
			</p>
			<p>
				Так что если вы используете <b>typeof</b> для определения типа значения
				и ожидаете получить <b>'null'</b>, вам придется учесть эту особенность и
				явно проверять на <b>null</b>:
			</p>
			<Examples>
				let value = null;
				<br />
				<br />
				if (value === null) &#123;
				<br />
				&emsp;&emsp;console.log('Значение является null');
				<br />
				&#125; else if (typeof value === 'object') &#123;
				<br />
				&emsp;&emsp;console.log('Значение является объектом, но не null');
				<br />
				&#125;
			</Examples>
			<p>
				Однако в современных версиях JavaScript, включая ECMAScript 6 (и более
				поздние), этот недочет сохранился из-за обратной совместимости, и
				использование <b>typeof null</b> возвращает <b>'object'</b>.
			</p>
		</div>
	)
}

export default Question
