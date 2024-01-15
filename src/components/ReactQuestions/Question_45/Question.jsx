import React from 'react'

const Question = () => {
	return (
		<div>
			<p>
				shouldComponentUpdate - это метод жизненного цикла в классовых
				компонентах React. Этот метод вызывается перед повторным рендерингом
				компонента и позволяет разработчику решать, следует ли или нет
				производить перерисовку компонента.
			</p>
			<p>
				<b>Аналог useMemo</b>
			</p>
		</div>
	)
}

export default Question
