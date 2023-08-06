import React from 'react'

const Question = () => {
	return (
		<div>
			<p>
				В CSS есть несколько типов позиционирования, которые позволяют
				контролировать расположение элементов на веб-странице. Вот основные типы
				позиционирования:
			</p>
			<ul>
				<li>
					<b>Статическое позиционирование (Static Positioning): </b>Это тип
					позиционирования, который применяется к элементам по умолчанию.
					Элементы с статическим позиционированием располагаются в потоке
					документа, и их положение определяется обычным потоком разметки.
					Использование статического позиционирования часто не требует
					дополнительных свойств.
				</li>
				<li>
					<b>Относительное позиционирование (Relative Positioning): </b>Этот тип
					позиционирования позволяет смещать элемент относительно его исходного
					местоположения в потоке документа. Когда вы применяете относительное
					позиционирование, вы можете использовать свойства top, right, bottom и
					left для управления смещением элемента. При этом остальные элементы
					продолжают занимать место в потоке документа, как если бы элемент не
					был смещен.
				</li>
				<li>
					<b>Абсолютное позиционирование (Absolute Positioning): </b>Абсолютное
					позиционирование позволяет точно определить местоположение элемента
					относительно его ближайшего родителя с нестандартным позиционированием
					(не static) или относительно самого окна браузера, если родительские
					элементы не имеют нестандартного позиционирования. Элемент с
					абсолютным позиционированием удаляется из потока документа, и его
					позиция зависит от свойств top, right, bottom и left.
				</li>
				<li>
					<b>Фиксированное позиционирование (Fixed Positioning): </b>
					Фиксированное позиционирование делает элемент фиксированным
					относительно окна браузера. Это означает, что элемент остается на
					одном и том же месте на экране, даже если пользователь прокручивает
					страницу. С помощью свойств top, right, bottom и left можно задавать
					позицию элемента.
				</li>
				<li>
					<b>Страницы абсолютного позиционирования (Sticky Positioning): </b>
					Этот тип позиционирования сочетает свойства абсолютного и
					относительного позиционирования. Элемент с "липким" позиционированием
					ведет себя как позиционирование относительно его родителя, пока он
					находится в пределах определенной области, и переходит в абсолютное
					позиционирование, когда пользователь прокручивает страницу за пределы
					этой области.
				</li>
			</ul>
		</div>
	)
}

export default Question
