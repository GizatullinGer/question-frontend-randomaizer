import React from 'react'

const Question_1 = () => {
	return (
		<div>
			<p>
				<b>novalidate</b> - это атрибут, который используется в элементе
				&lt;form&gt; в HTML и позволяет отключить встроенную браузерную
				валидацию формы.
			</p>
			<p>
				Когда вы отправляете форму, браузер по умолчанию проводит валидацию
				введенных данных перед отправкой на сервер. Эта встроенная валидация
				может проверять обязательные поля, типы данных, атрибуты <b>required</b>
				, <b>minlength</b>, <b>maxlength</b>, <b>pattern</b>, и другие, в
				зависимости от указанных атрибутов в полях формы.
			</p>
			<p>
				Добавив атрибут <b>novalidate</b> к тегу &lt;form&gt;, вы отключаете эту
				встроенную валидацию браузера. Это может быть полезным в случаях, когда
				вы планируете осуществить валидацию формы с помощью JavaScript или
				обрабатывать данные формы на стороне сервера и не хотите использовать
				встроенную браузерную валидацию.
			</p>
		</div>
	)
}

export default Question_1
