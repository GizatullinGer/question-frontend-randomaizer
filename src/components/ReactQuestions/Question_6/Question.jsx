/* eslint-disable react/jsx-no-comment-textnodes */
import React from 'react'
import { Examples } from '../../Examples/Examples'

const Question = () => {
	return (
		<div>
			<p>
				Компонент высшего порядка (Higher-Order Component, HOC) в React - это
				функция, которая принимает компонент и возвращает новый компонент.
				Основная цель HOC состоит в том, чтобы повторно использовать логику и
				функциональность между различными компонентами. Он работает как обертка
				вокруг компонента, добавляя дополнительные свойства или изменяя его
				поведение.
			</p>
			<p>Основные принципы HOC:</p>
			<p>
				<ol>
					<li>
						<b>Переиспользование кода: </b>HOC позволяет изолировать общую
						логику и функциональность, позволяя нескольким компонентам
						использовать ее без дублирования кода.
					</li>
					<li>
						<b>Декорирование компонентов: </b>HOC добавляет дополнительную
						функциональность или свойства к компоненту, не изменяя его исходный
						код напрямую.
					</li>
				</ol>
			</p>
			<p>Пример HOC может выглядеть следующим образом:</p>
			<Examples>
				import React, &#123; useEffect &#125; from 'react'; <br />
				<br />
				// Пример HOC с функциональным компонентом
				<br />
				const withLogger = (WrappedComponent) ={'>'} &#123;
				<br />
				&emsp;&emsp;return (props) ={'>'} &#123;
				<br />
				&emsp;&emsp;&emsp;&emsp;useEffect(() ={'>'} &#123;
				<br />
				&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;console.log(`Компонент
				$&#123;WrappedComponent.name&#125; отрендерен`);
				<br />
				&emsp;&emsp;&emsp;&emsp;&#125;, []);
				<br />
				<br />
				&emsp;&emsp;&emsp;&emsp;return {'<'}WrappedComponent
				&#123;...props&#125; /{'>'};<br />
				&emsp;&emsp;&#125;;
				<br />
				&#125;;
				<br />
				<br />
				// Пример функционального компонента
				<br />
				const MyFunctionalComponent = () ={'>'} &#123;
				<br />
				&emsp;&emsp;return {'<'}div{'>'}Пример функционального компонента{'<'}
				/div{'>'};
				<br />
				&#125;;
				<br />
				<br />
				const EnhancedFunctionalComponent = withLogger(MyFunctionalComponent);
				<br />
				<br />
				export default EnhancedFunctionalComponent;
			</Examples>
		</div>
	)
}

export default Question
