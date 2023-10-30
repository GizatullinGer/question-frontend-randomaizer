/* eslint-disable react/jsx-no-comment-textnodes */
import React from 'react'
import { Examples } from '../../Examples/Examples'

const Question = () => {
	return (
		<div>
			<p>
				В версиях TypeScript до 1.5 использовалась концепция внутренних модулей
				(Internal Modules) и внешних модулей (External Modules). Однако, с
				появлением стандарта ECMAScript 2015 (ES6), внутренние модули исчезли, а
				внешние модули получили новую форму и были переименованы в "пространства
				имен" (Namespaces) и "внешние модули" (External Modules) соответственно.
			</p>
			<h3>
				Внутренние модули (Internal Modules) - пространства имен (Namespaces):
			</h3>
			<p>
				<b>Internal Modules (или Modules pre-ES6) </b>были предшественниками
				пространств имен (Namespaces). Они были способом группирования функций,
				классов, переменных и других конструкций внутри области видимости.
				Внутренние модули использовали ключевое слово module и были
				предназначены для организации кода в рамках одного файла.
			</p>
			<p>Пример внутреннего модуля (пространства имен):</p>
			<Examples>
				module MyModule &#123; <br />
				&emsp;&emsp;export function myFunction() &#123;
				<br />
				&emsp;&emsp;&emsp;&emsp;// ...
				<br />
				&emsp;&emsp;&#125;
				<br />
				<br />
				&emsp;&emsp;export class MyClass &#123;
				<br />
				&emsp;&emsp;&emsp;&emsp;// ...
				<br />
				&emsp;&emsp;&#125;
				<br />
				&#125;
			</Examples>
			<h3>
				Внешние модули (External Modules) - внешние модули (External Modules):
			</h3>
			<p>
				<b>External Modules (или ES6 Modules)</b> - это стандартная система
				модулей, предоставляемая в стандарте ECMAScript 2015 (ES6) и
				использованная в TypeScript. Они представляют собой файлы, содержащие
				экспорт и импорт функций, классов, переменных и других конструкций для
				обмена данными между файлами
			</p>
			<p>Пример внешнего модуля:</p>
			<Examples>
				// File: MyModule.ts
				<br />
				export function myFunction() &#123;
				<br />
				&emsp;&emsp;// ...
				<br />
				&#125;
				<br />
				<br />
				export class MyClass &#123;
				<br />
				&emsp;&emsp;// ...
				<br />
				&#125;
			</Examples>
			<Examples>
				import &#123; myFunction, MyClass &#125; from './MyModule';
			</Examples>
			<p>
				Внешние модули (External Modules) в TypeScript включают в себя работу с
				модулями стандарта ECMAScript, которые позволяют организовывать код в
				различных файлах и обеспечивают более явное и удобное разделение кода на
				модули. Внутренние модули, или пространства имен, были предшественниками
				внешних модулей, но с развитием языка и переходом к стандарту ES6,
				внешние модули стали более распространенным и стандартным подходом к
				организации кода.
			</p>
		</div>
	)
}

export default Question
