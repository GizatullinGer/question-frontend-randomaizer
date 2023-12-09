import React from 'react'
import { Examples } from '../../Examples/Examples'

const Question = () => {
	return (
		<div>
			<p>
				В JavaScript существует несколько методов для поиска элементов в DOM.
				Вот некоторые из наиболее часто используемых методов:
			</p>
			<p>
				<ol>
					<li>
						<b>getElementById: </b>Этот метод позволяет получить элемент по его
						уникальному идентификатору (ID). Пример использования:
						<Examples>
							let element = document.getElementById('идентификатор');
						</Examples>
					</li>
					<li>
						<b>getElementsByClassName: </b>Этот метод возвращает коллекцию
						элементов, имеющих определенный класс. Пример:
						<Examples>
							let elements = document.getElementsByClassName('название_класса');
						</Examples>
					</li>
					<li>
						<b>getElementsByTagName: </b>Возвращает коллекцию элементов с
						заданным тегом (например, все{' '}
						<b>
							{'<'}div{'>'}
						</b>{' '}
						или все{' '}
						<b>
							{'<'}p{'>'}
						</b>
						). Пример:
						<Examples>
							let elements = document.getElementsByTagName('тег');
						</Examples>
					</li>
					<li>
						<b>querySelector: </b>Позволяет найти первый элемент,
						соответствующий переданному CSS-селектору. Пример:
						<Examples>
							let element = document.querySelector('.класс или #идентификатор
							или тег');
						</Examples>
					</li>
					<li>
						<b>querySelectorAll: </b>Похож на <b>querySelector</b>, но
						возвращает все элементы, соответствующие заданному CSS-селектору в
						виде статической коллекции NodeList. Пример:
						<Examples>
							let elements = document.querySelectorAll('.класс или
							#идентификатор или тег');
						</Examples>
					</li>
					<li>
						<b>parentNode.querySelector: </b>Можно использовать вместе с{' '}
						<b>parentNode</b> для поиска элементов в пределах определенного
						родительского элемента. Пример:
						<Examples>
							let parentElement =
							document.getElementById('родительский_элемент'); <br />
							let element = parentElement.querySelector('.класс или
							#идентификатор или тег');
						</Examples>
					</li>
				</ol>
			</p>
			<p>
				Эти методы позволяют выбирать элементы по различным критериям, что
				делает их полезными для манипуляций с DOM-элементами в JavaScript.
			</p>
		</div>
	)
}

export default Question
