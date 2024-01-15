import React from 'react'
import { Examples } from '../../Examples/Examples'

const Question = () => {
	return (
		<div>
			<p>
				В контексте React "ленивая" функция относится к концепции ленивой
				загрузки (Lazy Loading). Ленивая загрузка позволяет отложить загрузку
				определенной части кода или компонента до момента, когда она фактически
				понадобится, что может улучшить производительность вашего приложения,
				особенно при больших объемах кода.
			</p>
			<p>
				В React, функция React.lazy() позволяет загружать компоненты
				динамически, только когда они нужны. Она используется совместно с
				функцией Suspense, которая позволяет обработать ожидание загрузки
				ленивого компонента.
			</p>
			<h3>Пример использования React.lazy() и Suspense:</h3>
			<Examples>
				import React, &#123; Suspense &#125; from 'react';
				<br />
				<br />
				const LazyComponent = React.lazy(() ={'>'} import('./LazyComponent'));
				<br />
				<br />
				function MyComponent() &#123;
				<br />
				&emsp;&emsp;return (<br />
				&emsp;&emsp;&emsp;&emsp;{'<'}div{'>'}
				<br />
				&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;{'<'}Suspense fallback=&#123;{'<'}
				div{'>'}Загрузка...{'<'}/div{'>'}&#125;{'>'}
				<br />
				&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;{'<'}LazyComponent /
				{'>'}
				<br />
				&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;{'<'}/Suspense{'>'}
				<br />
				&emsp;&emsp;&emsp;&emsp;{'<'}/div{'>'}
				<br />
				&emsp;&emsp;);
				<br />
				&#125;
				<br />
				<br />
				export default MyComponent;
			</Examples>
			<p>
				В этом примере <b>LazyComponent</b> будет загружаться только тогда,
				когда <b>MyComponent</b> будет рендериться. Когда компонент{' '}
				<b>LazyComponent</b> загружается, он будет отображать{' '}
				<b>
					{'<'}Suspense{'>'}
				</b>{' '}
				с элементом <b>fallback</b>, который отобразится во время ожидания
				загрузки.
			</p>
			<p>
				Это особенно полезно, когда вы имеете большие компоненты или весьма
				объемные библиотеки, которые не обязательно нужны при первоначальной
				загрузке приложения. Ленивая загрузка помогает уменьшить начальную
				загрузку вашего приложения, улучшая время загрузки и производительность
				за счет оптимизации загрузки ресурсов.
			</p>
		</div>
	)
}

export default Question
