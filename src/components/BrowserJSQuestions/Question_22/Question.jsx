import React from 'react'
import { Examples } from '../../Examples/Examples'

const Question = () => {
	return (
		<div>
			<p>
				<b>innerHTML</b> и <b>outerHTML</b> - это свойства элементов DOM в
				JavaScript, позволяющие получать и устанавливать HTML содержимое
				элемента, но с некоторыми различиями в том, что они возвращают или
				устанавливают.
			</p>
			<p>
				<ol>
					<li>
						<b>innerHTML:</b>
						<ul>
							<li>
								Свойство <b>innerHTML</b> используется для доступа к HTML
								содержимому элемента, включая все его потомки. Оно возвращает
								HTML внутреннего содержимого элемента как строку.
							</li>
							<li>
								При установке <b>innerHTML</b> значение будет интерпретировано
								как HTML-разметка и заменит текущее внутреннее содержимое
								элемента новым HTML.
							</li>
							<li>
								Например, <b>element.innerHTML</b> вернет HTML содержимое внутри
								элемента <b>element</b>.
							</li>
						</ul>
						Пример:
						<Examples>
							let element = document.getElementById('myElement');
							<br />
							console.log(element.innerHTML); // Возвращает HTML внутреннего
							содержимого элемента
							<br />
							element.innerHTML = '{'<'}p{'>'}Новое содержимое{'<'}/p{'>'}'; //
							Устанавливает новое HTML содержимое элемента
						</Examples>
					</li>
					<li>
						<b>outerHTML:</b>
						<ul>
							<li>
								Свойство <b>outerHTML</b> возвращает HTML элемента со всем его
								содержимым. Оно возвращает HTML код элемента целиком в виде
								строки.
							</li>
							<li>
								При установке <b>outerHTML</b> значение будет интерпретировано
								как HTML-разметка и заменит сам элемент, включая его содержимое,
								новым HTML.
							</li>
							<li>
								Например, element.outerHTML вернет HTML код элемента element,
								включая сам элемент.
							</li>
						</ul>
						Пример:
						<Examples>
							let element = document.getElementById('myElement');
							<br />
							console.log(element.outerHTML); // Возвращает HTML элемента
							полностью, включая его содержимое
							<br />
							element.outerHTML = '{'<'}div id="newElement"{'>'}Новый элемент
							{'<'}/div{'>'}'; // Заменяет элемент новым HTML кодом
						</Examples>
					</li>
				</ol>
			</p>
			<p>
				Разница между <b>innerHTML</b> и <b>outerHTML</b> заключается в том, что{' '}
				<b>innerHTML</b> работает с внутренним содержимым элемента, в то время
				как <b>outerHTML</b> работает со всем элементом, включая сам элемент и
				его содержимое.
			</p>
		</div>
	)
}

export default Question
