import React from 'react'
import { Examples } from '../../Examples/Examples'

const Question_1 = () => {
	return (
		<div>
			<p>
				<b>ApplicationCache</b> в HTML5 - это механизм для создания
				оффлайн-приложений, который позволяет веб-страницам сохранять ресурсы
				(такие как HTML, CSS, JavaScript, изображения и другие файлы) локально
				на устройстве пользователя. Это позволяет пользователям просматривать
				веб-страницы и взаимодействовать с приложениями, даже если у них нет
				подключения к Интернету.
			</p>
			<p>Основные компоненты ApplicationCache:</p>
			<p>
				<ol>
					<li>
						<b>Cache Manifest (Манифест кэша): </b>Это файл, который определяет,
						какие ресурсы должны быть кэшированы. Он обычно идентифицирует
						файлы, которые должны быть доступны оффлайн, указывая их
						относительные пути.
					</li>
					<li>
						<b>Оффлайн-режим: </b>Когда приложение кэшировано, пользователи
						могут использовать его даже без подключения к Интернету, поскольку
						браузер использует ресурсы, сохраненные локально.
					</li>
					<li>
						<b>Обновления кэша: </b>При обновлении страницы, браузер
						автоматически проверяет манифест кэша, чтобы определить, есть ли
						новые версии файлов для загрузки. Если изменения в манифесте
						обнаружены, браузер загружает обновленные файлы.
					</li>
				</ol>
			</p>
			<p>Пример использования манифеста кэша в HTML:</p>
			<Examples>
				&lt;!DOCTYPE HTML&gt; <br />
				&lt;html manifest="example.appcache"&gt;
				<br />
				&emsp;&emsp;&lt;!-- ... --&gt;
				<br />
				&lt;/html&gt;
			</Examples>
			<p>
				Содержимое файла <b>example.appcache</b> может выглядеть примерно так:
			</p>
			<Examples>
				CACHE MANIFEST
				<br />
				# Версия 1.0
				<br />
				<br />
				CACHE:
				<br />
				index.html
				<br />
				styles.css
				<br />
				script.js
				<br />
				images/logo.png
				<br />
				<br />
				NETWORK:
				<br />
				*<br />
				<br />
				FALLBACK:
				<br />/ /offline.html
			</Examples>
			<p>
				<ul>
					<li>
						<b>CACHE </b>- указывает на файлы, которые нужно кэшировать.
					</li>
					<li>
						<b>NETWORK </b>- задает файлы, которые требуют подключения к
						Интернету для загрузки.
					</li>
					<li>
						<b>FALLBACK </b>- определяет, какие файлы будут использоваться в
						случае отсутствия подключения к Интернету.
					</li>
				</ul>
			</p>
			<p>
				Однако, ApplicationCache имеет свои ограничения и проблемы, и по мере
				развития веб-технологий он был объявлен устаревшим (deprecated) в пользу
				Service Workers. Service Workers предоставляют более гибкий и мощный
				способ управления кэшированием и оффлайн-возможностями веб-приложений.
			</p>
		</div>
	)
}

export default Question_1
