import React from 'react'
import { Examples } from '../../Examples/Examples'

const Question = () => {
	return (
		<div>
			<p>
				Метод <b>.getOwnPropertyDescriptors()</b> используется для получения
				всех собственных дескрипторов свойств объекта (property descriptors) в
				виде объекта. Этот метод возвращает объект, где каждое свойство объекта
				соответствует имени собственного свойства, а значение - это дескриптор
				свойства.
			</p>
			<p>
				Дескриптор свойства - это объект, который содержит информацию о
				свойстве, такую как его значение, наличие или отсутствие свойства{' '}
				<b>get</b> и <b>set</b> (если свойство является доступором), флаги для
				управления свойством (например, <b>writable</b>, <b>enumerable</b>,{' '}
				<b>configurable</b>), и другие характеристики свойства.
			</p>
			<p>
				Пример использования <b>.getOwnPropertyDescriptors()</b>:
			</p>
			<Examples>
				const obj = &#123;
				<br />
				&emsp;&emsp;name: 'John',
				<br />
				&emsp;&emsp;age: 30,
				<br />
				&#125;;
				<br />
				<br />
				const descriptors = Object.getOwnPropertyDescriptors(obj);
				<br />
				<br />
				console.log(descriptors);
			</Examples>
			<p>
				В результате выполнения кода вы получите объект, содержащий дескрипторы
				свойств <b>name</b> и <b>age</b>:
			</p>
			<Examples>
				&#123;
				<br />
				&emsp;&emsp;name: &#123;
				<br />
				&emsp;&emsp;&emsp;&emsp;value: 'John',
				<br />
				&emsp;&emsp;&emsp;&emsp;writable: true,
				<br />
				&emsp;&emsp;&emsp;&emsp;enumerable: true,
				<br />
				&emsp;&emsp;&emsp;&emsp;configurable: true
				<br />
				&emsp;&emsp;&#125;,
				<br />
				&emsp;&emsp;age: &#123;
				<br />
				&emsp;&emsp;&emsp;&emsp;value: 30,
				<br />
				&emsp;&emsp;&emsp;&emsp;writable: true,
				<br />
				&emsp;&emsp;&emsp;&emsp;enumerable: true,
				<br />
				&emsp;&emsp;&emsp;&emsp;configurable: true
				<br />
				&emsp;&emsp;&#125;
				<br />
				&#125;
			</Examples>
			<p>
				Метод <b>.getOwnPropertyDescriptors()</b> полезен, когда вам нужно
				подробно изучить свойства объекта, включая их дескрипторы, и когда вы
				хотите скопировать или клонировать объект с сохранением всех
				характеристик свойств. Этот метод часто используется в операциях
				манипуляции объектами и в работе с прототипами объектов.
			</p>
		</div>
	)
}

export default Question
