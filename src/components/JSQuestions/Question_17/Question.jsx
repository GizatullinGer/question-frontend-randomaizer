/* eslint-disable react/jsx-no-comment-textnodes */
import React from 'react'
import { Examples } from '../../Examples/Examples'

const Question = () => {
	return (
		<div>
			<p>
				<b>.forEach()</b> и <b>.map()</b> - это два метода массивов в
				JavaScript, которые выполняют итерацию по элементам массива, но у них
				есть различия в том, как они работают и что возвращают.
			</p>
			<p>
				<ol>
					<li>
						<b>forEach():</b>
						<ul>
							<li>
								<b>forEach()</b> выполняет функцию обратного вызова для каждого
								элемента в массиве.
							</li>
							<li>Этот метод изменяет исходный массив.</li>
							<li>
								Возвращаемое значение <b>undefined</b>
							</li>
							<li>
								Пример:
								<Examples>
									const numbers = [1, 2, 3]; <br />
									<br />
									numbers.forEach((num) =&gt; &#123;
									<br />
									&emsp;&emsp;console.log(num);
									<br />
									&#125;);
									<br />
									// Вывод:
									<br />
									// 1<br />
									// 2<br />
									// 3
								</Examples>
							</li>
						</ul>
					</li>
					<li>
						<b>map():</b>
						<ul>
							<li>
								<b>map()</b> также выполняет функцию обратного вызова для
								каждого элемента в массиве.
							</li>
							<li>
								Однако он создает новый массив на основе результатов выполнения
								функции обратного вызова для каждого элемента.
							</li>
							<li>Исходный массив не изменяется.</li>
							<li>
								Возвращаемый новый массив содержит результаты вызова функции
								обратного вызова для каждого элемента исходного массива.
							</li>
							<li>
								Пример:
								<Examples>
									const numbers = [1, 2, 3];
									<br />
									<br />
									const doubled = numbers.map((num) =&gt; &#123;
									<br />
									&emsp;&emsp;return num * 2;
									<br />
									&#125;);
									<br />
									<br />
									console.log(doubled); // Output: [2, 4, 6]
								</Examples>
							</li>
						</ul>
					</li>
				</ol>
			</p>
			<p>
				Таким образом, основное различие между <b>.forEach()</b> и <b>.map()</b>{' '}
				заключается в том, что <b>forEach()</b> используется для выполнения
				операций для каждого элемента массива без создания нового массива, в то
				время как <b>.map()</b> создает новый массив на основе результатов
				операций, выполняемых над каждым элементом.
			</p>
		</div>
	)
}

export default Question
