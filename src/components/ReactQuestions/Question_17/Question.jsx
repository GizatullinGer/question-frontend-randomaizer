import React from 'react'

const Question = () => {
	return (
		<div>
			<p>
				В React фрагмент (Fragment) - это компонент, который позволяет
				группировать список дочерних элементов без создания лишних узлов в DOM.
				Он позволяет вернуть несколько элементов из компонента без оборачивания
				их в дополнительный родительский элемент, такой как {'<'}div{'>'} или{' '}
				{'<'}span{'>'}.
			</p>
			<p>Почему фрагмент лучше, чем div?</p>
			<p>
				<ol>
					<li>
						<b>Меньше элементов в DOM: </b>Использование фрагмента позволяет
						группировать несколько элементов без создания лишнего родительского
						элемента в DOM. Это может быть полезно, когда вам нужно вернуть
						несколько элементов, но вы не хотите добавлять дополнительные узлы.
					</li>
					<li>
						<b>Избегание стилей или спецификации классов: </b>Иногда обычный div
						может изменять визуальное представление вашего приложения или может
						привести к конфликту с существующими стилями. Фрагмент не вносит
						дополнительных стилей или классов, что позволяет избежать таких
						конфликтов.
					</li>
					<li>
						<b>Улучшенная читаемость кода:</b> Фрагмент делает код более чистым
						и читаемым, особенно когда возвращается список элементов без
						необходимости создания обертки в виде {'<'}div{'>'}.
					</li>
				</ol>
			</p>
			<p>
				Фрагменты в React предоставляют удобный способ группировки нескольких
				элементов без добавления дополнительных узлов в DOM, что помогает
				сделать код более чистым и эффективным. Однако следует помнить, что
				поддержка фрагментов доступна начиная с React версии 16.2 и выше.
			</p>
		</div>
	)
}

export default Question
