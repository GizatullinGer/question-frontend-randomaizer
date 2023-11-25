/* eslint-disable react/jsx-no-comment-textnodes */
import React from 'react'
import { Examples } from '../../Examples/Examples'

const Question = () => {
	return (
		<div>
			<p>
				Обмен кодом между файлами в JavaScript можно осуществлять несколькими
				способами:
			</p>
			<h3>1. Использование модулей (ES6 Modules):</h3>
			<p>
				Современный подход к организации кода в JavaScript - использование
				модулей. С помощью ключевых слов <b>export</b> и <b>import</b> можно
				экспортировать и импортировать функции, переменные или объекты между
				разными файлами.
			</p>
			<p>
				Пример экспорта из файла <b>module.js</b>:
			</p>
			<Examples>
				// module.js
				<br />
				export const myFunction = () ={'>'} &#123;
				<br />
				&emsp;&emsp;// код функции
				<br />
				&#125;;
				<br />
				<br />
				export const myVariable = 42;
			</Examples>
			<p>Пример импорта в другом файле:</p>
			<Examples>
				// другой файл
				<br />
				import &#123; myFunction, myVariable &#125; from './module.js';
				<br />
				<br />
				// использование экспортированных функций или переменных
				<br />
				myFunction();
				<br />
				console.log(myVariable);
			</Examples>
			<h3>2. Использование глобальных переменных:</h3>
			<p>
				Переменные или функции могут быть определены в одном файле и
				использованы в другом файле, если они доступны в глобальной области
				видимости (window).
			</p>
			<p>Пример создания глобальной переменной в файле file1.js:</p>
			<Examples>
				// file1.js
				<br />
				window.myGlobalVariable = 'Hello, world!';
			</Examples>
			<p>Пример использования глобальной переменной в другом файле:</p>
			<Examples>
				// другой файл
				<br />
				console.log(window.myGlobalVariable); // Выведет: 'Hello, world!'
			</Examples>
			<h3>3. Использование CommonJS (Node.js):</h3>
			<p>
				Если вы работаете в среде Node.js или используете инструменты, которые
				поддерживают CommonJS (например, Webpack), вы можете использовать
				require() и module.exports для импорта и экспорта данных и функций между
				файлами.
			</p>
			<p>Пример экспорта из файла module.js (CommonJS):</p>
			<Examples>
				// module.js
				<br />
				const myFunction = () ={'>'} &#123;
				<br />
				&emsp;&emsp;// код функции
				<br />
				&#125;;
				<br />
				<br />
				module.exports = &#123;
				<br />
				myFunction,
				<br />
				&#125;;
			</Examples>
			<p>Пример импорта в другом файле:</p>
			<Examples>
				// другой файл
				<br />
				const &#123; myFunction &#125; = require('./module.js');
				<br />
				<br />
				// использование экспортированной функции
				<br />
				myFunction();
			</Examples>
			<p>
				Выбор способа обмена кодом между файлами зависит от используемых
				инструментов, окружения и предпочтений разработчика. В современном
				JavaScript наиболее предпочтительным и распространенным методом является
				использование модулей (ES6 Modules), но для совместимости с некоторыми
				средами все еще используется CommonJS или другие подходы.
			</p>
		</div>
	)
}

export default Question
