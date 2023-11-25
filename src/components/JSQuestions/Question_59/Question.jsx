import React from 'react'
import { Examples } from '../../Examples/Examples'

const Question = () => {
	return (
		<div>
			<p>
				В JavaScript для работы с регулярными выражениями (RegExp) используются
				следующие методы:
			</p>
			<p>
				<ol>
					<li>
						<b>test(): </b>Метод <b>test()</b> проверяет, соответствует ли
						строка регулярному выражению. Он возвращает <b>true</b>, если
						совпадение найдено, и <b>false</b>, если нет.
						<Examples>
							let pattern = /hello/;
							<br />
							let text = 'Привет, hello!';
							<br />
							let isMatch = pattern.test(text);
							<br />
							console.log(isMatch); // Выведет: true
						</Examples>
					</li>
					<li>
						<b>exec(): </b>Метод <b>exec()</b> ищет совпадение регулярного
						выражения в строке. Если совпадение найдено, он возвращает массив с
						информацией о совпадении; если совпадение не найдено, возвращает{' '}
						<b>null</b>.
						<Examples>
							let pattern = /hello/;
							<br />
							let text = 'Привет, hello!';
							<br />
							let result = pattern.exec(text);
							<br />
							console.log(result); // Выведет: ['hello', index: 8, input:
							'Привет, hello!', groups: undefined]
						</Examples>
					</li>
					<li>
						<b>match(): </b>Метод <b>match()</b> используется для поиска
						совпадений регулярного выражения в строке. Если совпадения найдены,
						он возвращает массив с результатами; если совпадений нет, возвращает{' '}
						<b>null</b>.
						<Examples>
							let pattern = /hello/;
							<br />
							let text = 'Привет, hello!';
							<br />
							let result = text.match(pattern);
							<br />
							console.log(result); // Выведет: ['hello']
						</Examples>
					</li>
					<li>
						<b>replace(): </b>Метод <b>replace()</b> заменяет совпадающие
						подстроки в строке на указанную подстроку или результат выполнения
						функции. Он используется для замены текста на основе регулярного
						выражения.
						<Examples>
							let pattern = /hello/;
							<br />
							let text = 'Привет, hello!';
							<br />
							let newText = text.replace(pattern, 'Hi');
							<br />
							console.log(newText); // Выведет: 'Привет, Hi!'
						</Examples>
					</li>
					<li>
						<b>search(): </b>Метод <b>search()</b> ищет совпадения регулярного
						выражения в строке. Если совпадение найдено, он возвращает индекс
						первого совпадения; если совпадение не найдено, возвращает <b>-1</b>
						.
						<Examples>
							let pattern = /hello/;
							<br />
							let text = 'Привет, hello!';
							<br />
							let position = text.search(pattern);
							<br />
							console.log(position); // Выведет: 8
						</Examples>
					</li>
				</ol>
			</p>
			<p>
				Эти методы помогают в выполнении различных операций с регулярными
				выражениями, такими как поиск, замена и проверка соответствия текста
				заданному шаблону.
			</p>
		</div>
	)
}

export default Question
