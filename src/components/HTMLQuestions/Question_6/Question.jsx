import React from 'react'
import { Examples } from '../../Examples/Examples'

const Question_1 = () => {
	return (
		<div>
			<p>
				Базовая структура HTML-страницы включает несколько основных элементов,
				которые обеспечивают правильное отображение и семантику веб-документа.
			</p>
			<Examples>
				&lt;!DOCTYPE html&gt;
				<br />
				&lt;html lang="en"&gt;
				<br />
				&emsp;&emsp;&lt;head&gt;
				<br />
				&emsp;&emsp;&emsp;&emsp;&lt;meta charset="UTF-8"&gt;
				<br />
				&emsp;&emsp;&emsp;&emsp;&lt;meta name="viewport"
				content="width=device-width, initial-scale=1.0"&gt;
				<br />
				&emsp;&emsp;&emsp;&emsp;&lt;title&gt;Заголовок страницы&lt;/title&gt;
				<br />
				&emsp;&emsp;&lt;/head&gt;
				<br />
				&emsp;&emsp;&lt;body&gt;
				<br />
				&emsp;&emsp;&emsp;&emsp;&lt;!-- Содержимое страницы --&gt;
				<br />
				&emsp;&emsp;&lt;/body&gt;
				<br />
				&lt;/html&gt;
			</Examples>
		</div>
	)
}

export default Question_1
