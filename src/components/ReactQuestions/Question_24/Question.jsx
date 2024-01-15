import React from 'react'
import { Examples } from '../../Examples/Examples'

const Question = () => {
	return (
		<div>
			<p>
				React и ReactDOM - это две основные библиотеки, используемые при
				разработке веб-приложений на основе React.
			</p>
			<h3>React:</h3>
			<ul>
				<li>
					<b>React </b>- это библиотека для создания пользовательских
					интерфейсов. Он предоставляет инструменты для создания компонентов,
					управления состоянием, реализации виртуального DOM и других основных
					функций, необходимых для построения пользовательского интерфейса.
				</li>
				<li>
					React можно использовать как для создания веб-приложений (React Web),
					так и для разработки мобильных приложений (React Native).
				</li>
			</ul>
			<h3>ReactDOM:</h3>
			<ul>
				<li>
					<b>ReactDOM </b>- это пакет, который содержит методы для
					взаимодействия React с DOM. Он предоставляет функции для монтирования
					(render), обновления и удаления React-компонентов в реальном DOM
					браузера.
				</li>
				<li>
					ReactDOM содержит специфические методы для работы с DOM-элементами,
					такими как <b>ReactDOM.render()</b>, <b>ReactDOM.hydrate()</b>{' '}
					(используется для серверного рендеринга),{' '}
					<b>ReactDOM.unmountComponentAtNode()</b> и другие.
				</li>
			</ul>
			<p>
				Коротко говоря, React - это библиотека, предоставляющая средства для
				создания пользовательского интерфейса и управления компонентами и
				состоянием, в то время как ReactDOM - это инструмент для взаимодействия
				React с реальным DOM в браузере.
			</p>
			<p>Пример использования ReactDOM:</p>
			<Examples>
				import React from 'react';
				<br />
				import ReactDOM from 'react-dom';
				<br />
				import App from './App';
				<br />
				<br />
				ReactDOM.render({'<'}App /{'>'}, document.getElementById('root'));
			</Examples>
			<p>
				Здесь <b>ReactDOM.render()</b> используется для монтирования (отрисовки)
				корневого компонента{' '}
				<b>
					{'<'}App /{'>'}
				</b>{' '}
				в DOM элемент с идентификатором root.ReactDOM используется для
				взаимодействия между React и реальным DOM, чтобы отобразить созданные
				React-компоненты на веб-странице.
			</p>
		</div>
	)
}

export default Question