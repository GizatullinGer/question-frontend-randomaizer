import React from 'react'
import { Examples } from '../../Examples/Examples'

const Question = () => {
	return (
		<div>
			<p>
				<b>:has()</b> — это CSS-псевдокласс родительского селектора. Другими
				словами, с помощью :has() можно изменить родительский элемент,
				содержащий определённый дочерний элемент либо элемент, следующий за ним.
			</p>
			<h3>Как использовать CSS-селектор :has()?</h3>
			<p>
				Рассмотрим следующий HTML-код с двумя родственными элементами с классом
				everybody. Как бы вы выбрали тот, у которого есть потомок с классом
				a-good-time?
			</p>
			<Examples>
				&lt;div class="everybody"&gt;
				<br />
				&emsp;&emsp;&lt;div&gt;
				<br />
				&emsp;&emsp;&emsp;&emsp;&lt;div class="a-good-time"&gt;&lt;/div&gt;
				<br />
				&emsp;&emsp;&lt;/div&gt;
				<br />
				&lt;/div&gt;
				<br />
				<br />
				&lt;div class="everybody"&gt;&lt;/div&gt;
			</Examples>
			С CSS-селектором :has() это можно реализовать следующим образом:
			<Examples>
				.everybody:has(.a-good-time) &#123;
				<br />
				&emsp;&emsp;animation: party 21600s forwards;
				<br />
				&#125;
			</Examples>
			<p>
				Это выбирает первый экземпляр .everybody и применяет к нему animation. В
				этом примере целью является элемент с классом everybody. Условием
				является наличие потомка с классом a-good-time.
			</p>
		</div>
	)
}

export default Question
