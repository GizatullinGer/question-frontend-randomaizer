/* eslint-disable react/jsx-no-comment-textnodes */
import React from 'react'
import { Examples } from '../../Examples/Examples'

const Question = () => {
	return (
		<div>
			<p>
				Портал (Portal) в React - это механизм, который позволяет рендерить
				дочерние элементы внутри компонента в DOM-узле, который находится вне их
				иерархии компонентов.
			</p>
			<p>
				С помощью порталов в React вы можете отрендерить дочерние элементы в
				произвольное место DOM, вне текущей иерархии компонентов, но при этом
				сохраняется возможность управления этими дочерними элементами через
				React API.
			</p>
			<p>
				Для создания портала используется компонент{' '}
				<b>ReactDOM.createPortal()</b>. Пример использования портала:
			</p>
			<Examples>
				import ReactDOM from 'react-dom';
				<br />
				<br />
				const MyPortalComponent = (&#123; children &#125;) ={'>'} &#123;
				<br />
				&emsp;&emsp;const portalRoot = document.getElementById('portal-root');
				<br />
				<br />
				&emsp;&emsp;return ReactDOM.createPortal(
				<br />
				&emsp;&emsp;&emsp;&emsp;children,
				<br />
				&emsp;&emsp;&emsp;&emsp;portalRoot
				<br />
				&emsp;&emsp;);
				<br />
				&#125;;
				<br />
				<br />
				// Где-то в приложении
				<br />
				const App = () ={'>'} &#123;
				<br />
				&emsp;&emsp;return (<br />
				&emsp;&emsp;&emsp;&emsp;{'<'}div{'>'}
				<br />
				&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;{'<'}h1{'>'}Главный компонент{'<'}
				/h1{'>'}
				<br />
				&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;{'<'}MyPortalComponent{'>'}
				<br />
				&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;{'<'}p{'>'}Этот элемент
				будет отображен вне иерархии компонентов{'<'}/p{'>'}
				<br />
				&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;{'<'}/MyPortalComponent{'>'}
				<br />
				&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;{'<'}div id="portal-root"{'>'}
				{'<'}/div{'>'}
				<br />
				&emsp;&emsp;&emsp;&emsp;{'<'}/div{'>'}
				<br />
				&emsp;&emsp;);
				<br />
				&#125;;
				<br />
				<br />
				export default App;
			</Examples>
		</div>
	)
}

export default Question
