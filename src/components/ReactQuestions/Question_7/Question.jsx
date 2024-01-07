import React from 'react'
import { Examples } from '../../Examples/Examples'

const Question = () => {
	return (
		<div>
			<p>
				Управляемые (controlled) и неуправляемые (uncontrolled) компоненты - это
				два подхода к работе с формами и вводом данных в React.
			</p>
			<h3>Управляемые компоненты (Controlled Components):</h3>
			<p>
				Управляемые компоненты связываются со значением поля формы через
				свойство value и обрабатывают изменения через обратные вызовы. Значения
				полей формы контролируются React-компонентом. Когда пользователь вводит
				что-то в поле формы, React обновляет состояние компонента, а затем это
				новое состояние передается обратно в компонент в качестве value. Вся
				информация о значении элемента формы хранится в состоянии компонента.
			</p>
			<p>Пример управляемого компонента:</p>
			<Examples>
				import React, &#123; useState &#125; from 'react';
				<br />
				<br />
				const ControlledComponent = () ={'>'} &#123;
				<br />
				&emsp;&emsp;const [value, setValue] = useState('');
				<br />
				<br />
				&emsp;&emsp;const handleChange = (event) ={'>'} &#123;
				<br />
				&emsp;&emsp;&emsp;&emsp;setValue(event.target.value);
				<br />
				&emsp;&emsp;&#125;;
				<br />
				<br />
				&emsp;&emsp;return (<br />
				&emsp;&emsp;&emsp;&emsp;{'<'}input
				<br />
				&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;type="text"
				<br />
				&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;value=&#123;value&#125;
				<br />
				&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;onChange=&#123;handleChange&#125;
				<br />
				&emsp;&emsp;&emsp;&emsp;/{'>'}
				<br />
				&emsp;&emsp;);
				<br />
				&#125;;
			</Examples>
			<h3>Неуправляемые компоненты (Uncontrolled Components):</h3>
			<p>
				Неуправляемые компоненты не связаны со значением поля формы через value.
				Вместо этого, они позволяют DOM хранить значение поля формы и
				предоставляют доступ к этому значению через ссылку на элемент DOM. React
				не управляет значением поля формы; вместо этого, вы должны получать
				значение из элемента формы напрямую через JavaScript.
			</p>
			<p>Пример неуправляемого компонента:</p>
			<Examples>
				import React, &#123; useRef &#125; from 'react';
				<br />
				<br />
				const UncontrolledComponent = () ={'>'} &#123;
				<br />
				&emsp;&emsp;const inputRef = useRef(null);
				<br />
				<br />
				&emsp;&emsp;const handleClick = () ={'>'} &#123;
				<br />
				&emsp;&emsp;&emsp;&emsp;console.log(inputRef.current.value);
				<br />
				&emsp;&emsp;&#125;;
				<br />
				<br />
				&emsp;&emsp;return (<br />
				&emsp;&emsp;&emsp;&emsp;{'<'}div{'>'}
				<br />
				&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;{'<'}input type="text"
				ref=&#123;inputRef&#125; /{'>'}
				<br />
				&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;{'<'}button
				onClick=&#123;handleClick&#125;{'>'}Получить значение{'<'}/button{'>'}
				<br />
				&emsp;&emsp;&emsp;&emsp;{'<'}/div{'>'}
				<br />
				&emsp;&emsp;);
				<br />
				&#125;;
			</Examples>
			<h3>Основные различия:</h3>
			<p>
				<ol>
					<li>
						<b>Управляемые компоненты </b>подходят для ситуаций, когда все
						состояние поля формы должно быть в React-компоненте, и
						контролироваться React'ом. Этот подход обеспечивает более
						предсказуемое поведение форм и управление состоянием.
					</li>
					<li>
						<b>Неуправляемые компоненты </b>часто используются в сценариях, где
						вам нужно получить доступ к значениям элементов DOM напрямую или
						когда есть большое количество полей, и управление ими через
						состояние React становится неудобным.
					</li>
				</ol>
			</p>
			<p>
				Выбор между управляемыми и неуправляемыми компонентами зависит от
				конкретных потребностей вашего приложения и уровня контроля, который вам
				нужен над формами и данными ввода.
			</p>
		</div>
	)
}

export default Question
