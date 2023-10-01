import React from 'react'
import { Examples } from '../../Examples/Examples'

const Question = () => {
	return (
		<div>
			<p>
				Для выполнения нескольких асинхронных операций последовательно в
				JavaScript, вы можете воспользоваться различными способами, такими как
				использование <b>`async/await`</b>, цикла <b>`for...of`</b> или
				рекурсии. Ниже приведены примеры, демонстрирующие эти подходы:
			</p>
			<p>
				<ol>
					<li>
						<b>Использование async/await:</b>
						<br />
						Вы можете создать асинхронную функцию и использовать await, чтобы
						дождаться завершения каждой операции перед переходом к следующей.
						Например:
						<Examples>
							async function runSequentially() &#123;
							<br />
							&emsp;&emsp;try &#123;
							<br />
							&emsp;&emsp;&emsp;&emsp;const result1 = await asyncOperation1();
							<br />
							&emsp;&emsp;&emsp;&emsp;console.log(result1);
							<br />
							<br />
							&emsp;&emsp;&emsp;&emsp;const result2 = await asyncOperation2();
							<br />
							&emsp;&emsp;&emsp;&emsp;console.log(result2);
							<br />
							<br />
							&emsp;&emsp;&emsp;&emsp;const result3 = await asyncOperation3();
							<br />
							&emsp;&emsp;&emsp;&emsp;console.log(result3);
							<br />
							&emsp;&emsp;&#125; catch (error) &#123;
							<br />
							&emsp;&emsp;&emsp;&emsp;console.error('Произошла ошибка:', error);
							<br />
							&emsp;&emsp;&#125;
							<br />
							&#125;
							<br />
							<br />
							runSequentially();
						</Examples>
					</li>
					<li>
						<b>
							Использование цикла <b>`for...of`</b>:
						</b>
						<br />
						Вы можете использовать цикл <b>`for...of`</b>, чтобы последовательно
						выполнить асинхронные операции, ожидая каждую операцию с помощью{' '}
						<b>`await`</b>:
						<Examples>
							async function runSequentially() &#123;
							<br />
							&emsp;&emsp;try &#123;
							<br />
							&emsp;&emsp;&emsp;&emsp;const asyncOperations = [asyncOperation1,
							asyncOperation2, asyncOperation3];
							<br />
							<br />
							&emsp;&emsp;&emsp;&emsp;&emsp;for (const operation of
							asyncOperations) &#123;
							<br />
							&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;const result = await
							operation();
							<br />
							&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;console.log(result);
							<br />
							&emsp;&emsp;&emsp;&emsp;&#125;
							<br />
							&emsp;&emsp;&#125; catch (error) &#123;
							<br />
							&emsp;&emsp;&emsp;&emsp;console.error('Произошла ошибка:', error);
							<br />
							&emsp;&emsp;&#125;
							<br />
							&#125;
							<br />
							<br />
							runSequentially();
						</Examples>
					</li>
					<li>
						<b>Использование рекурсии:</b>
						<br />
						Вы также можете использовать рекурсию для вызова следующей операции
						после завершения текущей:
						<Examples>
							async function runSequentially(operations, index = 0) &#123;
							<br />
							&emsp;&emsp;try &#123;
							<br />
							&emsp;&emsp;&emsp;&emsp;if (index &lt; operations.length) &#123;
							<br />
							&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;const result = await
							operations[index]();
							<br />
							&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;console.log(result);
							<br />
							&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;await
							runSequentially(operations, index + 1);
							<br />
							&emsp;&emsp;&emsp;&emsp;&#125;
							<br />
							&emsp;&emsp;&#125; catch (error) &#123;
							<br />
							&emsp;&emsp;&emsp;&emsp;console.error('Произошла ошибка:', error);
							<br />
							&emsp;&emsp;&#125;
							<br />
							&#125;
							<br />
							<br />
							const asyncOperations = [asyncOperation1, asyncOperation2,
							asyncOperation3]; <br />
							runSequentially(asyncOperations);
						</Examples>
					</li>
				</ol>
			</p>
			<p>
				Все эти подходы позволяют выполнить несколько асинхронных операций
				последовательно. Выбор конкретного метода зависит от ваших предпочтений
				и конкретных требований вашего приложения.
			</p>
		</div>
	)
}

export default Question
