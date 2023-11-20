import React from 'react'
import { Examples } from '../../Examples/Examples'

const Question = () => {
	return (
		<div>
			<p>
				Объектные обертки (Wrapper Objects) в JavaScript представляют собой
				объекты, которые предоставляют оболочку над примитивными типами данных
				(такими как строка, число, булев тип), превращая эти примитивные типы в
				объекты.
			</p>
			<p>
				JavaScript имеет примитивные типы данных (как строковый тип, числовой
				тип, булев тип и т.д.), но иногда для работы с ними требуются методы и
				свойства, доступные только объектам. Чтобы решить эту проблему,
				JavaScript автоматически создает объектные обертки для примитивных типов
				данных во время обращения к свойствам или методам примитивов.
			</p>
			<p>Примеры объектных оберток:</p>
			<p>
				<ul>
					<li>
						<b>String Object (Строковый объект): </b>Создается, когда строковый
						тип данных обращается к методам или свойствам объектов строки.
						<Examples>
							const strPrimitive = 'Hello'; // Примитивный тип данных - строка
							<br />
							const strObject = new String('Hello'); // Строковый объект
							<br />
							<br />
							console.log(typeof strPrimitive); // Output: string
							<br />
							console.log(typeof strObject); // Output: object
							<br />
							<br />
							console.log(strPrimitive.length); // Output: 5<br />
							console.log(strObject.length); // Output: 5
						</Examples>
					</li>
					<li>
						<b>Number Object (Числовой объект): </b>Аналогично создается, когда
						числовой тип данных обращается к методам или свойствам объектов
						чисел.
						<Examples>
							const numPrimitive = 123; // Примитивный тип данных - число
							<br />
							const numObject = new Number(123); // Числовой объект
							<br />
							<br />
							console.log(typeof numPrimitive); // Output: number
							<br />
							console.log(typeof numObject); // Output: object
							<br />
							<br />
							console.log(numPrimitive.toFixed(2)); // Output: '123.00'
							<br />
							console.log(numObject.toFixed(2)); // Output: '123.00'
						</Examples>
					</li>
					<li>
						<b>Boolean Object (Булевый объект): </b>Подобно создается для булева
						типа данных при обращении к методам или свойствам объектов булевых
						значений.
						<Examples>
							const boolPrimitive = true; // Примитивный тип данных - булево
							значение
							<br />
							const boolObject = new Boolean(true); // Булевый объект
							<br />
							<br />
							console.log(typeof boolPrimitive); // Output: boolean
							<br />
							console.log(typeof boolObject); // Output: object
							<br />
							<br />
							console.log(boolPrimitive.valueOf()); // Output: true
							<br />
							console.log(boolObject.valueOf()); // Output: true
						</Examples>
					</li>
				</ul>
			</p>
			<p>
				Объектные обертки автоматически создаются и могут использоваться для
				вызова методов и работы со свойствами примитивных типов данных. Однако
				они не всегда удобны из-за потенциальных проблем с производительностью и
				некоторых особенностей, таких как автоматическое преобразование типов. В
				большинстве случаев примитивные типы данных более предпочтительны для
				использования.
			</p>
		</div>
	)
}

export default Question
