import React from 'react'
import { Examples } from '../../Examples/Examples'

const Question = () => {
	return (
		<div>
			<p>
				<b>`.allSettled()`</b> - это статический метод объекта <b>`Promise`</b>,
				который был добавлен в стандарте ECMAScript 2020 (ES11). Этот метод
				принимает массив промисов и возвращает новый промис, который
				разрешается, когда все промисы в массиве завершились, но в отличие от{' '}
				<b>`Promise.all()`</b>, он разрешается независимо от того, завершились
				ли промисы успешно (<b>`resolve`</b>) или с ошибкой (<b>`reject`</b>).
			</p>
			<p>
				<b>`Promise.allSettled()`</b> возвращает массив объектов, каждый из
				которых представляет результат выполнения одного из промисов в исходном
				массиве. Каждый объект содержит два свойства:
			</p>
			<ul>
				<li>
					<b>`status`</b>: Строка, указывающая состояние завершения промиса.
					Может принимать значения "<b>fulfilled</b>" (успешное разрешение) или
					"<b>rejected</b>" (отклонение).
				</li>
				<li>
					<b>`value `</b> или <b>`reason`</b>: Если промис разрешен успешно, то{' '}
					<b>`value `</b> содержит результат разрешения. Если промис был
					отклонен, то <b>`reason `</b> содержит ошибку.
				</li>
			</ul>
			<p>
				Пример использования <b>`Promise.allSettled()`</b>:
			</p>
			<Examples>
				const promises = [<br />
				&emsp;&emsp;Promise.resolve('Успех'),
				<br />
				&emsp;&emsp;Promise.reject('Ошибка 1'),
				<br />
				&emsp;&emsp;Promise.resolve('Еще успех'),
				<br />
				];
				<br />
				<br />
				Promise.allSettled(promises)
				<br />
				&emsp;&emsp;.then(results =&gt; &#123;
				<br />
				&emsp;&emsp;&emsp;&emsp;results.forEach(result =&gt; &#123;
				<br />
				&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;if (result.status === 'fulfilled')
				&#123;
				<br />
				&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;console.log(`Успешно:
				$&#123;result.value&#125;`);
				<br />
				&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&#125; else &#123;
				<br />
				&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;console.error(`Ошибка:
				$&#123;result.reason&#125;`);
				<br />
				&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&#125;
				<br />
				&emsp;&emsp;&emsp;&emsp;&#125;);
				<br />
				&emsp;&emsp;&#125;)
				<br />
				&emsp;&emsp;.catch(error =&gt; &#123;
				<br />
				&emsp;&emsp;&emsp;&emsp;console.error('Произошла ошибка:', error);
				<br />
				&emsp;&emsp;&#125;);
			</Examples>
			<p>
				В этом примере <b>`Promise.allSettled()`</b> обрабатывает массив
				промисов, включая и успешно разрешенные, и отклоненные промисы, и
				возвращает результаты для каждого из них. Это полезно, когда вам нужно
				получить информацию о том, какие промисы завершились и с каким
				результатом, независимо от того, были ли они успешными или нет.
			</p>
			<p>
				<b>`.allSettled()`</b> особенно полезен, когда вам нужно обработать
				несколько асинхронных операций, и вам важно получить информацию о каждой
				операции, даже если некоторые из них завершились неудачно.
			</p>
		</div>
	)
}

export default Question
