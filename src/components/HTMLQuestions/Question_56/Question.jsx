import React from 'react'

const Question_1 = () => {
	return (
		<div>
			<p>
				Основные атрибуты HTML-форм, которые оказывают влияние на отправку
				данных с веб-страницы:
			</p>
			<p>
				<ol>
					<li>
						<b>action: </b>Определяет URL, куда будут отправлены данные формы
						при ее отправке. Это может быть относительный или абсолютный путь к
						серверу, который будет обрабатывать данные формы.
					</li>
					<li>
						<b>method: </b>Указывает метод HTTP, используемый для отправки
						данных формы. Два основных значения: <b>GET</b> и <b>POST</b>.
					</li>
					<li>
						<b>name: </b>Устанавливает имя формы, которое может быть
						использовано для обращения к форме из JavaScript.
					</li>
					<li>
						<b>enctype: </b>Определяет способ кодирования данных, используемый
						при отправке формы. Обычные значения:
					</li>
					<li>
						<b>target: </b>Определяет, куда браузер будет загружать ответ от
						сервера после отправки формы.
					</li>
					<li>
						<b>autocomplete: </b>Управляет функцией автозаполнения данных в
						полях формы. Может быть on (включено) или off (выключено).
					</li>
					<li>
						<b>novalidate: </b>При его наличии предотвращает встроенную
						HTML-валидацию формы перед отправкой. Это может быть полезно для
						настройки собственной клиентской валидации.
					</li>
				</ol>
			</p>
		</div>
	)
}

export default Question_1