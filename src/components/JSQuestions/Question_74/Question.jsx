/* eslint-disable react/jsx-no-comment-textnodes */
import React from 'react'
import { Examples } from '../../Examples/Examples'

const Question = () => {
	return (
		<div>
			<p>
				Метод <b>Object.seal()</b> в JavaScript используется для запечатывания
				объекта, что делает его свойства не расширяемыми (non-extensible), но
				при этом оставляет их доступными для изменения значений.
			</p>
			<p>
				Основное назначение <b>Object.seal()</b>:
			</p>
			<p>
				<ol>
					<li>
						<b>Запрещение добавления новых свойств:</b> <br />
						После применения <b>Object.seal()</b>, объект становится
						"запечатанным" (sealed), что означает, что нельзя добавлять новые
						свойства в объект.
					</li>
					<li>
						<b>Запрет изменения флага конфигурации свойств:</b> <br />
						Значения существующих свойств можно изменять, но нельзя изменять их
						атрибуты (конфигурацию) - такие как{' '}
						<b>writable, configurable и enumerable</b>.
					</li>
				</ol>
			</p>
			<p>
				Пример использования <b>Object.seal()</b>:
			</p>
			<Examples>
				const obj = &#123;
				<br />
				&emsp;&emsp;prop1: 42,
				<br />
				&emsp;&emsp;prop2: 'some value'
				<br />
				&#125;;
				<br />
				<br />
				Object.seal(obj);
				<br />
				<br />
				// Попытка добавить новое свойство не сработает в "запечатанном" объекте
				<br />
				obj.prop3 = true; // Не будет добавлено новое свойство
				<br />
				<br />
				// Изменение значений существующих свойств возможно
				<br />
				obj.prop1 = 100; // Значение изменено
				<br />
				<br />
				// Попытка удалить свойство также не сработает
				<br />
				delete obj.prop2; // Не удалит свойство
				<br />
				<br />
				console.log(obj); // Выведет: &#123; prop1: 100, prop2: 'some value'
				&#125;
			</Examples>
			<p>
				Важно отметить, что хотя <b>Object.seal()</b> предотвращает добавление
				новых свойств и изменение атрибутов существующих свойств, значения самих
				свойств могут быть изменены. Кроме того, <b>Object.seal()</b> не делает
				свойства неизменяемыми <b>(immutable)</b>, так что их значения все равно
				могут быть изменены.
			</p>
		</div>
	)
}

export default Question
