import React from 'react'
import { Examples } from '../../Examples/Examples'

const Question_1 = () => {
	return (
		<div>
			<p>
				Для сверстывания картинки с подписью с семантической точки зрения, можно
				использовать теги &lt;figure&gt; и &lt;figcaption&gt;.
			</p>
			<p>Пример:</p>
			<Examples>
				&lt;figure&gt; <br /> &emsp;&emsp;&lt;img src="путь_к_изображению.jpg"
				alt="Описание изображения"&gt;
				<br /> &emsp;&emsp;&lt;figcaption&gt;Подпись к
				изображению&lt;/figcaption&gt;
				<br /> &lt;/figure&gt;
			</Examples>
			<p>Объяснение:</p>
			<ul>
				<li>
					<b>&lt;figure&gt;: </b> Оборачивает изображение и его подпись,
					создавая единый блок контента.
				</li>
				<li>
					<b>&lt;img&gt;: </b> Элемент для отображения изображения. Атрибут{' '}
					<b>src</b> указывает путь к изображению, а <b>alt</b> предоставляет
					текстовое описание изображения для случаев, когда изображение
					недоступно.
				</li>
				<li>
					<b>&lt;figcaption&gt;: </b> Элемент для определения подписи к
					изображению. Здесь размещается текстовое описание или название
					изображения.
				</li>
			</ul>
			<p>
				Это поможет улучшить доступность вашего контента, так как подпись явно
				связана с изображением, что упрощает понимание контента для поисковых
				систем и людей с ограниченными возможностями.
			</p>
		</div>
	)
}

export default Question_1
