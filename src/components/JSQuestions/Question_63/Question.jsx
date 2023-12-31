import React from 'react'
import { Examples } from '../../Examples/Examples'

const Question = () => {
	return (
		<div>
			<p>
				В JavaScript выражения (expressions) и инструкции (statements) - это два
				основных элемента, из которых состоит программа. Они выполняют разные
				функции и имеют различия в своей структуре и поведении.
			</p>
			<p>
				<b>Выражения (expressions):</b>
			</p>
			<p>
				<ul>
					<li>
						Выражение - это фрагмент кода, который вычисляется в значение.
					</li>
					<li>
						Оно может быть чем-то простым, таким как число, строка или
						переменная, или составным, объединяющим в себе несколько значений и
						операторов.
					</li>
					<li>
						Примеры простых выражений:{' '}
						<b>
							42, 'Hello', x + 5, true, function() &#123; return 'Function
							expression'; &#125;
						</b>
						.
					</li>
					<li>
						Выражения могут быть использованы везде, где ожидается значение,
						например, в присваивании, вызове функции или как аргумент в другом
						выражении.
					</li>
				</ul>
				Примеры использования выражений:
				<Examples>
					let sum = 10 + 20; // Выражение "10 + 20" вычисляется в значение 30 и
					присваивается переменной sum
					<br />
					let greeting = 'Hello, ' + 'world!'; // Строковые выражения
					объединяются в одну строку
					<br />
					let result = (x &gt; 5) ? 'Больше 5' : 'Меньше или равно 5'; //
					Тернарное выражение
				</Examples>
			</p>
			<p>
				<b>Инструкции (statements):</b>
			</p>
			<p>
				<ul>
					<li>
						Инструкция - это фрагмент кода, который выполняет определенное
						действие.
					</li>
					<li>
						Они представляют собой команды, которые выполняют операции и
						контролируют поток выполнения программы.
					</li>
					<li>
						Инструкции включают в себя присваивания, условные операторы, циклы,
						объявления функций и т. д.
					</li>
					<li>
						Инструкции обычно завершаются точкой с запятой (;) в JavaScript.
					</li>
				</ul>
			</p>
			<p>Примеры инструкций:</p>
			<Examples>
				let x = 10; // Инструкция присваивания
				<br />
				if (x &gt; 5) &#123;
				<br />
				&emsp;&emsp;console.log('x больше 5'); // Инструкция условия
				<br />
				&#125; else &#123;
				<br />
				&emsp;&emsp;console.log('x меньше или равен 5'); // Еще одна инструкция
				условия
				<br />
				&#125;
				<br />
				for (let i = 0; i &lt; 5; i++) &#123;
				<br />
				&emsp;&emsp;console.log(i); // Инструкция цикла
				<br />
				&#125;
				<br />
				function greet() &#123;
				<br />
				&emsp;&emsp;console.log('Привет, мир!'); // Инструкция объявления
				функции
				<br />
				&#125;
			</Examples>
			<p>
				Ключевое различие между выражениями и инструкциями заключается в том,
				что выражения вычисляются в значение, тогда как инструкции выполняют
				действие или управляют потоком выполнения программы. В большинстве
				случаев выражения могут быть частью инструкций, но не наоборот: не все
				инструкции являются выражениями.
			</p>
		</div>
	)
}

export default Question
