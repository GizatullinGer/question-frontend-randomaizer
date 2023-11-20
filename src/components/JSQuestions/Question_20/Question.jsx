import React from 'react'
import { Examples } from '../../Examples/Examples'

const Question = () => {
	return (
		<div>
			<p>
				В JavaScript для определения наличия свойства в объекте можно
				использовать несколько методов:
			</p>
			<p>
				<ol>
					<li>
						<b>Оператор in: </b> Оператор <b>in</b> проверяет наличие указанного
						свойства в объекте. Он возвращает <b>true</b>, если свойство
						существует в объекте, или <b>false</b>, если его там нет.
						<Examples>
							const myObj = &#123; a: 1, b: 2, c: 3 &#125;;
							<br />
							<br />
							console.log('a' in myObj); // Output: true
							<br />
							console.log('d' in myObj); // Output: false
						</Examples>
					</li>
					<li>
						<b>Метод hasOwnProperty(): </b> Метод <b>hasOwnProperty()</b>{' '}
						проверяет, содержит ли объект указанное свойство. Он возвращает{' '}
						<b>true</b>, если свойство является собственным свойством объекта,
						иначе возвращает <b>false</b>.
						<Examples>
							const myObj = &#123; a: 1, b: 2, c: 3 &#125;;
							<br />
							<br />
							console.log(myObj.hasOwnProperty('a')); // Output: true
							<br />
							console.log(myObj.hasOwnProperty('d')); // Output: false
						</Examples>
					</li>
					<li>
						<b>Проверка значения на undefined: </b> Этот способ не всегда
						надёжен, но иногда его можно использовать. При обращении к свойству
						объекта, если оно не существует, вернётся значение <b>undefined</b>.
						<Examples>
							const myObj = &#123; a: 1, b: 2, c: 3 &#125;;
							<br />
							<br />
							console.log(myObj.a !== undefined); // Output: true
							<br />
							console.log(myObj.d !== undefined); // Output: false
						</Examples>
					</li>
				</ol>
			</p>
			<p>
				Выбор метода для проверки наличия свойства зависит от конкретной
				ситуации. Оператор <b>in</b> рекомендуется для проверки наличия свойств,
				тогда как <b>hasOwnProperty()</b> чаще используется, когда важно
				проверить, является ли свойство собственным для объекта.
			</p>
		</div>
	)
}

export default Question
