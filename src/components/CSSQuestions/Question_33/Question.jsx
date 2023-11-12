import React from 'react'

const Question = () => {
	return (
		<div>
			<p>
				Свойство text-rendering в CSS используется для определения, как браузер
				рендерит текст на веб-странице. Оно позволяет вам настраивать баланс
				между качеством отображения текста и его производительностью. Свойство
				text-rendering поддерживается в основных современных браузерах.
			</p>
			<p>
				Ниже приведены некоторые значения, которые может принимать
				text-rendering:
			</p>
			<p>
				<ol>
					<li>
						<b>auto (по умолчанию):</b> <br />
						Это значение оставляет выбор рендеринга текста на усмотрение
						браузера. Браузер решает, как наилучшим образом сбалансировать
						качество и производительность.
					</li>
					<li>
						<b>optimizeSpeed:</b> <br />
						Это значение предназначено для максимизации производительности, и
						текст может отображаться менее четко. Это полезно, например, для
						мобильных устройств или при работе с большими объемами текста.
					</li>
					<li>
						<b>optimizeLegibility:</b> <br />
						Это значение предназначено для максимизации читаемости текста, даже
						за счет производительности. Оно активирует сглаживание шрифтов и
						другие механизмы для улучшения визуального восприятия текста.
					</li>
					<li>
						<b>geometricPrecision:</b> <br />
						Это значение управляет геометрической точностью отображения текста.
						Оно может быть полезным при отображении мелких текстовых элементов.
					</li>
				</ol>
			</p>
			<p>
				Это свойство полезно, когда важно балансировать качество отображения
				текста и производительность в зависимости от контекста вашего
				веб-приложения или сайта.
			</p>
		</div>
	)
}

export default Question
