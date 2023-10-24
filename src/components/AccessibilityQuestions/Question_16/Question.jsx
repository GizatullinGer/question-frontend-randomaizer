import React from 'react'
import { Examples } from '../../Examples/Examples'

const Question = () => {
	return (
		<div>
			<p>
				Метод <b>.includes()</b> используется для определения, содержит ли
				массив, строка или другая коллекция определенное значение. Этот метод
				возвращает булево значение <b>true</b>, если значение найдено, и{' '}
				<b>false</b>, если значение не найдено. Метод <b>.includes()</b>{' '}
				полезен, когда вам нужно проверить наличие элемента или подстроки в
				коллекции без необходимости получать его индекс или позицию.
			</p>
			<p>Для массивов:</p>
			<Examples>
				const array = [1, 2, 3, 4, 5];
				<br />
				const value = 3;
				<br />
				<br />
				const includesValue = array.includes(value);
				<br />
				<br />
				console.log(includesValue); // Вывод: true
			</Examples>
			<p>Для строк:</p>
			<Examples>
				const str = 'Пример строки';
				<br />
				const subStr = 'строка';
				<br />
				<br />
				const includesSubStr = str.includes(subStr);
				<br />
				<br />
				console.log(includesSubStr); // Вывод: true
			</Examples>
			<p>
				Метод <b>.includes()</b> полезен в различных сценариях, например, при
				проверке, содержит ли массив определенный элемент, проверке наличия
				определенной подстроки в строке или проверке наличия элемента в
				коллекции перед выполнением определенных действий.
			</p>
		</div>
	)
}

export default Question
