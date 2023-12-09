import React from 'react'
import { Examples } from '../../Examples/Examples'

const Question = () => {
	return (
		<div>
			<p>
				Свойство <b>.forms</b> используется для доступа к формам, которые
				содержат определенный элемент в HTML-документе. Оно представляет
				коллекцию всех форм, содержащих данный элемент.
			</p>
			<p>
				Когда вы обращаетесь к свойству <b>.forms</b> у элемента формы, оно
				возвращает коллекцию HTML-форм (<b>HTMLCollection</b> или{' '}
				<b>NodeList</b>), которые содержат этот элемент. Если элемент не
				находится внутри ни одной формы, то свойство <b>.forms</b> вернет пустую
				коллекцию.
			</p>
			<p>Пример:</p>
			<Examples>
				{'<'}form id="form1"{'>'}
				<br />
				&emsp;&emsp;{'<'}input type="text" name="username"{'>'}
				<br />
				{'<'}/form{'>'}
				<br />
				<br />
				{'<'}form id="form2"{'>'}
				<br />
				&emsp;&emsp;{'<'}input type="email" name="email"{'>'}
				<br />
				{'<'}/form{'>'}
				<br />
				<br />
				{'<'}script{'>'}
				<br />
				&emsp;&emsp;let inputElement =
				document.querySelector('input[name="username"]');
				<br />
				&emsp;&emsp;let containingForms = inputElement.forms;
				<br />
				<br />
				&emsp;&emsp;console.log(containingForms.length); // Выведет количество
				форм, содержащих данный элемент
				<br />
				<br />
				&emsp;&emsp;for (let i = 0; i {'<'} containingForms.length; i++) &#123;
				<br />
				&emsp;&emsp;&emsp;&emsp;console.log(containingForms[i].id); // Выведет
				id каждой формы, содержащей данный элемент
				<br />
				&emsp;&emsp;&#125;
				<br />
				{'<'}/script{'>'}
			</Examples>
			<p>
				<b>for...of</b> делает код более читаемым и упрощает процесс перебора
				элементов в сравнении с использованием традиционных циклов <b>for</b>,
				которые требуют работу с индексами или ключами.
			</p>
		</div>
	)
}

export default Question
