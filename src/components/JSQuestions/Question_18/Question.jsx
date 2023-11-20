import React from 'react'
import { Examples } from '../../Examples/Examples'

const Question = () => {
	return (
		<div>
			<p>
				<b>.call(), .apply() и bind()</b> - это методы, используемые для
				установки контекста выполнения функции в JavaScript, но они работают
				немного по-разному.
			</p>
			<p>
				<ol>
					<li>
						<b>.call():</b>
						<ul>
							<li>
								Метод <b>call()</b> используется для вызова функции с указанием
								конкретного объекта в качестве контекста (значения this), а
								также передачи аргументов функции в виде списка параметров.
							</li>
							<li>
								Синтаксис: <b>function.call(thisArg, arg1, arg2, ...)</b>.
							</li>
							<li>
								Пример:
								<Examples>
									const person = &#123;
									<br />
									&emsp;&emsp;fullName: function(city, country) &#123;
									<br />
									&emsp;&emsp;&emsp;&emsp;return this.firstName + ' ' +
									this.lastName + ', ' + city + ', ' + country;
									<br />
									&emsp;&emsp;&#125;
									<br />
									&#125;;
									<br />
									<br />
									const person1 = &#123;
									<br />
									&emsp;&emsp;firstName: 'John',
									<br />
									&emsp;&emsp;lastName: 'Doe'
									<br />
									&#125;;
									<br />
									<br />
									const result = person.fullName.call(person1, 'New York',
									'USA');
									<br />
									console.log(result); // Output: John Doe, New York, USA
								</Examples>
							</li>
						</ul>
					</li>
					<li>
						<b>.apply():</b>
						<ul>
							<li>
								<b>apply()</b> похож на <b>call()</b>, но принимает аргументы
								функции в виде массива.
							</li>
							<li>
								Синтаксис: <b>function.apply(thisArg, [argsArray])</b>.
							</li>
							<li>
								Пример:
								<Examples>
									const person = &#123;
									<br />
									&emsp;&emsp;fullName: function(city, country) &#123;
									<br />
									&emsp;&emsp;&emsp;&emsp;return this.firstName + ' ' +
									this.lastName + ', ' + city + ', ' + country;
									<br />
									&emsp;&emsp;&#125;
									<br />
									&#125;;
									<br />
									<br />
									const person1 = &#123;
									<br />
									&emsp;&emsp;firstName: 'John',
									<br />
									&emsp;&emsp;lastName: 'Doe'
									<br />
									&#125;;
									<br />
									<br />
									const args = ['New York', 'USA'];
									<br />
									const result = person.fullName.apply(person1, args);
									<br />
									console.log(result); // Output: John Doe, New York, USA
								</Examples>
							</li>
						</ul>
					</li>
					<li>
						<b>.bind():</b>
						<ul>
							<li>
								Метод <b>bind()</b> создает новую функцию, привязывая указанный
								объект к <b>this</b> и частично применяя аргументы. Это не
								вызывает функцию сразу, а возвращает новую функцию, которую
								можно вызвать позже.
							</li>
							<li>
								Синтаксис: <b>function.bind(thisArg, arg1, arg2, ...)</b>.
							</li>
							<li>
								Пример:
								<Examples>
									const person = &#123;
									<br />
									&emsp;&emsp;fullName: function(city, country) &#123;
									<br />
									&emsp;&emsp;&emsp;&emsp;return this.firstName + ' ' +
									this.lastName + ', ' + city + ', ' + country;
									<br />
									&emsp;&emsp;&#125;
									<br />
									&#125;;
									<br />
									<br />
									const person1 = &#123;
									<br />
									&emsp;&emsp;firstName: 'John',
									<br />
									&emsp;&emsp;lastName: 'Doe'
									<br />
									&#125;;
									<br />
									<br />
									const boundFunc = person.fullName.bind(person1, 'New York',
									'USA');
									<br />
									console.log(boundFunc()); // Output: John Doe, New York, USA
								</Examples>
							</li>
						</ul>
					</li>
				</ol>
			</p>
			<p>
				Основное отличие между <b>call()</b>, <b>apply()</b> и <b>bind()</b>{' '}
				заключается в способе передачи аргументов: <b>call()</b> передает их в
				виде списка параметров, <b>apply()</b> принимает массив аргументов, а{' '}
				<b>bind()</b> используется для привязки контекста и аргументов, но не
				вызывает функцию сразу, а возвращает новую функцию.
			</p>
		</div>
	)
}

export default Question
