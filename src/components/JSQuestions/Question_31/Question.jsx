import React from 'react'
import { Examples } from '../../Examples/Examples'

const Question = () => {
	return (
		<div>
			<p>
				В JavaScript операторы <b>&&</b> (логическое И) и <b>||</b> (логическое
				ИЛИ) являются логическими операторами, используемыми для выполнения
				логических операций над значениями и возвращения результата в виде
				булевого значения (true или false).
			</p>
			<p>
				<ol>
					<li>
						<b>Логическое И (&&):</b>
						<ul>
							<li>
								Оператор <b>&&</b> возвращает <b>true</b>, если оба операнда
								равны <b>true</b>, иначе возвращает <b>false</b>.
							</li>
							<li>
								Если первый операнд является <b>false</b>, результат операции
								всегда будет <b>false</b>.
							</li>
							<li>
								Если первый операнд является <b>true</b>, возвращается значение
								второго операнда.
							</li>
						</ul>
						Пример:
						<Examples>
							console.log(true && true); // Output: true <br />
							console.log(true && false); // Output: false <br />
							console.log(false && true); // Output: false <br />
							console.log(false && false); // Output: false
						</Examples>
					</li>
					<li>
						<b>Логическое ИЛИ (||):</b>
						<ul>
							<li>
								Оператор <b>||</b> возвращает <b>true</b>, если хотя бы один из
								операндов равен <b>true</b>.
							</li>
							<li>
								Если первый операнд является <b>true</b>, результат операции
								всегда будет <b>true</b>.
							</li>
							<li>
								Если первый операнд является <b>false</b>, возвращается значение
								второго операнда.
							</li>
						</ul>
						Пример:
						<Examples>
							console.log(true || true); // Output: true
							<br />
							console.log(true || false); // Output: true
							<br />
							console.log(false || true); // Output: true
							<br />
							console.log(false || false); // Output: false
						</Examples>
					</li>
				</ol>
			</p>
			<p>
				Эти логические операторы часто используются для управления потоком
				выполнения кода, проверок условий и установки значений по умолчанию. Они
				также могут применяться в условных операторах{' '}
				<b>(if, while, for и т.д.)</b> для выполнения определенных действий в
				зависимости от результатов логических проверок.
			</p>
		</div>
	)
}

export default Question
