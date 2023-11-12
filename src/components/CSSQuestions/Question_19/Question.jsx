import React from 'react'

const Question = () => {
	return (
		<div>
			<p>
				Порядок наложения элементов в CSS определяется их z-индексами (z-index)
				и контекстом наложения стека (stacking context). Ниже представлен общий
				порядок наложения (stacking order) элементов, начиная с того, что
				находится "ниже" и заканчивая тем, что находится "выше" на оси Z:
			</p>
			<p>
				<ol>
					<li>
						<b>Фоновые и границы блоков: </b>Фон (background) и границы (border)
						блока отображаются ниже его содержимого.
					</li>
					<li>
						<b>Блоки с z-index: auto: </b>Элементы, у которых z-index
						установлено как auto, отображаются на уровне "обычного" потока.
					</li>
					<li>
						<b>Блоки с положительными или отсутствующими z-index: </b>Элементы,
						у которых z-index равен положительному значению или отсутствует,
						находятся выше элементов с z-index: auto.
					</li>
					<li>
						<b>Блоки с отрицательными z-index: </b>Элементы с отрицательным
						z-index находятся ниже элементов с z-index: auto и положительными
						z-index.
					</li>
					<li>
						<b>Псевдоэлементы и элементы ::before и ::after: </b>Псевдоэлементы
						отображаются ниже реальных элементов.
					</li>
					<li>
						<b>Инлайн-блоки и инлайн-элементы: </b>Инлайн-элементы и
						инлайн-блоки имеют более низкий порядок наложения по сравнению с
						блочными элементами.
					</li>
					<li>
						<b>
							Элементы с position: relative, position: absolute, position:
							fixed, или position: sticky:
						</b>
						Элементы с установленной позицией, отличной от static, имеют более
						высокий порядок наложения.
					</li>
					<li>
						<b>Флекс-контейнеры и элементы внутри флекс-контейнеров: </b>
						Элементы, являющиеся частью флекс-контейнера, находятся выше обычных
						блоков.
					</li>
					<li>
						<b>Сеточные элементы и элементы внутри сеточных контейнеров: </b>
						Элементы, являющиеся частью сеточного контейнера, находятся выше
						обычных блоков.
					</li>
					<li>
						<b>Элементы с opacity меньше 1: </b>Элементы с менее чем полной
						непрозрачностью находятся выше элементов с полной непрозрачностью.
					</li>
					<li>
						<b>Элементы с transform и filter: </b>Элементы с примененными
						трансформациями (transform) или фильтрами (filter) находятся выше
						элементов без них.
					</li>
					<li>
						<b>Элементы с mix-blend-mode: </b>Элементы с установленным свойством
						mix-blend-mode находятся выше элементов без него.
					</li>
					<li>
						<b>Элементы с clip-path или mask свойствами: </b>Элементы с
						clip-path или mask находятся выше элементов без этих свойств.
					</li>
					<li>
						<b>Окна прокрутки и прокручиваемые элементы: </b>Элементы,
						находящиеся в окне прокрутки или внутри прокручиваемых контейнеров,
						могут иметь высокий порядок наложения.
					</li>
					<li>
						<b>Фиксированные элементы: </b>Элементы с position: fixed находятся
						выше остальных элементов и обычно видны при прокрутке страницы.
					</li>
				</ol>
			</p>
		</div>
	)
}

export default Question
