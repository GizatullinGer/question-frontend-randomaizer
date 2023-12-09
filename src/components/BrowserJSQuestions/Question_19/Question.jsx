/* eslint-disable react/jsx-no-comment-textnodes */
import React from 'react'
import { Examples } from '../../Examples/Examples'

const Question = () => {
	return (
		<div>
			<p>
				Методы <b>.stopPropagation()</b> и <b>.stopImmediatePropagation()</b>{' '}
				используются для управления процессом распространения событий в DOM, но
				они имеют разные последствия.
			</p>
			<p>
				<ol>
					<li>
						<b>event.stopPropagation():</b>
						<ul>
							<li>
								<b>event.stopPropagation()</b> предотвращает дальнейшее всплытие
								(bubbling) или погружение (capturing) события вверх или вниз по
								иерархии DOM.
							</li>
							<li>
								Если событие произошло во вложенном элементе и вызван метод{' '}
								<b>event.stopPropagation()</b>, то оно не будет далее
								распространяться по родительским или дочерним элементам.
							</li>
							<li>
								Однако другие обработчики на текущем элементе все еще будут
								вызваны, если они были установлены для этого события.
							</li>
						</ul>
					</li>
					<li>
						<b>event.stopImmediatePropagation():</b>
						<ul>
							<li>
								<b>event.stopImmediatePropagation()</b> делает то же самое, что
								и <b>event.stopPropagation()</b>, но с более сильным эффектом.
							</li>
							<li>
								В отличие от <b>event.stopPropagation()</b>,{' '}
								<b>event.stopImmediatePropagation()</b> также предотвращает
								вызов остальных обработчиков, установленных на текущем элементе
								для этого события после текущего обработчика.
							</li>
							<li>
								Это означает, что никакие другие обработчики события на текущем
								элементе не будут выполнены после вызова{' '}
								<b>event.stopImmediatePropagation()</b> в текущем обработчике.
							</li>
						</ul>
					</li>
				</ol>
			</p>
			<p>Пример:</p>
			<Examples>
				let parent = document.getElementById('parent');
				<br />
				let child = document.getElementById('child');
				<br />
				<br />
				parent.addEventListener('click', function(event) &#123;
				<br />
				&emsp;&emsp;console.log('Обработчик родительского элемента');
				<br />
				&#125;);
				<br />
				<br />
				child.addEventListener('click', function(event) &#123;
				<br />
				&emsp;&emsp;event.stopPropagation(); // Остановит всплытие, обработчик
				родительского элемента не будет вызван
				<br />
				&emsp;&emsp;console.log('Обработчик дочернего элемента');
				<br />
				&#125;);
				<br />
				<br />
				// Если вместо event.stopPropagation() использовать
				event.stopImmediatePropagation():
				<br />
				// child.addEventListener('click', function(event) &#123;
				<br />
				// event.stopImmediatePropagation(); // Остановит всплытие и другие
				обработчики на child не будут вызваны
				<br />
				// console.log('Обработчик дочернего элемента');
				<br />
				// &#125;);
				<br />
				<br />
				// Пример event.stopImmediatePropagation():
				<br />
				// child.addEventListener('click', function(event) &#123;
				<br />
				// event.stopImmediatePropagation(); // Остановит всплытие и другие
				обработчики на child не будут вызваны
				<br />
				// console.log('Обработчик дочернего элемента');
				<br />
				// console.log('Этот обработчик вызван первым и больше не будет вызваны
				другие обработчики на child');
				<br />
				// &#125;);
			</Examples>
			<p>
				Используйте <b>event.stopPropagation()</b>, чтобы предотвратить
				дальнейшее всплытие или погружение события, и{' '}
				<b>event.stopImmediatePropagation()</b>, если вы хотите остановить
				дальнейшие обработчики этого события на текущем элементе.
			</p>
		</div>
	)
}

export default Question
