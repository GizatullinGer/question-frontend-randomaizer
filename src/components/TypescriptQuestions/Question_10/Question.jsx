import React from 'react'
import { Examples } from '../../Examples/Examples'

const Question = () => {
	return (
		<div>
			<p>
				JSX (JavaScript XML) - это расширение синтаксиса JavaScript,
				используемое в React (и не только) для создания элементов
				пользовательского интерфейса. JSX позволяет писать HTML-подобный код в
				JavaScript-файлах.
			</p>
			<p>
				В TypeScript, как и в JavaScript, JSX-элементы могут быть встроены в код
				с использованием синтаксиса, напоминающего разметку HTML. Однако
				TypeScript предоставляет поддержку для работы с JSX и позволяет
				определить типы данных, которые могут использоваться внутри JSX.
			</p>
			<h3 style={{ marginBottom: '0px' }}>
				Режимы JSX, поддерживаемые TypeScript:
			</h3>
			<p style={{ paddingTop: '0px' }}>
				<ol>
					<li>
						<b>TSX (TypeScript + JSX): </b>TSX-режим позволяет использовать JSX
						в файлах TypeScript, где разметка и JavaScript объединены вместе.
						Файлы с расширением <b>.tsx</b> используют этот режим.
					</li>
					<li>
						<b>React JSX: </b>Это режим JSX, ориентированный на
						React-приложения, где используется синтаксис JSX для создания
						React-элементов. В этом режиме TypeScript распознает и автоматически
						типизирует React-специфичные ключевые слова и структуры данных,
						такие как <b>JSX.Element</b>.
					</li>
				</ol>
			</p>
			<p>
				При работе с JSX в TypeScript можно встретить следующие особенности:
			</p>
			<p>
				<ul>
					<li>
						Необходимость импортирования React, если используются JSX-элементы
						(например: <b>import React from 'react'</b>).
					</li>
					<li>
						Возможность определения типов для элементов JSX, свойств и состояний
						компонентов.
					</li>
					<li>
						Проверка типов в JSX для обеспечения согласованности и соответствия
						типов.
					</li>
				</ul>
			</p>
			<p>Пример использования JSX в TypeScript:</p>
			<Examples>
				import * as React from 'react';
				<br />
				<br />
				type Props = &#123;
				<br />
				&emsp;&emsp;name: string;
				<br />
				&#125;;
				<br />
				<br />
				const MyComponent: React.FC&lt;Props&gt; = (&#123; name &#125;) =&gt;
				&#123;
				<br />
				&emsp;&emsp;return &lt;div&gt;Hello, &#123;name&#125;!&lt;/div&gt;;
				<br />
				&#125;;
				<br />
				<br />
				export default MyComponent;
			</Examples>
			<p>
				Здесь, <b>&lt;div&gt;Hello, &#123;name&#125;!&lt;/div&gt;</b> - это
				JSX-выражение, которое создает элемент <b>&lt;div&gt;</b> для
				отображения текста. TypeScript позволяет типизировать <b>Props</b> для
				компонента <b>MyComponent</b> и обеспечивает проверку типов при работе с
				JSX.
			</p>
		</div>
	)
}

export default Question
