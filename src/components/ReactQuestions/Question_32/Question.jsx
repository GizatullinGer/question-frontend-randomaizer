import React from 'react'

const Question = () => {
	return (
		<div>
			<p>
				Предохранители (Error Boundaries) - это механизм в React, который
				позволяет компонентам обрабатывать ошибки во время выполнения в своих
				дочерних компонентах в иерархии. Они являются специальными компонентами,
				которые ловят и обрабатывают ошибки, которые могут возникнуть внутри
				своих дочерних компонентов во время рендеринга, методов жизненного цикла
				или при обработке событий.
			</p>
			<h3>Как работают предохранители (Error Boundaries):</h3>
			<ol>
				<li>
					Границы ошибок обнаруживают ошибку во время рендеринга, в методах
					жизненного цикла или обработки событий своих дочерних компонентов.
				</li>
				<li>
					Они перехватывают эту ошибку во время рендеринга и позволяют
					компоненту отобразить запасное содержимое вместо ошибки.
				</li>
				<li>
					При использовании предохранителя компонент может отобразить
					специальный пользовательский интерфейс, сообщение об ошибке или
					выполнить какие-то действия для восстановления состояния приложения.
				</li>
			</ol>
			<h3>Как создать предохранитель (Error Boundary):</h3>
			<p>
				Чтобы создать предохранитель, вы должны создать компонент, который
				наследует от <b>React.Component</b> и определить методы{' '}
				<b>componentDidCatch</b> или <b>static getDerivedStateFromError</b>.
			</p>
		</div>
	)
}

export default Question
