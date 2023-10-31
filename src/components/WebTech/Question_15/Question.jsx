import React from 'react'

const Question = () => {
	return (
		<div>
			<p>
				Модель определяет четыре уровня зрелости (или уровня взаимодействия) для
				RESTful веб-сервисов:
			</p>
			<p>
				<ol>
					<li>
						<b>Уровень 0 - "Браузер": </b>На этом уровне взаимодействие с
						веб-сервисом сводится к использованию одного единственного URI для
						доступа ко всем ресурсам, а обмен информацией происходит через
						HTML-формы и параметры URL.
					</li>
					<li>
						<b>Уровень 1 - "Одно ресурсное URI": </b>Здесь используется по
						крайней мере отдельный URI для каждого ресурса. Это позволяет
						улучшить представление о ресурсах в системе, хотя взаимодействие
						может оставаться ориентированным на использование методов HTTP.
					</li>
					<li>
						<b>Уровень 2 - "Использование методов HTTP": </b>На этом уровне
						происходит использование стандартных методов HTTP (GET, POST, PUT,
						DELETE) для манипуляции ресурсами. Это позволяет более точно и
						эффективно управлять данными, и взаимодействовать с ними.
					</li>
					<li>
						<b>Уровень 3 - "Гипермедиа как движущая сила": </b>Этот уровень
						является самым высоким уровнем зрелости в модели Ричардсона. Он
						предполагает использование гипермедиа (например, форматов данных,
						таких как HAL, JSON-LD, Siren), которые позволяют клиенту
						динамически понимать, как взаимодействовать с веб-сервисом без
						необходимости предварительного знания о его функциональности.
					</li>
				</ol>
			</p>
			<p>
				Эта модель помогает понять и классифицировать уровни использования
				REST-архитектуры в веб-сервисах, от простых до более сложных, где
				наивысший уровень позволяет использовать преимущества REST-архитектуры
				наиболее полноценно.
			</p>
		</div>
	)
}

export default Question