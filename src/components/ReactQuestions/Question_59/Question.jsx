import React from 'react'
import { Examples } from '../../Examples/Examples'

const Question = () => {
	return (
		<div>
			<p>
				В React функция <b>render</b> компонента может возвращать различные типы
				данных. Основными типами данных, которые могут быть возвращены из
				функции <b>render</b>, являются:
			</p>
			<ol>
				<li>
					<b>React-элементы:</b>
					<p>
						Обычно функция <b>render</b> возвращает React-элементы.
						React-элементы - это объекты, представляющие виртуальное
						представление DOM-узла или компонента. React использует эти элементы
						для построения фактического DOM.
					</p>
					<Examples>
						import React from 'react';
						<br />
						<br />
						const MyComponent = () ={'>'} &#123;
						<br />
						&emsp;&emsp;return {'<'}div{'>'}Hello, world!{'<'}/div{'>'};<br />
						&#125;;
						<br />
						<br />
						export default MyComponent;
					</Examples>
				</li>
				<li>
					<b>Фрагменты (Fragments):</b>
					<p>
						Вместо одиночного корневого элемента функция <b>render</b> может
						вернуть массив или фрагмент. Фрагменты позволяют возвращать
						несколько элементов без оборачивания их в дополнительный DOM-узел.
					</p>
					<Examples>
						import React from 'react';
						<br />
						<br />
						const MyComponent = () ={'>'} &#123;
						<br />
						&emsp;&emsp;return (<br />
						&emsp;&emsp;&emsp;&emsp;{'<'}
						{'>'}
						<br />
						&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;{'<'}div{'>'}First element{'<'}
						/div{'>'}
						<br />
						&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;{'<'}div{'>'}Second element{'<'}
						/div{'>'}
						<br />
						&emsp;&emsp;&emsp;&emsp;{'<'}/{'>'}
						<br />
						&emsp;&emsp;);
						<br />
						&#125;;
						<br />
						<br />
						export default MyComponent;
					</Examples>
				</li>
				<li>
					<b>Строки или числа:</b>
					<p>
						Вместо React-элемента функция <b>render</b> также может возвращать
						строки или числа, которые будут интерпретированы как текстовые узлы.
					</p>
					<Examples>
						import React from 'react';
						<br />
						<br />
						const MyComponent = () ={'>'} &#123;
						<br />
						&emsp;&emsp;return "Hello, world!";
						<br />
						&#125;;
						<br />
						<br />
						export default MyComponent;
					</Examples>
				</li>
				<li>
					<b>null или undefined:</b>
					<p>
						Если функция <b>render</b> возвращает <b>null</b> или{' '}
						<b>undefined</b>, компонент не будет рендерить ничего. Это может
						быть полезно, например, для условного рендеринга.
					</p>
					<Examples>
						import React from 'react';
						<br />
						<br />
						const MyComponent = (&#123; someCondition &#125;) ={'>'} &#123;
						<br />
						&emsp;&emsp;return someCondition ? {'<'}div{'>'}Render me if
						condition is true{'<'}/div{'>'} : null;
						<br />
						&#125;;
						<br />
						<br />
						export default MyComponent;
					</Examples>
				</li>
				<li>
					<b>Portals:</b>
					<p>
						Функция <b>render</b> также может возвращать порталы, что позволяет
						размещать дочерние элементы в DOM за пределами их обычного
						родительского контейнера.
					</p>
					<Examples>
						import React from 'react';
						<br />
						import ReactDOM from 'react-dom';
						<br />
						<br />
						const MyComponent = () ={'>'} &#123;
						<br />
						&emsp;&emsp;return ReactDOM.createPortal(
						<br />
						&emsp;&emsp;&emsp;&emsp;{'<'}div{'>'}Portal content{'<'}/div{'>'},
						<br />
						&emsp;&emsp;&emsp;&emsp;document.getElementById('portal-root')
						<br />
						&emsp;&emsp;);
						<br />
						&#125;;
						<br />
						<br />
						export default MyComponent;
					</Examples>
				</li>
			</ol>
			<p>
				В целом, <b>render</b> возвращает то, что React может преобразить в
				виртуальное представление DOM для отображения на экране.
			</p>
		</div>
	)
}

export default Question
