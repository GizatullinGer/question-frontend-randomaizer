import React from 'react'
import { Examples } from '../../Examples/Examples'

const Question = () => {
	return (
		<div>
			<p>
				На веб-страницу можно добавить CSS стили различными способами. Вот
				несколько популярных вариантов:
			</p>
			<ul>
				<li>
					<b>Внутренние стили (Inline CSS): </b>
					Вы можете добавить CSS стили непосредственно в теги HTML с помощью
					атрибута style. Этот метод позволяет применять стили к конкретному
					элементу.
					<Examples>
						&lt;p style="color: blue; font-size: 18px;"&gt;Этот текст будет
						синего цвета и размером шрифта 18 пикселей.&lt;/p&gt;
					</Examples>
				</li>
				<li>
					<b>Внутренние стили (Internal CSS): </b>Вы можете добавить блок стилей
					непосредственно в секцию &lt;head&gt; веб-страницы с помощью тега
					&lt;style&gt;. Этот метод позволяет применять стили ко всей странице
					или к её частям.
					<Examples>
						&lt;head&gt;
						<br />
						&emsp;&emsp;&lt;title&gt;Моя веб-страница&lt;/title&gt;
						<br />
						&emsp;&emsp;&lt;style&gt;
						<br />
						&emsp;&emsp;&emsp;&emsp;p &#123;
						<br />
						&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;color: blue;
						<br />
						&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;font-size: 18px;
						<br />
						&emsp;&emsp;&emsp;&emsp;&#125;
						<br />
						&emsp;&emsp;&lt;/style&gt;
						<br />
						&lt;/head&gt;
						<br />
						&lt;body&gt;
						<br />
						&emsp;&emsp;&lt;p&gt;Этот текст будет синего цвета и размером шрифта
						18 пикселей.&lt;/p&gt;
						<br />
						&lt;/body&gt;
						<br />
					</Examples>
				</li>
				<li>
					<b>Внешние стили (External CSS): </b> Рекомендуемый способ организации
					стилей - создание отдельного файла с расширением .css, в котором
					определяются все стили, и подключение этого файла к веб-странице с
					помощью тега &lt;link&gt;. Внешние стили позволяют переиспользовать
					стили на разных страницах и улучшают обслуживаемость сайта.
					<p>Создать файл styles.css с содержимым:</p>
					<Examples>
						p &#123;
						<br />
						&emsp;&emsp;color: blue;
						<br />
						&emsp;&emsp;font-size: 18px;
						<br />
						&#125;
					</Examples>
					<p>
						Затем добавить следующий код в секцию &lt;head&gt; вашей
						HTML-страницы:
					</p>
					<Examples>
						&lt;head&gt;
						<br />
						&emsp;&emsp;&lt;title&gt;Моя веб-страница&lt;/title&gt;
						<br />
						&emsp;&emsp;&lt;link rel="stylesheet" href="styles.css"&gt;
						<br />
						&lt;/head&gt;
						<br />
						&lt;body&gt;
						<br />
						&emsp;&emsp;&lt;p&gt;Этот текст будет синего цвета и размером шрифта
						18 пикселей.&lt;/p&gt;
						<br />
						&lt;/body&gt;
					</Examples>
				</li>
				<li>
					<b>Использование атрибута @import: </b> Вы также можете импортировать
					внешние стили внутри блока &lt;style&gt; с помощью атрибута @import.
					<Examples>
						&lt;head&gt;
						<br />
						&emsp;&emsp;&lt;title&gt;Моя веб-страница&lt;/title&gt;
						<br />
						&emsp;&emsp;&lt;style&gt;
						<br />
						@import url("styles.css");
						<br />
						&emsp;&emsp;&lt;/style&gt;
						<br />
						&lt;/head&gt;
						<br />
						&lt;body&gt;
						<br />
						&emsp;&emsp;&lt;p&gt;Этот текст будет синего цвета и размером шрифта
						18 пикселей.&lt;/p&gt;
						<br />
						&lt;/body&gt;
					</Examples>
				</li>
			</ul>
		</div>
	)
}

export default Question
