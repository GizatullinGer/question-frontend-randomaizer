import React from 'react'

const Question = () => {
	return (
		<div>
			<p>
				Скрывание содержимого тега от скринридеров не рекомендуется, так как это
				может привести к ухудшению доступности веб-сайта для пользователей с
				ограниченными возможностями. Однако есть случаи, когда вам может
				понадобиться скрыть текст или элемент
			</p>
			<p>Примеры скрытия элементов от скринридера:</p>
			<p>
				<ol>
					<li>aria-hidden="true"</li>
					<li>visibility-hidden</li>
					<li>visibility-none</li>
					<li>display: none</li>
					<li>Атрибут hidden</li>
				</ol>
			</p>
		</div>
	)
}

export default Question
