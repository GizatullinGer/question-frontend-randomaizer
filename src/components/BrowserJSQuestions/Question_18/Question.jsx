import React from 'react'
import { Examples } from '../../Examples/Examples'

const Question = () => {
	return (
		<div>
			<p>
				<b>event.target</b> и <b>event.currentTarget</b> - это свойства объекта
				события (Event), используемые для определения элемента, на котором
				произошло событие, и элемента, к которому был прикреплен обработчик
				события.
			</p>
			<p>
				<ol>
					<li>
						<b>event.target:</b>
						<ul>
							<li>
								<b>event.target:</b> возвращает элемент, который фактически
								инициировал событие.
							</li>
							<li>
								Если событие было вызвано на вложенном элементе в результате
								всплытия (bubbling) события, то <b>event.target:</b> будет
								ссылаться на этот вложенный элемент, на котором произошло
								событие.
							</li>
							<li>
								Например, если у вас есть список ({'<'}ul{'>'}) с несколькими
								элементами списка ({'<'}li{'>'}), и вы кликаете на один из
								элементов списка, то event.target будет указывать на конкретный
								элемент {'<'}li{'>'}, на котором произошел клик.
							</li>
						</ul>
					</li>
					<li>
						<b>event.currentTarget:</b>
						<ul>
							<li>
								<b>event.currentTarget</b> возвращает элемент, на котором
								прикреплен текущий обработчик события.
							</li>
							<li>
								Это свойство всегда указывает на элемент, на котором находится
								текущий обработчик события, вне зависимости от того, где событие
								фактически произошло.
							</li>
							<li>
								Если событие было вызвано на вложенном элементе в результате
								всплытия (bubbling) события, то <b>event.currentTarget</b> будет
								ссылаться на элемент, к которому был прикреплен обработчик
								события, то есть на элемент, на котором обработчик был
								зарегистрирован.
							</li>
						</ul>
					</li>
				</ol>
			</p>
			<p>Пример:</p>
			<Examples>
				{'<'}div id="parent"{'>'}
				<br />
				&emsp;&emsp;{'<'}button id="btn"{'>'}Нажми меня{'<'}/button{'>'}
				<br />
				{'<'}/div{'>'}
				<br />
				<br />
				{'<'}script{'>'}
				<br />
				&emsp;&emsp;let parent = document.getElementById('parent');
				<br />
				&emsp;&emsp;let btn = document.getElementById('btn');
				<br />
				<br />
				&emsp;&emsp;parent.addEventListener('click', function(event) &#123;
				<br />
				&emsp;&emsp;&emsp;&emsp;console.log('event.target:', event.target); //
				Отобразит кнопку (event.target указывает на элемент, на котором
				произошло событие)
				<br />
				&emsp;&emsp;&emsp;&emsp;console.log('event.currentTarget:',
				event.currentTarget); // Отобразит родительский div (event.currentTarget
				указывает на элемент, на котором зарегистрирован обработчик)
				<br />
				&emsp;&emsp;&#125;);
				<br />
				<br />
				&emsp;&emsp;btn.addEventListener('click', function(event) &#123;
				<br />
				&emsp;&emsp;&emsp;&emsp;console.log('event.target:', event.target); //
				Отобразит кнопку (event.target указывает на элемент, на котором
				произошло событие)
				<br />
				&emsp;&emsp;&emsp;&emsp;console.log('event.currentTarget:',
				event.currentTarget); // Отобразит кнопку (event.currentTarget указывает
				на элемент, на котором зарегистрирован обработчик)
				<br />
				&emsp;&emsp;&#125;);
				<br />
				{'<'}/script{'>'}
			</Examples>
			<p>
				Используйте <b>event.target</b>, чтобы получить элемент, на котором
				произошло событие, и <b>event.currentTarget</b>, чтобы получить элемент,
				на котором был зарегистрирован обработчик события.
			</p>
		</div>
	)
}

export default Question
