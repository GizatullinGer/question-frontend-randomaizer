import React from 'react'
import { Examples } from '../../Examples/Examples'

const Question = () => {
	return (
		<div>
			<p>
				Условный рендеринг (Conditional Rendering) в React означает вывод
				разного содержимого в зависимости от определенных условий или состояний
				вашего приложения. Это позволяет динамически отображать различные
				элементы на основе значений переменных, состояний компонентов или
				результатов вычислений.
			</p>
			<p>
				Вы можете выполнить условный рендеринг в React, используя различные
				подходы:
			</p>
			<h3>1. Использование оператора if/else в методе render():</h3>
			<Examples>
				import React from 'react';
				<br />
				<br />
				const MyComponent = (&#123; isLoggedIn &#125;) ={'>'} &#123;
				<br />
				&emsp;&emsp;if (isLoggedIn) &#123;
				<br />
				&emsp;&emsp;&emsp;&emsp;return {'<'}LoggedInComponent /{'>'};<br />
				&emsp;&emsp;&#125; else &#123;
				<br />
				&emsp;&emsp;&emsp;&emsp;return {'<'}LoggedOutComponent /{'>'};<br />
				&emsp;&emsp;&#125;
				<br />
				&#125;;
			</Examples>
			<h3>2. Тернарный оператор в JSX:</h3>
			<Examples>
				import React from 'react';
				<br />
				<br />
				const MyComponent = (&#123; isLoggedIn &#125;) ={'>'} &#123;
				<br />
				&emsp;&emsp;return (<br />
				&emsp;&emsp;&emsp;&emsp;{'<'}div{'>'}
				<br />
				&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&#123;isLoggedIn ? {'<'}
				LoggedInComponent /{'>'} : {'<'}LoggedOutComponent /{'>'}&#125;
				<br />
				&emsp;&emsp;&emsp;&emsp;{'<'}/div{'>'}
				<br />
				&emsp;&emsp;);
				<br />
				&#125;;
			</Examples>
			<h3>3. Логическое исчезновение (Logical Short-circuit):</h3>
			<Examples>
				import React from 'react';
				<br />
				<br />
				const MyComponent = (&#123; isLoggedIn &#125;) ={'>'} &#123;
				<br />
				&emsp;&emsp;return (<br />
				&emsp;&emsp;&emsp;&emsp;{'<'}div{'>'}
				<br />
				&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&#123;isLoggedIn && {'<'}
				LoggedInComponent /{'>'}&#125;
				<br />
				&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&#123;!isLoggedIn && {'<'}
				LoggedOutComponent /{'>'}&#125;
				<br />
				&emsp;&emsp;&emsp;&emsp;{'<'}/div{'>'}
				<br />
				&emsp;&emsp;);
				<br />
				&#125;;
			</Examples>
			<h3>4. Использование условных операторов за пределами JSX:</h3>
			<Examples>
				import React from 'react';
				<br />
				<br />
				const MyComponent = (&#123; isLoggedIn &#125;) ={'>'} &#123;
				<br />
				&emsp;&emsp;let componentToRender;
				<br />
				<br />
				&emsp;&emsp;if (isLoggedIn) &#123;
				<br />
				&emsp;&emsp;&emsp;&emsp;componentToRender = {'<'}LoggedInComponent /
				{'>'};<br />
				&emsp;&emsp;&#125; else &#123;
				<br />
				&emsp;&emsp;&emsp;&emsp;componentToRender = {'<'}LoggedOutComponent /
				{'>'};<br />
				&emsp;&emsp;&#125;
				<br />
				<br />
				&emsp;&emsp;return {'<'}div{'>'}&#123;componentToRender&#125;{'<'}/div
				{'>'};<br />
				&#125;;
			</Examples>
			<h3>Пример использования состояния для условного рендеринга:</h3>
			<Examples>
				import React, &#123; useState &#125; from 'react';
				<br />
				<br />
				const MyComponent = () ={'>'} &#123;
				<br />
				&emsp;&emsp;const [isLoggedIn, setIsLoggedIn] = useState(false);
				<br />
				<br />
				&emsp;&emsp;const toggleLogin = () ={'>'} &#123;
				<br />
				&emsp;&emsp;&emsp;&emsp;setIsLoggedIn(prevState ={'>'} !prevState);
				<br />
				&emsp;&emsp;&#125;;
				<br />
				<br />
				&emsp;&emsp;return (<br />
				&emsp;&emsp;&emsp;&emsp;{'<'}div{'>'}
				<br />
				&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;{'<'}button
				onClick=&#123;toggleLogin&#125;{'>'}
				<br />
				&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&#123;isLoggedIn ?
				'Logout' : 'Login'&#125;
				<br />
				&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;{'<'}/button{'>'}
				<br />
				&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&#123;isLoggedIn ? {'<'}
				LoggedInComponent /{'>'} : {'<'}LoggedOutComponent /{'>'}&#125;
				<br />
				&emsp;&emsp;&emsp;&emsp;{'<'}/div{'>'}
				<br />
				&emsp;&emsp;);
				<br />
				&#125;;
			</Examples>
			<p>
				Эти методы позволяют динамически изменять содержимое компонента на
				основе различных условий или состояний, что делает условный рендеринг
				важной частью работы с React, особенно при построении интерфейсов,
				зависящих от действий пользователя или внешних данных.
			</p>
		</div>
	)
}

export default Question
