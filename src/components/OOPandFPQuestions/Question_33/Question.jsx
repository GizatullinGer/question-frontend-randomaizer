import React from 'react'

const Question = () => {
	return (
		<div>
			<p>
				Реактивное программирование (RP) - это парадигма программирования,
				ориентированная на обработку потоков данных и реагирование на изменения.
				Это подход, который фокусируется на объявлении зависимостей между
				данными и автоматическом обновлении данных при изменении входящих
				данных.
			</p>
			<p>Основные концепции реактивного программирования:</p>
			<h3>1. Потоки данных (Data Streams):</h3>
			<p>
				RP основан на работе с потоками данных. Это могут быть значения,
				события, изменения или обновления, которые могут быть переданы через
				поток данных.
			</p>
			<h3>2. Обработка событий (Event-Driven):</h3>
			<p>
				RP использует событийно-ориентированную модель, где обработка данных
				происходит при возникновении событий или изменений.
			</p>
			<h3>3. Наблюдатели (Observers) и Подписка (Subscriptions):</h3>
			<p>
				RP включает в себя концепцию наблюдателей (observers) и подписок
				(subscriptions). Наблюдатели отслеживают изменения в потоках данных, а
				подписки устанавливают отношения между наблюдателями и источниками
				данных.
			</p>
			<h3>4. Реакция на изменения (Reacting to Changes):</h3>
			<p>
				RP позволяет автоматически обновлять данные и интерфейсы при изменении
				данных, на которые они подписаны.
			</p>
			<h3>
				5. Основанный на декларативном программировании (Declarative
				Programming):
			</h3>
			<p>
				RP стремится к декларативному подходу, описывая желаемый результат, а не
				последовательность шагов, которые нужно выполнить.
			</p>
			<h3>Примеры фреймворков, использующих RP:</h3>
			<ol>
				<li>
					<b>RxJS: </b>Библиотека реактивного программирования для JavaScript.
				</li>
				<li>
					<b>ReactiveX: </b>Кроссплатформенная библиотека, поддерживающая
					реактивное программирование.
				</li>
			</ol>
			<p>
				Реактивное программирование обеспечивает более гибкий и реагирующий
				подход к работе с данными, особенно в асинхронных сценариях, таких как
				веб-разработка, пользовательские интерфейсы, обработка событий и другие
				ситуации, где важна немедленная обработка изменяющихся данных.
			</p>
		</div>
	)
}

export default Question
