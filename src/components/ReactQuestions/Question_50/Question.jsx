/* eslint-disable react/jsx-no-comment-textnodes */
import React from 'react'
import { Examples } from '../../Examples/Examples'

const Question = () => {
	return (
		<div>
			<ol>
				<li>
					<b>useCallback(callback, dependencies)</b>
					<p>
						<b>Цель: </b>
						<b>useCallback</b> предназначен для мемоизации функций, чтобы они не
						создавались заново при каждом рендеринге компонента.
					</p>
					<p>
						<b>Пример:</b>
					</p>
					<Examples>
						import React, &#123; useCallback, useState &#125; from 'react';{' '}
						<br />
						<br />
						const MyComponent = () ={'>'} &#123;
						<br />
						&emsp;&emsp;const [count, setCount] = useState(0);
						<br />
						<br />
						&emsp;&emsp;const handleClick = useCallback(() ={'>'} &#123;
						<br />
						&emsp;&emsp;&emsp;&emsp;setCount(count + 1);
						<br />
						&emsp;&emsp;&#125;, [count]);
						<br />
						<br />
						&emsp;&emsp;return (<br />
						&emsp;&emsp;&emsp;&emsp;{'<'}div{'>'}
						<br />
						&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;{'<'}p{'>'}Count:
						&#123;count&#125;{'<'}/p{'>'}
						<br />
						&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;{'<'}button
						onClick=&#123;handleClick&#125;{'>'}Increment{'<'}/button{'>'}
						<br />
						&emsp;&emsp;&emsp;&emsp;{'<'}/div{'>'}
						<br />
						&emsp;&emsp;);
						<br />
						&#125;;
					</Examples>
				</li>
				<li>
					<b>useMemo(factory, dependencies)</b>
					<p>
						<b>Цель: </b>
						<b>useMemo</b> мемоизирует результат выполнения функции (фабрики),
						чтобы избежать повторных вычислений при каждом рендеринге
						компонента.
					</p>
					<p>
						<b>Пример:</b>
					</p>
					<Examples>
						import React, &#123; useMemo, useState &#125; from 'react';
						<br />
						<br />
						const MyComponent = () ={'>'} &#123;
						<br />
						&emsp;&emsp;const [value, setValue] = useState(10);
						<br />
						<br />
						&emsp;&emsp;const squaredValue = useMemo(() ={'>'} &#123;
						<br />
						&emsp;&emsp;&emsp;&emsp;return value * value;
						<br />
						&emsp;&emsp;&#125;, [value]);
						<br />
						<br />
						&emsp;&emsp;return (<br />
						&emsp;&emsp;&emsp;&emsp;{'<'}div{'>'}
						<br />
						&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;{'<'}p{'>'}Value:
						&#123;value&#125;{'<'}/p{'>'}
						<br />
						&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;{'<'}p{'>'}Squared Value:
						&#123;squaredValue&#125;{'<'}/p{'>'}
						<br />
						&emsp;&emsp;&emsp;&emsp;{'<'}/div{'>'}
						<br />
						&emsp;&emsp;);
						<br />
						&#125;;
					</Examples>
				</li>
				<li>
					<b>useImperativeHandle(ref, createHandle, dependencies)</b>
					<p>
						<b>Цель: </b>
						<b>useImperativeHandle</b> позволяет контролировать, какие значения
						передаются во внешний API компонента, когда он используется с
						forwardRef.
					</p>
					<p>
						<b>Пример:</b>
					</p>
					<Examples>
						import React, &#123; useImperativeHandle, forwardRef &#125; from
						'react';
						<br />
						<br />
						const MyComponent = forwardRef((props, ref) ={'>'} &#123;
						<br />
						&emsp;&emsp;const internalValue = 'Internal Value';
						<br />
						<br />
						&emsp;&emsp;useImperativeHandle(ref, () ={'>'} (&#123;
						<br />
						&emsp;&emsp;&emsp;&emsp;getValue: () ={'>'} internalValue,
						<br />
						&emsp;&emsp;&#125;), [internalValue]);
						<br />
						<br />
						&emsp;&emsp;return (<br />
						&emsp;&emsp;&emsp;&emsp;// Рендеринг компонента
						<br />
						&emsp;&emsp;);
						<br />
						&#125;);
						<br />
						<br />
						// Использование компонента с forwardRef
						<br />
						const parentComponent = () ={'>'} &#123;
						<br />
						&emsp;&emsp;const myComponentRef = useRef(null);
						<br />
						<br />
						&emsp;&emsp;useEffect(() ={'>'} &#123;
						<br />
						&emsp;&emsp;&emsp;&emsp;console.log(myComponentRef.current.getValue());
						// Выведет 'Internal Value'
						<br />
						&emsp;&emsp;&#125;, []);
						<br />
						<br />
						&emsp;&emsp;return {'<'}MyComponent ref=&#123;myComponentRef&#125; /
						{'>'};<br />
						&#125;;
					</Examples>
				</li>
				<li>
					<b>useLayoutEffect(callback, dependencies)</b>
					<p>
						<b>Цель: </b>
						<b>useLayoutEffect</b> похож на useEffect, но запускается синхронно
						после всех изменений в DOM, что делает его подходящим для
						манипуляций с DOM, которые требуют синхронного выполнения.
					</p>
					<p>
						<b>Пример:</b>
					</p>
					<Examples>
						import React, &#123; useLayoutEffect, useState &#125; from 'react';{' '}
						<br />
						<br />
						const MyComponent = () ={'>'} &#123;
						<br />
						&emsp;&emsp;const [width, setWidth] = useState(0);
						<br />
						<br />
						&emsp;&emsp;useLayoutEffect(() ={'>'} &#123;
						<br />
						&emsp;&emsp;&emsp;&emsp;const handleResize = () ={'>'} &#123;
						<br />
						&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;setWidth(window.innerWidth);
						<br />
						&emsp;&emsp;&emsp;&emsp;&#125;;
						<br />
						<br />
						&emsp;&emsp;&emsp;&emsp;window.addEventListener('resize',
						handleResize);
						<br />
						&emsp;&emsp;&emsp;&emsp;handleResize(); // Инициализация ширины
						<br />
						<br />
						&emsp;&emsp;&emsp;&emsp;return () ={'>'} &#123;
						<br />
						&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;window.removeEventListener('resize',
						handleResize);
						<br />
						&emsp;&emsp;&emsp;&emsp;&#125;;
						<br />
						&emsp;&emsp;&#125;, []); // [] означает, что эффект будет запущен
						только при монтировании
						<br />
						<br />
						&emsp;&emsp;return (<br />
						&emsp;&emsp;&emsp;&emsp;{'<'}div{'>'}
						<br />
						&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;{'<'}p{'>'}Window Width:
						&#123;width&#125;{'<'}/p{'>'}
						<br />
						&emsp;&emsp;&emsp;&emsp;{'<'}/div{'>'}
						<br />
						&emsp;&emsp;);
						<br />
						&#125;;
					</Examples>
				</li>
			</ol>
		</div>
	)
}

export default Question
