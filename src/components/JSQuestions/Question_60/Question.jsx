/* eslint-disable react/jsx-no-comment-textnodes */
import React from 'react'
import { Examples } from '../../Examples/Examples'

const Question = () => {
	return (
		<div>
			<p>
				Полифил (Polyfill) - это техника в веб-разработке, которая позволяет
				использовать новые возможности языка (обычно JavaScript) или API в
				браузерах, которые не поддерживают эти функции, добавляя собственную
				реализацию стандартных функций.
			</p>
			<p>
				Основная цель полифилов - обеспечить совместимость кода между различными
				браузерами, предоставляя функциональность, которая может отсутствовать в
				старых или менее современных версиях браузеров.
			</p>
			<p>
				Например, если новая версия JavaScript представляет новый метод или
				функцию, которая может не поддерживаться в старых версиях браузеров,
				разработчики могут создать полифил, который реализует эту функцию в этих
				старых браузерах.
			</p>
			<p>
				Пример полифила для метода Array.prototype.includes(), который проверяет
				наличие элемента в массиве:
			</p>
			<Examples>
				// Полифил для Array.prototype.includes() для старых браузеров
				<br />
				if (!Array.prototype.includes) &#123;
				<br />
				&emsp;&emsp;Array.prototype.includes = function(searchElement,
				fromIndex) &#123;
				<br />
				&emsp;&emsp;&emsp;&emsp;if (this == null) &#123;
				<br />
				&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;throw new TypeError('"this" is null
				or not defined');
				<br />
				&emsp;&emsp;&emsp;&emsp;&#125;
				<br />
				<br />
				&emsp;&emsp;&emsp;&emsp;var array = Object(this);
				<br />
				&emsp;&emsp;&emsp;&emsp;var length = array.length &gt;&gt;&gt; 0;
				<br />
				&emsp;&emsp;&emsp;&emsp;var startIndex = fromIndex || 0;
				<br />
				<br />
				&emsp;&emsp;&emsp;&emsp;while (startIndex &lt; length) &#123;
				<br />
				&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;if (array[startIndex] ===
				searchElement) &#123;
				<br />
				&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;return true;
				<br />
				&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&#125;
				<br />
				&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;startIndex++;
				<br />
				&emsp;&emsp;&emsp;&emsp;&#125;
				<br />
				&emsp;&emsp;&emsp;&emsp;return false;
				<br />
				&emsp;&emsp;&#125;;
				<br />
				&#125;
			</Examples>
			<p>
				Этот полифил проверяет, поддерживает ли браузер метод{' '}
				<b>Array.prototype.includes()</b>. Если метод отсутствует (то есть{' '}
				<b>!Array.prototype.includes</b>), он добавляет его реализацию, чтобы
				обеспечить поддержку этого метода в старых браузерах.
			</p>
			<p>
				Полифилы помогают разработчикам писать код, используя современные
				возможности языка, и при этом обеспечивать совместимость с более старыми
				версиями браузеров или средами выполнения. Однако стоит учитывать, что
				использование полифилов может добавлять небольшую нагрузку на
				производительность и увеличивать размер кодовой базы, поэтому иногда
				нужно оценить пользу от использования полифилов.
			</p>
		</div>
	)
}

export default Question
