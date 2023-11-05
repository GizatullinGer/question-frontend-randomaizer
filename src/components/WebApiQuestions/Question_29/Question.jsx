import React from 'react'

const Question = () => {
	return (
		<div>
			<p>
				Content Security Policy (CSP) - это дополнительный уровень защиты
				веб-приложений, предназначенный для смягчения и предотвращения атак,
				связанных с внедрением кода (например, атаки XSS) и других
				безопасностей, связанных с обработкой ресурсов в браузере.
			</p>
			<p>
				CSP позволяет владельцам веб-сайтов определить и контролировать, откуда
				браузер может загружать ресурсы, такие как скрипты, стили, изображения и
				другие. Он определяет разрешенные источники, с которых можно получать
				контент, а также запрещает или ограничивает выполнение определенных
				видов кода на странице.
			</p>
			<p>Преимущества CSP включают:</p>
			<p>
				<ol>
					<li>
						<b>Предотвращение атак типа XSS (межсайтовый скриптинг): </b>
						Ограничение возможности загрузки и выполнения вредоносного
						JavaScript на веб-страницах.
					</li>
					<li>
						<b>Предотвращение атак на внедрение контента: </b>Управление и
						ограничение того, откуда можно загружать ресурсы, предотвращая
						возможность внедрения вредоносного контента.
					</li>
					<li>
						<b>Улучшение безопасности сайта: </b>Обеспечение дополнительного
						слоя защиты для пользователей и данных на веб-сайте.
					</li>
				</ol>
			</p>
			<p>Примеры директив CSP могут включать:</p>
			<p>
				<ul>
					<li>
						<b>default-src </b>Определяет источник по умолчанию для различных
						видов ресурсов.
					</li>
					<li>
						<b>script-src </b>Определяет допустимые источники для JavaScript.
					</li>
					<li>
						<b>style-src </b>Устанавливает разрешенные источники для CSS.
					</li>
				</ul>
			</p>
			<p>
				Реализация CSP варьируется в зависимости от конкретного веб-приложения.
				Правильно настроенная CSP помогает повысить уровень безопасности сайта,
				предотвращая многие известные атаки и угрозы безопасности.
			</p>
		</div>
	)
}

export default Question