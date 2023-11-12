import React from 'react'

const Question = () => {
	return (
		<div>
			<p>
				В CSS существует несколько способов задания цвета. Вот некоторые из них:
			</p>
			<p>
				<ol>
					<li>
						<b>Именованные цвета: </b>Вы можете использовать предопределенные
						имена цветов в CSS, такие как "red", "blue", "green" и др.
					</li>
					<li>
						<b>HEX-код: </b>Вы можете использовать HEX-коды для представления
						цветов. HEX-код состоит из шестнадцатеричных символов (#), за
						которыми следует комбинация шестнадцатеричных цифр (0-9, A-F).
					</li>
					<li>
						<b>RGB-значения: </b>Вы можете использовать RGB-значения для
						представления цвета. RGB указывает на количество красного (R),
						зеленого (G) и синего (B) цветов, каждый из которых может быть в
						диапазоне от 0 до 255.
					</li>
					<li>
						<b>RGBA-значения: </b>Аналогично RGB, но с добавлением альфа-канала,
						который контролирует прозрачность цвета. Значение альфа находится в
						диапазоне от 0 (полностью прозрачный) до 1 (полностью непрозрачный).
					</li>
					<li>
						<b>HSL и HSLA: </b>HSL представляет цвета с использованием тон,
						насыщенность и светлоту. HSLA также включает альфа-канал для
						прозрачности.
					</li>
				</ol>
			</p>
			<p>
				Выбор между этими способами часто зависит от вашего уровня комфорта с
				представлением цвета, а также от требований проекта.
			</p>
		</div>
	)
}

export default Question