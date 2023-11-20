import React from 'react'
import { Examples } from '../../Examples/Examples'

const Question = () => {
	return (
		<div>
			<p>
				Функции высшего порядка (Higher Order Functions) - это функции, которые
				могут принимать другие функции в качестве аргументов и/или возвращать
				функции в качестве результата.
			</p>
			<p>
				JavaScript поддерживает функции высшего порядка, что делает его
				функциональным языком программирования. Вот несколько примеров:
			</p>
			<p>
				<ol>
					<li>
						Принимают функции в качестве аргументов:
						<Examples>
							function doOperation(operation, a, b) &#123; <br />
							&emsp;&emsp;return operation(a, b);
							<br />
							&#125;
							<br />
							<br />
							function add(x, y) &#123;
							<br />
							&emsp;&emsp;return x + y;
							<br />
							&#125;
							<br />
							<br />
							function subtract(x, y) &#123;
							<br />
							&emsp;&emsp;return x - y;
							<br />
							&#125;
							<br />
							<br />
							console.log(doOperation(add, 5, 3)); // Вывод: 8<br />
							console.log(doOperation(subtract, 10, 4)); // Вывод: 6<br />
						</Examples>
						Функция <b>doOperation</b> принимает функцию в качестве аргумента{' '}
						<b>operation</b> и выполняет ее с переданными значениями a и b.
					</li>
					<li>
						Возвращают функции:
						<Examples>
							function multiplier(factor) &#123;
							<br />
							&emsp;&emsp;return function (number) &#123;
							<br />
							&emsp;&emsp;&emsp;&emsp;return number * factor;
							<br />
							&emsp;&emsp;&#125;;
							<br />
							&#125;
							<br />
							<br />
							let double = multiplier(2);
							<br />
							let triple = multiplier(3);
							<br />
							<br />
							console.log(double(5)); // Вывод: 10
							<br />
							console.log(triple(5)); // Вывод: 15
						</Examples>
						Функция <b>multiplier</b> возвращает новую функцию, которая умножает
						переданный ей аргумент на <b>factor</b>. Это позволяет создавать
						функции, которые могут быть настроены для выполнения определенных
						операций в зависимости от переданных значений.
					</li>
				</ol>
			</p>
			<p>
				Функции высшего порядка облегчают написание более гибкого и читаемого
				кода, позволяя передавать и возвращать функции как данные. Они являются
				ключевым элементом функционального программирования в JavaScript.
			</p>
		</div>
	)
}

export default Question
