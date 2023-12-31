import React from 'react'

const Question = () => {
	return (
		<div>
			<p>
				URI (Uniform Resource Identifier) и URL (Uniform Resource Locator) - это
				оба типа идентификаторов ресурсов в сети, но они имеют некоторые
				различия.
			</p>
			<h3>URI (Uniform Resource Identifier):</h3>
			<p>
				<ul>
					<li>
						<b>URI </b>- это общий термин, используемый для идентификации
						ресурсов в сети, включая идентификацию и локацию.
					</li>
					<li>
						Он является более общим понятием и включает как URL, так и URN
						(Uniform Resource Name).
					</li>
					<li>
						<b>URI </b>может быть любым уникальным идентификатором, который
						обеспечивает способ идентификации ресурса, но не обязательно
						указывает на его местоположение.
					</li>
				</ul>
			</p>
			<h3>URL (Uniform Resource Locator):</h3>
			<p>
				<ul>
					<li>
						<b>URL </b>- это подтип URI и представляет собой конкретный адрес,
						указывающий на местоположение ресурса в сети, а также метод доступа
						к этому ресурсу.
					</li>
					<li>
						<b>URL </b>предоставляет информацию о местонахождении ресурса,
						обычно включая протокол доступа (например, HTTP, HTTPS), доменное
						имя, путь к ресурсу, порт, параметры запроса и т.д.
					</li>
				</ul>
			</p>
			<h3>Итак, основное различие:</h3>
			<p>
				<ul>
					<li>
						<b>URI </b>- это общий термин для идентификации ресурсов в сети,
						включая как местоположение ресурса, так и другие идентификационные
						данные.
					</li>
					<li>
						<b>URL </b>- это конкретный подтип URI, который обычно указывает на
						местоположение ресурса и обеспечивает информацию о том, как получить
						к нему доступ.
					</li>
				</ul>
			</p>
			<p>
				В целом, <b>URL</b> является частным случаем <b>URI</b>, обозначая
				местоположение ресурса в сети, в то время как <b>URI</b> является более
				общим понятием, включающим как <b>URL</b>, так и другие типы
				идентификаторов ресурсов.
			</p>
		</div>
	)
}

export default Question
