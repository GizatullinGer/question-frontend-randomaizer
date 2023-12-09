import React from 'react'
import { Examples } from '../../Examples/Examples'

const Question = () => {
	return (
		<div>
			<p>
				Методы <b>.submit()</b> и <b>.requestSubmit()</b> используются для
				отправки формы, но они имеют некоторые различия в своем поведении.
			</p>
			<p>
				<ol>
					<li>
						<b>.submit():</b>
						<ul>
							<li>
								Метод <b>.submit()</b> вызывается на элементе{' '}
								<b>
									{'<'}form{'>'}
								</b>{' '}
								и используется для программной отправки формы.
							</li>
							<li>
								Вызов <b>.submit()</b> на элементе{' '}
								<b>
									{'<'}form{'>'}
								</b>{' '}
								запускает отправку данных формы на сервер, как если бы
								пользователь нажал кнопку "Отправить" в этой форме.
							</li>
							<li>
								Этот метод может быть вызван программно из JavaScript для
								отправки формы без необходимости явного нажатия пользователем на
								кнопку "Отправить".
							</li>
						</ul>
						Пример использования <b>.submit()</b>:
						<Examples>
							document.getElementById('myForm').submit(); // Отправить форму с
							id="myForm"
						</Examples>
					</li>
					<li>
						<b>.requestSubmit():</b>
						<ul>
							<li>
								Метод <b>.requestSubmit()</b> вызывается на кнопке или элементе
								формы (
								<b>
									{'<'}button{'>'}, {'<'}input type="submit"{'>'}
								</b>
								) и используется для запуска процесса отправки формы.
							</li>
							<li>
								Отличие в том, что <b>.requestSubmit()</b> позволяет кнопке
								формы или элементу{' '}
								<b>
									{'<'}input type="submit"{'>'}
								</b>{' '}
								вызывать действие отправки формы, которое может быть
								переопределено или настроено с помощью JavaScript.
							</li>
							<li>
								Этот метод позволяет кнопке или элементу отправлять форму, при
								этом учитывая возможные атрибуты формы или обработчики событий.
							</li>
						</ul>
						Пример использования <b>.requestSubmit()</b>:
						<Examples>
							{'<'}form id="myForm"{'>'}
							<br />
							&emsp;&emsp;{'<'}!-- ... поля формы ... --{'>'}
							<br />
							&emsp;&emsp;{'<'}button id="submitButton" type="button"{'>'}
							Отправить{'<'}/button{'>'}
							<br />
							{'<'}/form{'>'}
							<br />
							<br />
							{'<'}script{'>'}
							<br />
							&emsp;&emsp;document.getElementById('submitButton').addEventListener('click',
							function() &#123;
							<br />
							&emsp;&emsp;&emsp;&emsp;document.getElementById('myForm').requestSubmit();
							<br />
							&emsp;&emsp;&#125;);
							<br />
							{'<'}/script{'>'}
						</Examples>
					</li>
				</ol>
			</p>
			<p>
				Разница между ними заключается в том, что <b>.submit()</b> вызывается на
				самой форме, в то время как <b>.requestSubmit()</b> вызывается на
				элементе (например, кнопке) и позволяет этому элементу инициировать
				процесс отправки формы с учетом дополнительных настроек или обработчиков
				событий.
			</p>
		</div>
	)
}

export default Question
