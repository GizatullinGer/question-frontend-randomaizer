/* eslint-disable react/jsx-no-comment-textnodes */
import React from 'react'
import { Examples } from '../../Examples/Examples'

const Question = () => {
	return (
		<div>
			<p>
				IIFE расшифровывается как Immediately Invoked Function Expression, что
				означает «немедленно вызываемое функциональное выражение». Это паттерн в
				JavaScript, который используется для создания и выполнения функции
				немедленно после ее объявления.
			</p>
			<p>Пример IIFE выглядит так:</p>
			<Examples>
				(function() &#123;
				<br />
				&emsp;&emsp;// код выполняющийся внутри IIFE
				<br />
				&#125;)();
			</Examples>
			<p>
				Внешние круглые скобки вокруг анонимной функции являются необходимыми
				из-за ограничений синтаксиса JavaScript. Они превращают функцию в
				выражение, которое затем немедленно вызывается добавлением второй пары
				круглых скобок ().
			</p>
			<p>IIFE полезны по нескольким причинам:</p>
			<p>
				<ul>
					<li>
						<b>Изоляция переменных: </b>Переменные, объявленные внутри IIFE, не
						могут быть доступны извне этой функции, поскольку они находятся в
						своей собственной области видимости. Это помогает избежать
						конфликтов имён с переменными из глобальной области видимости.
					</li>
					<li>
						<b>Защита от загрязнения глобальной области видимости: </b>Такие
						функции помогают избежать загрязнения глобального пространства имён,
						предотвращая конфликты имен и переопределение переменных.
					</li>
				</ul>
			</p>
			<p>Пример:</p>
			<Examples>
				(function() &#123;
				<br />
				&emsp;&emsp;let localVar = 'Это локальная переменная';
				<br />
				&emsp;&emsp;console.log(localVar);
				<br />
				&#125;)();
				<br />
				<br />
				// Ошибка: localVar не определена вне IIFE
				<br />
				console.log(localVar);
			</Examples>
			<p>
				IIFE является полезным инструментом для создания изолированных областей
				видимости и выполнения кода в момент его определения.
			</p>
		</div>
	)
}

export default Question
