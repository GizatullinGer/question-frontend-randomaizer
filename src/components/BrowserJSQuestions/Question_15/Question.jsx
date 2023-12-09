/* eslint-disable react/jsx-no-comment-textnodes */
import React from 'react'
import { Examples } from '../../Examples/Examples'

const Question = () => {
	return (
		<div>
			<p>
				Чтобы динамически добавить элемент на HTML-страницу с помощью
				JavaScript, используйте следующие шаги:
			</p>
			<p>
				<ol>
					<li>
						<b>Выберите родительский элемент:</b>
						<br />
						Определите элемент, к которому вы хотите добавить новый элемент. Это
						может быть элемент с уникальным идентификатором (<b>id</b>) или
						другой метод выбора элемента, такой как <b>querySelector</b>.
					</li>
					<li>
						<b>Создайте новый элемент:</b>
						<br />
						Используйте метод <b>document.createElement()</b>, чтобы создать
						новый HTML-элемент. Установите необходимые атрибуты и содержимое
						этого элемента при необходимости.
					</li>
					<li>
						<b>Добавьте новый элемент к родительскому элементу:</b>
						<br />
						Используйте методы добавления, такие как <b>appendChild()</b>, чтобы
						добавить созданный элемент в выбранный родительский элемент.
					</li>
				</ol>
			</p>
			<p>Пример:</p>
			<p>HTML:</p>
			<Examples>
				{'<'}!DOCTYPE html{'>'}
				<br />
				{'<'}html{'>'}
				<br />
				{'<'}head{'>'}
				<br />
				&emsp;&emsp;{'<'}title{'>'}Dynamic Element Addition{'<'}/title{'>'}
				<br />
				{'<'}/head{'>'}
				<br />
				{'<'}body{'>'}
				<br />
				&emsp;&emsp;{'<'}div id="parentElement"{'>'}
				<br />
				&emsp;&emsp;&emsp;&emsp;{'<'}!-- Здесь будет добавлен новый элемент --
				{'>'}
				<br />
				&emsp;&emsp;{'<'}/div{'>'}
				<br />
				<br />
				&emsp;&emsp;{'<'}script src="your_script.js"{'>'}
				<br />
				{'<'}/script{'>'}
				<br />
				{'<'}/body{'>'}
				<br />
				{'<'}/html{'>'}
			</Examples>
			<p>JavaScript (your_script.js):</p>
			<Examples>
				// Получаем ссылку на родительский элемент, к которому будем добавлять
				новый элемент
				<br />
				let parentElement = document.getElementById('parentElement');
				<br />
				<br />
				// Создаем новый элемент
				<br />
				let newElement = document.createElement('p');
				<br />
				newElement.textContent = 'Новый абзац'; // Устанавливаем текст для
				нового элемента
				<br />
				<br />
				// Добавляем новый элемент к родительскому элементу
				<br />
				parentElement.appendChild(newElement);
			</Examples>
			<p>
				Этот код создаст новый{' '}
				<b>
					{'<'}p{'>'}
				</b>{' '}
				элемент с текстом "Новый абзац" и добавит его в элемент с{' '}
				<b>id="parentElement"</b>. Вы можете настраивать тип создаваемого
				элемента, его атрибуты, стили и содержимое в соответствии с вашими
				потребностями перед добавлением его на страницу.
			</p>
		</div>
	)
}

export default Question
