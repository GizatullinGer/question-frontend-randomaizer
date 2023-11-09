import React from 'react'

const Question_1 = () => {
	return (
		<div>
			<p>
				Элементы &lt;canvas&gt; и &lt;svg&gt; - это два различных подхода к
				созданию графики на веб-страницах, каждый со своими особенностями.
			</p>
			<p>Вот основные различия между &lt;canvas&gt; и &lt;svg&gt;:</p>
			<p>
				<ol>
					<li>
						<b>Графика:</b>
						<ul>
							<li>
								<b>canvas </b>используется для рисования растровой графики. Это
								позволяет рисовать пиксели и выполнить сложные операции
								рисования, включая рисование путей, изображений и анимаций при
								помощи JavaScript.
							</li>
							<li>
								<b>svg, </b>с другой стороны, представляет векторную графику,
								описывающую формы и элементы как объекты векторной графики. Это
								позволяет масштабировать изображения без потери качества.
							</li>
						</ul>
					</li>
					<li>
						<b>Создание элементов:</b>
						<ul>
							<li>
								В случае <b>&lt;canvas&gt;</b>, графика создается путем
								программного рисования. Контент на холсте <b>&lt;canvas&gt;</b>{' '}
								не является частью DOM и не доступен для манипуляций как
								отдельные объекты. Он рисуется и "замораживается" на холсте.
							</li>
							<li>
								<b>&lt;svg&gt;</b> использует элементы XML и хранит графику как
								DOM-элементы. Это позволяет легко манипулировать элементами SVG
								при помощи JavaScript.
							</li>
						</ul>
					</li>
					<li>
						<b>Использование:</b>
						<ul>
							<li>
								Если требуется создать сложные анимации, игры или сложные
								визуализации, то <b>&lt;canvas&gt;</b> может быть
								предпочтительным выбором.
							</li>
							<li>
								Для создания интерактивной и масштабируемой векторной графики,
								такой как диаграммы, графики и карты, SVG может быть более
								удобным.
							</li>
						</ul>
					</li>
					<li>
						<b>Производительность:</b>
						<ul>
							<li>
								<b>&lt;canvas&gt; </b>может быть более эффективным при обработке
								большого объема растровой графики и выполнении сложных операций
								рисования.
							</li>
							<li>
								<b>&lt;svg&gt; </b>может быть менее эффективным при обработке
								большого объема сложной векторной графики, особенно при
								выполнении большого количества изменений или анимаций.
							</li>
						</ul>
					</li>
				</ol>
			</p>
			<p>
				Выбор между <b>&lt;canvas&gt;</b> и <b>&lt;svg&gt;</b> зависит от
				конкретных потребностей проекта: если требуется создать сложную
				растровую графику или анимации, <b>&lt;canvas&gt;</b> может быть
				предпочтительным. Если же необходима векторная графика, которая может
				быть масштабирована или манипулирована, <b>&lt;svg&gt;</b> может быть
				более уместным выбором.
			</p>
		</div>
	)
}

export default Question_1