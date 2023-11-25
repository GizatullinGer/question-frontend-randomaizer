/* eslint-disable react/jsx-no-comment-textnodes */
import React from 'react'
import { Examples } from '../../Examples/Examples'

const Question = () => {
	return (
		<div>
			<p>
				События <b>input</b> и <b>change</b> в JavaScript возникают при
				взаимодействии с элементами формы, такими как {'<'}input{'>'}, {'<'}
				select{'>'} или {'<'}textarea{'>'}, но имеют некоторые ключевые различия
				в своем поведении.
			</p>
			<h3>Событие input:</h3>
			<p>
				<ol>
					<li>
						<b>Мгновенное срабатывание:</b>
						<p>
							Событие <b>input</b> срабатывает мгновенно при изменении значения
							поля ввода, как только пользователь вводит новые данные или
							изменяет текущие данные.
						</p>
					</li>
					<li>
						<b>Срабатывает на каждое изменение:</b>
						<p>
							<b>input</b> срабатывает при каждом изменении содержимого элемента{' '}
							{'<'}input{'>'}, {'<'}select{'>'} или {'<'}textarea{'>'}.
							Например, при каждом нажатии клавиши при вводе текста в поле
							ввода.
						</p>
					</li>
				</ol>
			</p>
			<h3>Событие change:</h3>
			<p>
				<ol>
					<li>
						<b>Срабатывает при потере фокуса:</b>
						<p>
							Событие change срабатывает, когда элемент формы теряет фокус после
							изменения значения. Это может быть после изменения значения и
							последующего клика по другому элементу на странице или при
							использовании клавиши "Tab" для перехода к следующему элементу.
						</p>
					</li>
					<li>
						<b>Не срабатывает на каждое изменение:</b>
						<p>
							<b>change</b> не срабатывает мгновенно при каждом изменении
							значения, а только после потери фокуса элемента формы, что делает
							его менее реагирующим на каждое мгновенное изменение.
						</p>
					</li>
				</ol>
			</p>
			<h3>Пример использования:</h3>
			<Examples>
				{'<'}input type="text" id="myInput"{'>'}
				<br />
				<br />
				{'<'}script{'>'}
				<br />
				&emsp;&emsp;const inputField = document.getElementById('myInput');
				<br />
				<br />
				&emsp;&emsp;inputField.addEventListener('input', function(event) &#123;
				<br />
				&emsp;&emsp;&emsp;&emsp;console.log('Событие input:',
				event.target.value);
				<br />
				&emsp;&emsp;&#125;);
				<br />
				<br />
				&emsp;&emsp;inputField.addEventListener('change', function(event) &#123;
				<br />
				&emsp;&emsp;&emsp;&emsp;console.log('Событие change:',
				event.target.value);
				<br />
				&emsp;&emsp;&#125;);
				<br />
				{'<'}/script{'>'}
			</Examples>
			<p>
				Если пользователь, например, вводит текст в поле ввода, вы увидите, что
				событие <b>input</b> будет срабатывать при каждом изменении текста, в то
				время как событие <b>change</b> сработает только после того, как поле
				ввода потеряет фокус (например, при клике на другое место на странице).
			</p>
		</div>
	)
}

export default Question
