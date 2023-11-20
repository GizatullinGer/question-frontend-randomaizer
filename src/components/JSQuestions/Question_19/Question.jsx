import React from 'react'
import { Examples } from '../../Examples/Examples'

const Question = () => {
	return (
		<div>
			<p>
				Функции в JavaScript называют объектами первого класса из-за того, что в
				этом языке они рассматриваются как объекты, которые могут быть:
			</p>
			<p>
				<ol>
					<li>
						Присвоены переменной: Функции могут быть назначены переменной или
						свойству объекта.
						<Examples>
							const myFunction = function() &#123;
							<br />
							&emsp;&emsp;console.log("Hello, world!");
							<br />
							&#125;;
						</Examples>
					</li>
					<li>
						Переданы как аргумент другой функции: Функции могут быть переданы в
						качестве параметра другой функции.
						<Examples>
							function greet(name) &#123;
							<br />
							&emsp;&emsp;console.log('Hello, ' + name + '!');
							<br />
							&#125;
							<br />
							<br />
							function processName(callback) &#123;
							<br />
							&emsp;&emsp;const name = 'Alice';
							<br />
							&emsp;&emsp;callback(name);
							<br />
							&#125;
							<br />
							<br />
							processName(greet); // передача функции greet в качестве аргумента
						</Examples>
					</li>
					<li>
						Возвращены из другой функции: Функции могут быть возвращены из
						другой функции.
						<Examples>
							function createMultiplier(multiplier) &#123;
							<br />
							&emsp;&emsp;return function (x) &#123;
							<br />
							&emsp;&emsp;&emsp;&emsp;return x * multiplier;
							<br />
							&emsp;&emsp;&#125;;
							<br />
							&#125;
							<br />
							<br />
							const double = createMultiplier(2);
							<br />
							console.log(double(5)); // Output: 10
						</Examples>
					</li>
					<li>
						Хранены в структурах данных: Функции могут храниться в массивах,
						объектах и других структурах данных.
						<Examples>
							const functionArray = [<br />
							&emsp;&emsp;function() &#123; console.log("Function 1"); &#125;,
							<br />
							&emsp;&emsp;function() &#123; console.log("Function 2"); &#125;
							<br />
							];
							<br />
							<br />
							functionArray[0](); // Вызов первой функции в массиве
						</Examples>
					</li>
					<li>
						Могут иметь методы и свойства: Функции в JavaScript являются
						объектами и могут иметь собственные свойства и методы.
						<Examples>
							function greet() &#123;
							<br />
							&emsp;&emsp;console.log('Hello!');
							<br />
							&#125;
							<br />
							<br />
							greet.language = 'English';
							<br />
							console.log(greet.language); // Output: English
						</Examples>
					</li>
				</ol>
			</p>
			<p>
				Такое обилие возможностей использования функций в JavaScript делает их
				объектами первого класса, что означает, что они могут быть использованы
				так же, как и другие объекты, с сохранением своих основных свойств и
				методов, а также возможностью передачи, хранения и возврата из других
				функций.
			</p>
		</div>
	)
}

export default Question
