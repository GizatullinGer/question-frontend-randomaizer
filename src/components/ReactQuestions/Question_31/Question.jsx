import React from 'react'
import { Examples } from '../../Examples/Examples'

const Question = () => {
	return (
		<div>
			<p>
				<b>ReactDOMServer</b> - это часть библиотеки React, предназначенная для
				рендеринга React-компонентов на стороне сервера (Server-Side Rendering,
				SSR) или для генерации HTML на сервере.
			</p>
			<p>
				Этот модуль позволяет использовать React на сервере для создания
				HTML-страницы и отправки её пользователю вместе с исходным
				JavaScript-кодом. Он полезен для предварительной отрисовки содержимого
				страницы на сервере, что может улучшить SEO, производительность и
				доступность веб-приложений.
			</p>
			<p>
				<b>ReactDOMServer</b> предоставляет следующие методы:
			</p>
			<h3>renderToString():</h3>
			<Examples>
				import ReactDOMServer from 'react-dom/server'; <br />
				<br />
				const element = {'<'}MyComponent /{'>'};<br />
				const html = ReactDOMServer.renderToString(element);
			</Examples>
			<p>
				<b>renderToString()</b> используется для преобразования React-элемента в
				его HTML-представление как строки. Это позволяет генерировать HTML-код
				React-компонентов на сервере.
			</p>
			<h3>renderToStaticMarkup():</h3>
			<Examples>
				import ReactDOMServer from 'react-dom/server';
				<br />
				<br />
				const element = {'<'}MyComponent /{'>'};<br />
				const staticMarkup = ReactDOMServer.renderToStaticMarkup(element);
			</Examples>
			<p>
				<b>renderToStaticMarkup()</b> аналогичен <b>renderToString()</b>, но он
				удаляет все атрибуты данных React, что полезно, если вам не нужна
				интерактивность на стороне сервера.
			</p>
			<h3>renderToStringAsync() и другие методы:</h3>
			<p>
				Кроме того, существуют экспериментальные или более продвинутые методы,
				такие как <b>renderToStringAsync()</b>, предназначенные для асинхронного
				рендеринга, который может быть полезен при работе с асинхронными
				данными.
			</p>
			<p>
				Используя <b>ReactDOMServer</b>, вы можете создавать HTML-страницы на
				сервере, содержащие React-компоненты, что позволяет клиентам получать
				уже отрендеренную страницу с сервера, что облегчает начальную загрузку и
				улучшает SEO вашего веб-приложения.
			</p>
		</div>
	)
}

export default Question
