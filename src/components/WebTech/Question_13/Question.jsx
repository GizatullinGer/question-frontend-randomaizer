import React from 'react'

const Question = () => {
	return (
		<div>
			<p>
				REST (Representational State Transfer) - это стиль архитектуры
				программного обеспечения для распределенных систем, основанный на наборе
				принципов, которые позволяют построить масштабируемые и гибкие
				веб-сервисы. Основные принципы REST-архитектуры включают:
			</p>
			<p>
				<ol>
					<li>
						<b>Клиент-серверная модель: </b>Отделяет пользовательский интерфейс
						(клиент) от сервера, позволяя им развиваться независимо друг от
						друга. Это облегчает масштабирование и обеспечивает более гибкую
						архитектуру.
					</li>
					<li>
						<b>Без состояния (Stateless): </b>Каждый запрос клиента к серверу
						должен содержать всю необходимую информацию для понимания запроса.
						Сервер не хранит состояние клиента между запросами. Это позволяет
						повысить масштабируемость и устойчивость системы.
					</li>
					<li>
						<b>Кэширование: </b>Клиенты могут кэшировать ответы сервера для
						улучшения производительности. Серверы могут указывать, какие ответы
						можно кэшировать и на какой срок.
					</li>
					<li>
						<b>Единообразие интерфейса: </b>Ресурсы должны быть доступны по
						уникальным идентификаторам в виде URI (Uniform Resource Identifier).
						Взаимодействие с ресурсами происходит по определенным
						унифицированным методам (HTTP-методам, таким как GET, POST, PUT,
						DELETE), что делает интерфейс более предсказуемым.
					</li>
					<li>
						<b>Многоуровневая система: </b>Разделение функциональности между
						различными уровнями (например, серверы для хранения данных,
						кэширующие серверы, балансировщики нагрузки и т.д.) способствует
						увеличению масштабируемости и упрощению расширения системы.
					</li>
					<li>
						<b>Код по требованию (необязательно): </b>Это необязательный
						принцип, который позволяет серверу распространять функциональность,
						например, Java апплеты или JavaScript, клиенту для выполнения в
						браузере.
					</li>
				</ol>
			</p>
			<p>
				Соблюдение этих принципов позволяет создавать гибкие, масштабируемые и
				легко расширяемые веб-сервисы, что делает REST одним из наиболее
				популярных и часто используемых подходов для построения веб-сервисов.
			</p>
		</div>
	)
}

export default Question
