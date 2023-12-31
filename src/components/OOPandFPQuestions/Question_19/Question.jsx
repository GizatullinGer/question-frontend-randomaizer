import React from 'react'
import { Examples } from '../../Examples/Examples'

const Question = () => {
	return (
		<div>
			<p>
				Геттеры (getters) и сеттеры (setters) - это особые методы, которые
				позволяют управлять доступом к свойствам объектов в JavaScript. Они
				позволяют контролировать чтение и запись значений свойств, обеспечивая
				дополнительную логику при доступе к данным.
			</p>
			<h3>Геттеры (getters):</h3>
			<p>
				<ol>
					<li>
						<b>Что они делают: </b>
						Геттеры позволяют получать значение свойства объекта.
					</li>
					<li>
						<b>Синтаксис: </b>
						Геттеры определяются с использованием ключевого слова <b>
							get
						</b>{' '}
						перед именем метода без использования скобок в объявлении свойства
						объекта.
					</li>
					<li>
						<b>Пример: </b>
						<Examples>
							const obj = &#123;
							<br />
							&emsp;&emsp;get myProperty() &#123;
							<br />
							&emsp;&emsp;&emsp;&emsp;return this._myProperty;
							<br />
							&emsp;&emsp;&#125;
							<br />
							&#125;;
							<br />
							<br />
							obj._myProperty = 'Значение';
							<br />
							console.log(obj.myProperty); // Вернет 'Значение'
						</Examples>
					</li>
				</ol>
			</p>
			<h3>Сеттеры (setters):</h3>
			<p>
				<ol>
					<li>
						<b>Что они делают: </b>
						Сеттеры позволяют устанавливать значение свойства объекта.
					</li>
					<li>
						<b>Синтаксис: </b>
						Сеттеры определяются с использованием ключевого слова <b>
							set
						</b>{' '}
						перед именем метода без использования скобок в объявлении свойства
						объекта.
					</li>
					<li>
						<b>Пример: </b>
						<Examples>
							const obj = &#123;
							<br />
							&emsp;&emsp;_myProperty: '',
							<br />
							&emsp;&emsp;set myProperty(newValue) &#123;
							<br />
							&emsp;&emsp;&emsp;&emsp;this._myProperty = newValue;
							<br />
							&emsp;&emsp;&#125;
							<br />
							&#125;;
							<br />
							<br />
							obj.myProperty = 'Новое значение';
							<br />
							console.log(obj._myProperty); // Вернет 'Новое значение'
						</Examples>
					</li>
				</ol>
			</p>
			<h3>Особенности использования геттеров и сеттеров:</h3>
			<p>
				<ol>
					<li>
						<b>Использование: </b>
						Геттеры и сеттеры позволяют добавить дополнительную логику при
						получении и установке значений свойств объектов.
					</li>
					<li>
						<b>Именование: </b>
						Геттеры и сеттеры обычно используются для свойств с префиксом{' '}
						<b>_</b>, чтобы избежать конфликтов имен с методами получения и
						установки значений.
					</li>
					<li>
						<b>Применение: </b>Они могут быть использованы для валидации,
						фильтрации или преобразования данных при доступе к свойствам
						объектов.
					</li>
				</ol>
			</p>
			<p>
				Геттеры и сеттеры предоставляют удобный способ добавить контроль и
				дополнительную логику к работе с данными в объектах, что улучшает
				безопасность, читаемость и поддерживаемость кода.
			</p>
		</div>
	)
}

export default Question
