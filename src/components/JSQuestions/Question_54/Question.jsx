import React from 'react'
import { Examples } from '../../Examples/Examples'

const Question = () => {
	return (
		<div>
			<p>
				<b>typeof</b> и <b>instanceof</b> - это два оператора в JavaScript,
				используемые для проверки типов значений или объектов, но они работают
				по-разному и проверяют разные аспекты объектов.
			</p>
			<p>
				<ol>
					<li>
						<b>typeof:</b>
						<ul>
							<li>
								<b>typeof</b> - это унарный оператор, который позволяет узнать
								тип данных определенной переменной или выражения.
							</li>
							<li>
								Возвращает строку, представляющую тип данных переданного
								значения.
							</li>
							<li>
								Он обычно используется для определения примитивных типов данных,
								таких как{' '}
								<b>
									'string', 'number', 'boolean', 'undefined', 'object',
									'function' и 'symbol'
								</b>
								.
							</li>
							<li>
								Однако, стоит учитывать, что <b>typeof null</b> также возвращает{' '}
								<b>'object'</b>, что является известной особенностью JavaScript.
							</li>
						</ul>
						Примеры использования <b>typeof</b>:
						<Examples>
							typeof 42; // 'number' <br />
							typeof 'Hello'; // 'string'
							<br />
							typeof true; // 'boolean'
							<br />
							typeof undefined; // 'undefined'
							<br />
							typeof null; // 'object'
							<br />
							typeof {}; // 'object'
							<br />
							typeof function() {}; // 'function'
						</Examples>
					</li>
					<li>
						<b>instanceof:</b>
						<ul>
							<li>
								<b>instanceof </b>- это бинарный оператор, который проверяет,
								был ли объект создан с использованием определенного конструктора
								(или его прототипа).
							</li>
							<li>
								Он возвращает <b>true</b>, если объект является экземпляром
								указанного типа, и <b>false</b>, если нет.
							</li>
							<li>
								Он основан на прототипном наследовании JavaScript и проверяет
								цепочку прототипов объекта.
							</li>
							<li>
								<b>instanceof</b> работает для пользовательских типов (созданных
								с помощью функций-конструкторов) и встроенных объектов,
								использующих прототипы (например, <b>Array, Date, RegExp</b>).
							</li>
							Примеры использования <b>instanceof</b>:
							<Examples>
								var arr = [];
								<br />
								arr instanceof Array; // true
								<br />
								<br />
								var today = new Date();
								<br />
								today instanceof Date; // true
								<br />
								<br />
								function Person(name) &#123;
								<br />
								&emsp;&emsp;this.name = name;
								<br />
								&#125;
								<br />
								var john = new Person('John');
								<br />
								john instanceof Person; // true
							</Examples>
						</ul>
					</li>
				</ol>
			</p>
			<p>
				Итак, <b>typeof</b> используется для определения примитивных типов
				данных и не всегда точно определяет тип объекта, в то время как
				instanceof проверяет, был ли объект создан с использованием
				определенного конструктора (или его прототипа), что делает его более
				полезным для работы с объектами и проверки их типов в контексте
				прототипного наследования.
			</p>
		</div>
	)
}

export default Question
