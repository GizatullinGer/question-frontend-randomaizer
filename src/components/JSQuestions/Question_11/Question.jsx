import React from 'react'

const Question = () => {
	return (
		<div>
			<p>
				Ключевое слово <b>this</b> в JavaScript ссылается на текущий контекст
				выполнения кода. Значение this зависит от того, как функция была
				вызвана.
			</p>
			<p>Значение this может быть следующим в зависимости от контекста:</p>
			<p>
				<ol>
					<li>
						<b>Глобальный контекст:</b> <br />
						Вне функций this ссылается на глобальный объект, такой как window в
						браузере или global в Node.js (если код выполняется вне функций).
					</li>
					<li>
						<b>Глобальный контекст:</b> <br />
						<ul>
							<li>
								В обычной функции без использования строгого режима ('use
								strict') this указывает на глобальный объект.
							</li>
							<li>
								В строгом режиме this будет undefined, если функция вызывается в
								контексте глобального объекта.
							</li>
							<li>
								Если функция вызывается как метод объекта, this ссылается на сам
								объект, в контексте которого она была вызвана.
							</li>
							<li>
								Если функция вызывается через call(), apply() или bind(), this
								определяется явно через передачу объекта в эти методы.
							</li>
						</ul>
					</li>
					<li>
						<b>Конструкторы:</b> <br />В конструкторе this ссылается на только
						что созданный экземпляр объекта.
					</li>
					<li>
						<b>Обработчики событий:</b> <br />В обработчиках событий в браузере
						this указывает на элемент, на котором произошло событие.
					</li>
					<li>
						<b>Arrow-функции:</b> <br />В стрелочных функциях this привязан к
						окружению, в котором они были созданы, а не к месту своего вызова.
						Они не имеют собственного this, поэтому значение this внутри
						стрелочной функции берется из контекста, в котором они были
						определены.
					</li>
				</ol>
			</p>
		</div>
	)
}

export default Question