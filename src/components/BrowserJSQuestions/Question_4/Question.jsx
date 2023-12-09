import React from 'react'
import { Examples } from '../../Examples/Examples'

const Question = () => {
	return (
		<div>
			<p>
				JavaScript предоставляет несколько свойств для перемещения по
				DOM-дереву. Ниже приведены основные методы и свойства для навигации по
				DOM-элементам:
			</p>
			<p>
				<ol>
					<li>
						<b>parentNode: </b>Это свойство содержит родительский элемент для
						данного узла в DOM. Например:
						<Examples>let parent = someElement.parentNode;</Examples>
					</li>
					<li>
						<b>childNodes: </b>Это свойство содержит коллекцию всех дочерних
						элементов для данного узла в виде массивоподобного объекта NodeList.
						Например:
						<Examples>let children = someElement.childNodes;</Examples>
					</li>
					<li>
						<b>firstChild: </b>Это свойство содержит первый дочерний элемент
						узла или <b>null</b>, если узел не имеет дочерних элементов.
						Например:
						<Examples>let firstChild = someElement.firstChild;</Examples>
					</li>
					<li>
						<b>lastChild: </b>Это свойство содержит последний дочерний элемент
						узла или <b>null</b>, если узел не имеет дочерних элементов.
						Например:
						<Examples>let lastChild = someElement.lastChild;</Examples>
					</li>
					<li>
						<b>nextSibling: </b>Это свойство содержит следующий элемент на том
						же уровне иерархии или <b>null</b>, если следующего элемента нет.
						Например:
						<Examples>let nextElement = someElement.nextSibling;</Examples>
					</li>
					<li>
						<b>previousSibling: </b>Это свойство содержит предыдущий элемент на
						том же уровне иерархии или <b>null</b>, если предыдущего элемента
						нет. Например:
						<Examples>
							let previousElement = someElement.previousSibling;
						</Examples>
					</li>
					<li>
						<b>firstElementChild: </b>Это свойство содержит первый дочерний
						элемент узла, игнорируя любые текстовые узлы или узлы комментариев.
						Например:
						<Examples>
							let firstElement = someElement.firstElementChild;
						</Examples>
					</li>
					<li>
						<b>lastElementChild: </b>Это свойство содержит последний дочерний
						элемент узла, игнорируя любые текстовые узлы или узлы комментариев.
						Например:
						<Examples>let lastElement = someElement.lastElementChild;</Examples>
					</li>
				</ol>
			</p>
			<p>
				Эти свойства позволяют перемещаться по DOM-дереву и получать доступ к
				различным элементам, дочерним узлам, родительским элементам и соседним
				элементам веб-страницы.
			</p>
		</div>
	)
}

export default Question
