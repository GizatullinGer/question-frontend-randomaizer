import React from 'react'

const Question = () => {
	return (
		<div>
			<p>
				CORS (Cross-Origin Resource Sharing) - это механизм веб-безопасности,
				который позволяет ограничивать запросы к ресурсам (например, AJAX
				запросы) с веб-страницы к другому домену, отличному от источника, с
				которого была загружена исходная веб-страница. CORS управляет
				разрешениями, позволяющими или запрещающими браузеру делать такие
				запросы между разными источниками.
			</p>
			<p>
				Как правило, веб-браузеры следуют политике "самого ограничительного
				выбора" (same-origin policy), что означает, что JavaScript код,
				выполняющийся на веб-странице, имеет доступ к данным только с того же
				самого источника, с которого была загружена веб-страница. Это
				ограничение безопасности предотвращает многие виды атак, таких как XSS
				(межсайтовый скриптинг).
			</p>
			<p>
				CORS позволяет веб-серверам указывать, кто и как может обращаться к его
				ресурсам. Это осуществляется с помощью HTTP-заголовков, которые сервер
				отправляет браузеру, разрешая или запрещая определенные типы запросов
				(например, с использованием заголовков "Access-Control-Allow-Origin",
				"Access-Control-Allow-Methods" и др.).
			</p>
			<p>Преимущества CORS:</p>
			<p>
				<ol>
					<li>
						<b>Расширение функциональности веб-приложений: </b>Позволяет
						веб-страницам делать запросы к другим источникам данных, улучшая
						функциональность веб-приложений.
					</li>
					<li>
						<b>Безопасность: </b>Обеспечивает контроль доступа к ресурсам и
						предотвращает потенциальные угрозы безопасности, позволяя серверам
						управлять тем, кто и как использует их ресурсы.
					</li>
				</ol>
			</p>
			<p>
				CORS часто используется при создании веб-приложений, которые должны
				взаимодействовать с ресурсами на других доменах или поддоменах для
				получения данных или выполнения запросов.
			</p>
		</div>
	)
}

export default Question
