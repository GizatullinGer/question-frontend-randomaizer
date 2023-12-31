import React from 'react'

const Question = () => {
	return (
		<div>
			<p>
				Плавающие элементы <b>(floats)</b> в CSS предоставляют механизм для
				выравнивания элементов внутри контейнера, по обтеканию других элементов.
				Изначально они были предназначены для создания макетов с использованием
				текста, но они также стали широко использоваться для различных задач.
			</p>
			<h3>Как они работают:</h3>
			<p>
				<ol>
					<li>
						<b>Плавание влево или вправо:</b> <br />
						Плавающий элемент может быть выровнен либо влево (float: left;),
						либо вправо (float: right;). Это указывает, с какой стороны элемента
						будут обтекаться другие элементы.
					</li>
					<li>
						<b>Обтекание:</b> <br />
						Элементы, следующие за плавающим элементом в потоке документа, будут
						обтекать его с той стороны, которую указывает float. Это особенно
						полезно при размещении изображений рядом с текстом.
					</li>
					<li>
						<b>Разрыв потока:</b> <br />
						Плавающий элемент выходит из потока документа, и элементы после него
						начинаются на новой линии под ним.
					</li>
					<li>
						<b>Ширина:</b> <br />
						Плавающий элемент занимает только столько ширины, сколько необходимо
						для содержания его содержимого, если не указана явная ширина. Это
						позволяет создавать адаптивные макеты.
					</li>
					<li>
						<b>Проблема обтекания:</b> <br />
						При использовании плавающих элементов может возникнуть проблема
						обтекания (clearfix). Это связано с тем, что плавающий элемент может
						не "захватить" высоту своих плавающих дочерних элементов.
					</li>
					<li>
						<b>Свойство clear:</b> <br />
						Свойство clear используется для указания, на какой стороне элемента
						нельзя обтекать плавающие элементы. clear: left; означает, что
						обтекание должно начаться после левого плавающего элемента.
					</li>
				</ol>
			</p>
			<p>
				Плавающие элементы сегодня менее используются для создания макетов в
				силу появления более современных методов, таких как Flexbox и Grid.
				Однако, они все еще могут быть полезны в определенных сценариях,
				особенно для обтекания текста вокруг изображений.
			</p>
		</div>
	)
}

export default Question
