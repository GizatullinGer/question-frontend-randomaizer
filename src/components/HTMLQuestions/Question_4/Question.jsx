import React from 'react'
import { Examples } from '../../Examples/Examples'

const Question_1 = () => {
	return (
		<div>
			<p>
				В HTML5 существует три основные категории контента, которые помогают
				определить основное назначение и семантику элементов на веб-странице.
				Эти категории являются основными и наиболее часто используемыми.
			</p>
			<ul>
				<li>
					<b>`text/html`</b> - Эта категория указывает, что контент страницы
					является обычным текстом и HTML-разметкой. Она используется для
					большинства веб-страниц, которые представляют собой структурированный
					текст с использованием HTML-тегов для форматирования и стилизации.
					<Examples>
						&lt;meta http-equiv="Content-Type" content="text/html;
						charset=UTF-8"&gt;
					</Examples>
				</li>
				<li>
					<b>`text/plain`</b> - Определяет, что контент страницы является
					обычным текстом без использования HTML-разметки. Она используется,
					когда нужно представить чистый текст без дополнительной разметки.
					<Examples>
						&lt;meta http-equiv="Content-Type" content="text/plain;
						charset=UTF-8"&gt;
					</Examples>
				</li>
				<li>
					<b>`application/xhtml+xml`</b> - Определяет, что контент страницы
					является XML-документом, использующим синтаксис XHTML. XHTML - это
					более строгий и расширенный вариант HTML, который следует правилам
					XML.
					<Examples>
						&lt;meta http-equiv="Content-Type" content="application/xhtml+xml;
						charset=UTF-8&gt;
					</Examples>
				</li>
			</ul>
		</div>
	)
}

export default Question_1
