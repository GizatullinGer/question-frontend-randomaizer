/* eslint-disable react/jsx-no-comment-textnodes */
import React from 'react'
import { Examples } from '../../Examples/Examples'

const Question = () => {
	return (
		<div>
			<p>
				Свойство <b>.dataset</b> в JavaScript представляет собой специальный
				способ доступа к атрибутам данных (data-атрибутам) HTML-элемента. Оно
				позволяет получить доступ к значениям атрибутов <b>data-*</b> элемента в
				виде объекта.
			</p>
			<p>
				Каждый атрибут <b>data-*</b> на HTML-элементе может быть доступен через
				объект <b>dataset</b> с использованием синтаксиса camelCase.
			</p>
			<p>Пример:</p>
			<p>HTML:</p>
			<Examples>
				&lt;div id="myDiv" data-info="some information"
				data-category="tech"&gt;&lt;/div&gt;
			</Examples>
			<p>JavaScript:</p>
			<Examples>
				const divElement = document.getElementById('myDiv');
				<br />
				<br />
				// Получение значений data-атрибутов через свойство dataset
				<br />
				const info = divElement.dataset.info; // info = 'some information'
				<br />
				const category = divElement.dataset.category; // category = 'tech'
			</Examples>
			<p>
				Свойство <b>.dataset</b> предоставляет доступ к данным, хранящимся в
				data-атрибутах HTML-элементов, и обеспечивает удобный способ получения и
				установки этих данных через JavaScript. Обратите внимание, что имена
				data-атрибутов, содержащие дефисы, преобразуются из формата kebab-case в
				camelCase для доступа через свойство <b>.dataset</b>. Таким образом,
				атрибут <b>data-info</b> становится <b>dataset.info</b>.
			</p>
		</div>
	)
}

export default Question
