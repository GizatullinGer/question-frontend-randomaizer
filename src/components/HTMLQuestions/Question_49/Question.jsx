import React from 'react'

const Question_1 = () => {
	return (
		<div>
			<p>
				<b>enterkeyhint</b> - это атрибут HTML, который предоставляет подсказку
				браузеру относительно ожидаемого действия клавиши Enter при
				взаимодействии с полем ввода. Он используется для указания
				предпочтительного действия, которое пользователь должен выполнить после
				ввода данных в текстовое поле.
			</p>
			<p>
				Этот атрибут предоставляет подсказку браузеру относительно того, что
				ожидается от клавиши Enter, что может улучшить пользовательский опыт,
				особенно на мобильных устройствах.
			</p>
			<p>
				Возможные значения для атрибута <b>enterkeyhint</b>:
			</p>
			<p>
				<ul>
					<li>
						<b>enter</b>: Указывает, что ожидается действие "ввод" или отправки
						данных.
					</li>
					<li>
						<b>done</b>: Подсказывает, что поле ввода должно считаться
						завершенным.
					</li>
					<li>
						<b>go</b>: Указывает, что ожидается навигация или переход.
					</li>
					<li>
						<b>previous</b>: Указывает, что ожидается переход к предыдущему полю
						ввода.
					</li>
					<li>
						<b>search</b>: Подсказывает, что ожидается поиск.
					</li>
				</ul>
			</p>
		</div>
	)
}

export default Question_1