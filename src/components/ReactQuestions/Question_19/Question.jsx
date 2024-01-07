/* eslint-disable react/jsx-no-comment-textnodes */
import React from 'react'
import { Examples } from '../../Examples/Examples'

const Question = () => {
	return (
		<div>
			<p>
				React-ссылка (ref) - это специальный объект, который используется для
				получения прямого доступа к DOM-узлам или экземплярам компонентов в
				React. Она позволяет обойти привычный подход работы React, когда данные
				обычно передаются сверху вниз через пропсы.
			</p>
			<p>
				С помощью ссылок можно получить доступ к элементам DOM или экземплярам
				компонентов, установить или изменить их свойства, вызвать методы и т.д.
				Это может быть полезно, например, для управления фокусом, измерения
				размеров элемента, выполнения анимаций и других манипуляций с DOM.
			</p>
			<h3>Создание ссылки:</h3>
			<p>
				В функциональных компонентах можно использовать хук <b>useRef</b>, а в
				классовых компонентах - свойство <b>ref</b>.
			</p>
			<p>В функциональных компонентах:</p>
			<Examples>
				import React, &#123; useRef &#125; from 'react';
				<br />
				<br />
				const MyComponent = () ={'>'} &#123;
				<br />
				&emsp;&emsp;const myRef = useRef(null);
				<br />
				<br />
				&emsp;&emsp;const handleClick = () ={'>'} &#123;
				<br />
				&emsp;&emsp;&emsp;&emsp;// Пример доступа к DOM-узлу с помощью ссылки
				<br />
				&emsp;&emsp;&emsp;&emsp;if (myRef.current) &#123;
				<br />
				&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;myRef.current.focus();
				<br />
				&emsp;&emsp;&emsp;&emsp;&#125;
				<br />
				&emsp;&emsp;&#125;;
				<br />
				<br />
				&emsp;&emsp;return (<br />
				&emsp;&emsp;&emsp;&emsp;{'<'}div{'>'}
				<br />
				&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;{'<'}input ref=&#123;myRef&#125; /
				{'>'}
				<br />
				&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;{'<'}button
				onClick=&#123;handleClick&#125;{'>'}Фокус на поле ввода{'<'}/button{'>'}
				<br />
				&emsp;&emsp;&emsp;&emsp;{'<'}/div{'>'}
				<br />
				&emsp;&emsp;);
				<br />
				&#125;;
			</Examples>
			<p>
				Обратите внимание, что <b>useRef</b> создают объект ссылки, который
				содержит свойство current. Это свойство содержит актуальный DOM-узел или
				экземпляр компонента, на который ссылается ссылка.
			</p>
			<p>
				Использование ссылок следует минимизировать и использовать с
				осторожностью, так как они нарушают типичный подход React, основанный на
				управлении состоянием и данными через пропсы. Однако они могут быть
				полезны для выполнения определенных задач, которые требуют прямого
				доступа к DOM или экземплярам компонентов.
			</p>
		</div>
	)
}

export default Question
