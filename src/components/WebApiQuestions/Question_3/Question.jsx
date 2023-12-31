import React from 'react'

const Question = () => {
	return (
		<div>
			<p>
				HTTP-запросы могут использовать различные методы (также называемые
				HTTP-методами), которые указывают, какое действие должно быть выполнено
				на сервере. Ниже перечислены наиболее распространенные методы
				HTTP-запросов:
			</p>
			<p>
				<ol>
					<li>
						<b>GET: </b>Используется для запроса данных с сервера. Клиент
						запрашивает ресурс, и сервер отправляет запрошенные данные. Пример:
						получение веб-страницы или изображения.
					</li>
					<li>
						<b>POST: </b>Используется для отправки данных на сервер. Эти данные
						могут быть отправлены для обработки, сохранения или создания новых
						ресурсов на сервере. Пример: отправка данных из формы на сервер.
					</li>
					<li>
						<b>PUT: </b>Используется для обновления данных на сервере. Клиент
						отправляет данные, указывая ресурс, который нужно обновить. Если
						ресурс не существует, он может быть создан. Пример: обновление
						информации о пользователе.
					</li>
					<li>
						<b>DELETE: </b>Используется для удаления ресурса на сервере. Клиент
						указывает ресурс, который должен быть удален. Пример: удаление поста
						в социальной сети.
					</li>
					<li>
						<b>PATCH: </b>Похож на метод PUT, но используется для частичного
						обновления ресурса. Клиент отправляет только те данные, которые
						нужно изменить, не затрагивая остальные данные.
					</li>
					<li>
						<b>HEAD: </b>Подобен методу GET, но сервер отправляет только
						заголовки ответа без фактического содержания ресурса. Этот метод
						может использоваться для получения метаданных о ресурсе без передачи
						больших объемов данных.
					</li>
					<li>
						<b>OPTIONS: </b>Используется для запроса информации о поддерживаемых
						методах, заголовках и других параметрах на сервере. Этот метод может
						быть полезен для клиента, чтобы понять, какие операции можно
						выполнять на определенном ресурсе.
					</li>
					<li>
						<b>CONNECT: </b>Резервированный метод, используемый для установки
						сетевого соединения с ресурсом, который может быть использован как
						туннель. Обычно используется для проксирования запросов.
					</li>
					<li>
						<b>TRACE: </b>Резервированный метод, который инициирует цепочку
						диагностических запросов к серверу. Это может быть полезно для
						отладки, но по соображениям безопасности он часто отключен.
					</li>
				</ol>
			</p>
		</div>
	)
}

export default Question
