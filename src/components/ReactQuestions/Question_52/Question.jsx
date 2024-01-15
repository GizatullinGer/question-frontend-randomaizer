/* eslint-disable react/jsx-no-comment-textnodes */
import React from 'react'
import { Examples } from '../../Examples/Examples'

const Question = () => {
	return (
		<div>
			<p>
				В React, когда вы обновляете состояние компонента с использованием{' '}
				<b>setState()</b>, передача функции вместо объекта может быть важной
				особенностью, особенно если новое состояние зависит от текущего
				состояния.
			</p>
			<Examples>
				import React, &#123; useState &#125; from 'react';
				<br />
				<br />
				const MyComponent = () ={'>'} &#123;
				<br />
				&emsp;&emsp;const [count, setCount] = useState(0);
				<br />
				<br />
				&emsp;&emsp;// Неправильный способ, особенно при многократных вызовах
				<br />
				&emsp;&emsp;// setCount(count + 1);
				<br />
				<br />
				&emsp;&emsp;// Правильный способ, используя функцию
				<br />
				&emsp;&emsp;setCount((prevCount) ={'>'} prevCount + 1);
				<br />
				<br />
				&emsp;&emsp;return (<br />
				&emsp;&emsp;&emsp;&emsp;{'<'}div{'>'}
				<br />
				&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;{'<'}p{'>'}Count: &#123;count&#125;
				{'<'}/p{'>'}
				<br />
				&emsp;&emsp;&emsp;&emsp;{'<'}/div{'>'}
				<br />
				&emsp;&emsp;);
				<br />
				&#125;;
				<br />
				<br />
				export default MyComponent;
			</Examples>
			<ol>
				<li>
					<b>Асинхронность setState: </b> <b>setState</b> может быть
					асинхронным, и React может объединять несколько вызовов setState для
					повышения производительности. Когда вы используете функцию, React
					гарантирует, что вы получите последнее актуальное значение состояния.
				</li>
				<li>
					<b>Предотвращение перезаписи состояния: </b>Если новое состояние
					зависит от текущего состояния, использование функции позволяет
					избежать ошибок при перезаписи состояния. Функция возвращает новый
					объект состояния, основанный на предыдущем состоянии.
				</li>
			</ol>
			<p>
				Важно отметить, что использование функции в setState особенно важно,
				когда новое состояние зависит от текущего состояния, и вы хотите
				избежать ошибок в асинхронной среде работы с состоянием React.
			</p>
		</div>
	)
}

export default Question
