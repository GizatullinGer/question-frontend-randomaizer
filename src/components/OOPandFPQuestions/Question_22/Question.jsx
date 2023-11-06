import React from 'react'
import { Examples } from '../../Examples/Examples'

const Question = () => {
	return (
		<div>
			<p>
				В контексте JavaScript, композиция - это метод комбинирования
				функциональности нескольких объектов для создания нового объекта или
				функции. В отличие от наследования, где один объект наследует
				функциональность другого, композиция использует различные функции или
				объекты, чтобы создать новую функциональность.
			</p>
			<p>Композиция в JavaScript может быть достигнута различными способами:</p>
			<h3>1. Композиция функций:</h3>
			<p>Это комбинирование функций для создания новой функциональности.</p>
			<p>Пример:</p>
			<Examples>
				const scream = (text) =&gt; text.toUpperCase();
				<br />
				const emphasize = (text) =&gt; `!!! $&#123;text&#125; !!!`;
				<br />
				<br />
				const loudEmphasis = (text) =&gt; emphasize(scream(text));
				<br />
				<br />
				console.log(loudEmphasis('hello')); // Выведет: "!!! HELLO !!!"
			</Examples>
			<h3>2. Композиция объектов:</h3>
			<p>
				Это объединение функций из различных объектов для создания нового
				объекта с желаемой функциональностью.
			</p>
			<p>Пример:</p>
			<Examples>
				const canSwim = &#123;
				<br />
				&emsp;&emsp;swim() &#123;
				<br />
				&emsp;&emsp;&emsp;&emsp;console.log('Swimming!');
				<br />
				&emsp;&emsp;&#125;
				<br />
				&#125;;
				<br />
				<br />
				const canFly = &#123;
				<br />
				&emsp;&emsp;fly() &#123;
				<br />
				&emsp;&emsp;&emsp;&emsp;console.log('Flying!');
				<br />
				&emsp;&emsp;&#125;
				<br />
				&#125;;
				<br />
				<br />
				const swimmingBird = Object.assign(&#123;&#125;, canSwim, canFly);
				<br />
				<br />
				swimmingBird.swim(); // Выведет: "Swimming!"
				<br />
				swimmingBird.fly(); // Выведет: "Flying!"
			</Examples>
			<h3>3. Композиция функций через функциональные подходы:</h3>
			<p>Использование функций высшего порядка для комбинирования функций.</p>
			<p>Пример:</p>
			<Examples>
				const scream = (text) =&gt; text.toUpperCase();
				<br />
				const emphasize = (text) =&gt; `!!! $&#123;text&#125; !!!`;
				<br />
				<br />
				const compose = (...functions) =&gt; (input) =&gt;
				<br />
				&emsp;&emsp;functions.reduce((acc, func) =&gt; func(acc), input);
				<br />
				<br />
				const loudEmphasis = compose(emphasize, scream);
				<br />
				<br />
				console.log(loudEmphasis('hello')); // Выведет: "!!! HELLO !!!"
			</Examples>
			<p>
				Композиция в JavaScript предоставляет способы гибкого объединения
				функциональности, позволяя создавать новые функции или объекты,
				используя функции или объекты, которые предоставляют нужную
				функциональность. Это помогает управлять сложностью и создавать чистый и
				модульный код.
			</p>
		</div>
	)
}

export default Question
