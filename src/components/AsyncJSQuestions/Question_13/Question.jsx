import React from 'react'
import { Examples } from '../../Examples/Examples'

const Question = () => {
	return (
		<div>
			<p>
				<b>`Promise.all()`</b>, <b>`Promise.any()`</b>, и{' '}
				<b>`Promise.race()`</b> - это методы для работы с промисами в
				JavaScript, которые предоставляют разные способы управления несколькими
				асинхронными операциями. Вот их основные различия:
			</p>
			<p>
				<ol>
					<li>
						<p>
							<b>Promise.all():</b>
						</p>
						<p>
							<ul>
								<li>
									<b>`Promise.all()`</b>принимает массив промисов и возвращает
									новый промис, который будет разрешен, когда все промисы в
									массиве разрешатся успешно (все промисы вернут{' '}
									<b>`resolve`</b>). Если хотя бы один из промисов в массиве
									отклонится (вернет <b>`reject`</b>), то итоговый промис тоже
									будет отклонен.
								</li>
								<li>
									Это полезно, когда вам нужно дождаться завершения нескольких
									асинхронных операций и получить результаты всех операций.
								</li>
							</ul>
						</p>
						<p>Пример:</p>
						<Examples>
							const promises = [promise1, promise2, promise3];
							<br />
							<br />
							Promise.all(promises)
							<br />
							&emsp;&emsp;.then(results =&gt; &#123;
							<br />
							&emsp;&emsp;&emsp;&emsp;// results - массив с результатами успешно
							разрешенных промисов
							<br />
							&emsp;&emsp;&emsp;&emsp;console.log(results);
							<br />
							&emsp;&emsp;&#125;)
							<br />
							&emsp;&emsp;.catch(error =&gt; &#123;
							<br />
							&emsp;&emsp;&emsp;&emsp;// error - первая ошибка, которая
							произошла в массиве промисов
							<br />
							&emsp;&emsp;&emsp;&emsp;console.error(error);
							<br />
							&emsp;&emsp;&#125;);
						</Examples>
					</li>

					<li>
						<p>
							<b>Promise.any():</b>
						</p>
						<p>
							<ul>
								<li>
									<b>`Promise.any()`</b> принимает массив промисов и возвращает
									новый промис, который будет разрешен при успешном разрешении
									хотя бы одного промиса из массива. Если все промисы
									отклоняются (возвращают reject), то Promise.any() также
									отклоняется.
								</li>
								<li>
									Этот метод полезен, когда вам нужно получить результат из
									первой успешно выполненной асинхронной операции.
								</li>
							</ul>
						</p>
						<p>Пример:</p>
						<Examples>
							const promises = [promise1, promise2, promise3];
							<br />
							<br />
							Promise.any(promises)
							<br />
							&emsp;&emsp;.then(result =&gt; &#123;
							<br />
							&emsp;&emsp;&emsp;&emsp;// result - результат первого успешно
							разрешенного промиса
							<br />
							&emsp;&emsp;&emsp;&emsp;console.log(result);
							<br />
							&emsp;&emsp;&#125;)
							<br />
							&emsp;&emsp;.catch(errors =&gt; &#123;
							<br />
							&emsp;&emsp;&emsp;&emsp;// errors - массив ошибок, если все
							промисы отклонились
							<br />
							&emsp;&emsp;&emsp;&emsp;console.error(errors);
							<br />
							&emsp;&emsp;&#125;);
						</Examples>
					</li>
					<li>
						<p>
							<b>Promise.race():</b>
						</p>
						<p>
							<ul>
								<li>
									<b>`Promise.race()`</b> также принимает массив промисов, но
									возвращает новый промис, который будет разрешен или отклонен
									при разрешении или отклонении первого промиса из массива.
									Остальные промисы в массиве продолжают выполняться, но их
									результаты игнорируются после разрешения или отклонения
									первого промиса.
								</li>
								<li>
									Этот метод полезен, когда вам нужно получить результат первой
									асинхронной операции, которая завершилась (быть может, самой
									быстрой).
								</li>
							</ul>
						</p>
						<p>Пример:</p>
						<Examples>
							const promises = [promise1, promise2, promise3];
							<br />
							<br />
							Promise.race(promises)
							<br />
							&emsp;&emsp;.then(result =&gt; &#123;
							<br />
							&emsp;&emsp;&emsp;&emsp;// result - результат первого промиса,
							который завершился
							<br />
							&emsp;&emsp;&emsp;&emsp;console.log(result);
							<br />
							&emsp;&emsp;&#125;)
							<br />
							&emsp;&emsp;.catch(error =&gt; &#123;
							<br />
							&emsp;&emsp;&emsp;&emsp;// error - первая ошибка, которая
							произошла в массиве промисов
							<br />
							&emsp;&emsp;&emsp;&emsp;console.error(error);
							<br />
							&emsp;&emsp;&#125;);
						</Examples>
					</li>
				</ol>
			</p>
			<p>
				Выбор между Promise.all(), Promise.any(), и Promise.race() зависит от
				конкретных требований вашего приложения. Promise.all() подходит для
				дожидания завершения всех задач, Promise.any() для получения первого
				успешного результата, и Promise.race() для получения результата самой
				быстрой задачи.
			</p>
		</div>
	)
}

export default Question
