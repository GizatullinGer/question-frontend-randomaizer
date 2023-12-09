/* eslint-disable react/jsx-no-comment-textnodes */
import React from 'react'
import { Examples } from '../../Examples/Examples'

const Question = () => {
	return (
		<div>
			<p>
				<b>HTMLCollection</b> и <b>NodeList</b> - это два типа объектов, которые
				представляют коллекции элементов в DOM (объектной модели документа)
				веб-страницы. Они оба представляют собой список узлов (Node), но имеют
				несколько различий.
			</p>
			<h3>HTMLCollection:</h3>
			<p>
				<ol>
					<li>
						<b>Доступ к элементам: HTMLCollection </b>- это коллекция,
						содержащая только элементы (или узлы-элементы), т.е. объекты типа{' '}
						<b>Element</b>. Она автоматически обновляется в случае изменения
						DOM.
					</li>
					<li>
						<b>Использование в нативных методах: HTMLCollection </b>может быть
						возвращен нативными методами DOM, такими как{' '}
						<b>
							getElementsByTagName, getElementsByClassName, children,
							querySelectorAll.
						</b>
					</li>
					<li>
						<b>Индексация: </b>К элементам <b>HTMLCollection</b> можно
						обращаться по числовому индексу, как к массиву (например,{' '}
						<b>collection[0]</b>), но не поддерживает методы массивов.
					</li>
					<li>
						<b>Живая коллекция: </b>Изменения в DOM могут автоматически
						отражаться в <b>HTMLCollection</b>, что означает, что если элемент
						был добавлен или удален, <b>HTMLCollection</b> обновится
						автоматически.
					</li>
				</ol>
			</p>
			<h3>NodeList:</h3>
			<p>
				<ol>
					<li>
						<b>Доступ к элементам: NodeList </b>- это коллекция, содержащая все
						типы узлов, не только элементы (<b>Element</b>), но и другие типы
						узлов, такие как текстовые узлы, комментарии и т.д.
					</li>
					<li>
						<b>Использование в нативных методах: NodeList </b>может быть
						возвращен методами DOM, такими как{' '}
						<b>
							querySelectorAll, childNodes, parentNode.childNodes,
							document.querySelectorAll
						</b>
						.
					</li>
					<li>
						<b>Индексация: NodeList </b>также можно индексировать, как и{' '}
						<b>HTMLCollection</b>, но не поддерживает методы массивов.
					</li>
					<li>
						<b>Статическая коллекция: NodeList </b>является статической
						коллекцией. Это означает, что изменения в DOM не отразятся
						автоматически в <b>NodeList</b>. Он остается тем же, что и был на
						момент создания.
					</li>
				</ol>
			</p>
			<p>
				Оба типа коллекций могут быть перебраны с помощью цикла <b>for...of</b>{' '}
				или <b>forEach</b>, но для использования методов массива (например,{' '}
				<b>map, filter, reduce</b>) нужно будет сначала сконвертировать
				коллекцию в массив.
			</p>
			<Examples>
				// Пример преобразования NodeList в массив
				<br />
				const nodeList = document.querySelectorAll('div'); // Получаем NodeList
				<br />
				const arrayFromNodeList = Array.from(nodeList); // Преобразуем в массив
			</Examples>
			<p>
				Выбор между <b>HTMLCollection</b> и <b>NodeList</b> зависит от ваших
				потребностей в манипуляции с элементами DOM и типа коллекции,
				возвращаемой методом DOM.
			</p>
		</div>
	)
}

export default Question
