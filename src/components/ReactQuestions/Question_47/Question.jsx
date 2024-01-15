/* eslint-disable react/jsx-no-comment-textnodes */
import React from 'react'
import { Examples } from '../../Examples/Examples'

const Question = () => {
	return (
		<div>
			<p>
				<b>useReducer</b> - это один из хуков в React, предназначенный для
				управления состоянием компонентов на основе более сложной логики, чем
				просто <b>useState</b>. Этот хук позволяет более явно и контролируемо
				обрабатывать изменения состояния, особенно когда оно зависит от
				предыдущего состояния.
			</p>
			<p>
				Синтаксис <b>useReducer</b> выглядит следующим образом:
			</p>
			<Examples>
				const [state, dispatch] = useReducer(reducer, initialState);
			</Examples>
			<ul>
				<li>
					<b>state</b>: Текущее состояние.
				</li>
				<li>
					<b>dispatch</b>: Функция, которая отправляет действие (action) для
					обновления состояния.
				</li>
				<li>
					<b>reducer</b>: Функция-редуктор, которая определяет, как состояние
					обновляется в ответ на действие.
				</li>
				<li>
					<b>initialState</b>: Начальное состояние.
				</li>
			</ul>
			<p>
				Пример использования <b>useReducer</b>:
			</p>
			<Examples>
				import React, &#123; useReducer &#125; from 'react';
				<br />
				<br />
				// Пример редуктора
				<br />
				const reducer = (state, action) ={'>'} &#123;
				<br />
				&emsp;&emsp;switch (action.type) &#123;
				<br />
				&emsp;&emsp;&emsp;&emsp;case 'INCREMENT':
				<br />
				&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;return &#123; count: state.count + 1
				&#125;;
				<br />
				&emsp;&emsp;&emsp;&emsp;case 'DECREMENT':
				<br />
				&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;return &#123; count: state.count - 1
				&#125;;
				<br />
				&emsp;&emsp;&emsp;&emsp;default:
				<br />
				&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;return state;
				<br />
				&emsp;&emsp;&#125;
				<br />
				&#125;;
				<br />
				<br />
				// Пример компонента с useReducer
				<br />
				const Counter = () ={'>'} &#123;
				<br />
				&emsp;&emsp;const [state, dispatch] = useReducer(reducer, &#123; count:
				0 &#125;);
				<br />
				<br />
				&emsp;&emsp;return (<br />
				&emsp;&emsp;&emsp;&emsp;{'<'}div{'>'}
				<br />
				&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;{'<'}p{'>'}Count:
				&#123;state.count&#125;{'<'}/p{'>'}
				<br />
				&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;{'<'}button onClick=&#123;() ={'>'}{' '}
				dispatch(&#123; type: 'INCREMENT' &#125;)&#125;{'>'}Increment{'<'}
				/button{'>'}
				<br />
				&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;{'<'}button onClick=&#123;() ={'>'}{' '}
				dispatch(&#123; type: 'DECREMENT' &#125;)&#125;{'>'}Decrement{'<'}
				/button{'>'}
				<br />
				&emsp;&emsp;&emsp;&emsp;{'<'}/div{'>'}
				<br />
				&emsp;&emsp;);
				<br />
				&#125;;
				<br />
				<br />
				export default Counter;
			</Examples>
			<p>В этом примере:</p>
			<ul>
				<li>
					<b>reducer</b> - это функция, которая принимает текущее состояние и
					действие (action) и возвращает новое состояние.
				</li>
				<li>
					<b>useReducer</b> используется для создания состояния state и функции
					dispatch, которая позволяет отправлять действия редуктору.
				</li>
				<li>
					dispatch(&#123; type: 'INCREMENT' &#125;) и dispatch(&#123; type:
					'DECREMENT' &#125;) отправляют действия редуктору для обновления
					состояния.
				</li>
			</ul>
			<p>
				<b>useReducer</b> особенно полезен, когда у вас есть сложная логика
				обновления состояния или когда состояние зависит от предыдущего
				состояния. В отличие от <b>useState</b>, где обновление состояния
				осуществляется напрямую, useReducer обеспечивает более явное и
				структурированное управление состоянием.
			</p>
		</div>
	)
}

export default Question
