import React from 'react'

const Question = () => {
	return (
		<div>
			<p>
				Для подсветки текста в CSS используются псевдоэлементы ::selection и
				::placeholder:
			</p>
			<p>
				<ol>
					<li>
						<b>::selection:</b>
						<br />
						Этот псевдоэлемент позволяет стилизовать текст, который выделяется
						пользователем на веб-странице. Вы можете задать цвет текста, фон и
						другие свойства выделенного текста.
					</li>
					<li>
						<b>::placeholder:</b>
						<br />
						Этот псевдоэлемент применяется к тексту в плейсхолдерах (замещающих
						текстах) в текстовых полях и текстовых областях. Вы можете
						использовать его для стилизации текста, который появляется внутри
						поля ввода, пока пользователь не вводит свой собственный текст.
					</li>
				</ol>
			</p>
		</div>
	)
}

export default Question
