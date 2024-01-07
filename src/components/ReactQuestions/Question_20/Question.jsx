import React from 'react'

const Question = () => {
	return (
		<div>
			<p>asdas</p>
			<p>
				Теневой (Shadow) DOM и виртуальный (Virtual) DOM - это два концептуально
				разных подхода к работе с DOM в веб-разработке.
			</p>
			<h3>Теневой (Shadow) DOM:</h3>
			<p>
				<ol>
					<li>
						<b>Определение: </b>Теневой DOM - это часть веб-стандарта, который
						позволяет создавать изолированные DOM-деревья и компоненты с их
						собственной структурой, стилями и поведением. Он используется для
						создания компонентов, которые не будут повреждены или изменены
						стилями и скриптами извне.
					</li>
					<li>
						<b>Изоляция: </b>Теневой DOM обеспечивает изоляцию компонентов,
						позволяя им иметь своё собственное DOM-дерево, стили и события. Это
						предотвращает конфликты между различными компонентами и стилями.
					</li>
					<li>
						<b>Использование: </b>Теневой DOM применяется в веб-компонентах (Web
						Components), что позволяет создавать многоразовые и изолированные
						компоненты с использованием технологий, таких как {'<'}template{'>'}
						, {'<'}shadowRoot{'>'}, {'<'}slot{'>'} и другие.
					</li>
				</ol>
			</p>
			<h3>Виртуальный (Virtual) DOM:</h3>
			<p>
				<ol>
					<li>
						<b>Определение: </b>Виртуальный DOM - это концепция, используемая в
						библиотеках и фреймворках, таких как React и Vue.js, для улучшения
						производительности при работе с реальным DOM.
					</li>
					<li>
						<b>Отличие: </b>Виртуальный DOM представляет собой внутреннюю
						абстракцию реального DOM, которая создается в памяти. Он
						представляет собой древовидное представление всех элементов DOM
						вашего приложения и используется для эффективного сравнения и
						обновления фактического DOM только тех частей, которые действительно
						изменились.
					</li>
					<li>
						<b>Преимущества: </b>Использование виртуального DOM позволяет
						улучшить производительность, поскольку изменения в DOM
						обрабатываются в памяти в виде виртуального дерева, а затем
						применяются эффективным образом к реальному DOM, что уменьшает
						количество операций манипуляции непосредственно с реальным DOM.
					</li>
				</ol>
			</p>
			<p>
				Коротко говоря, теневой DOM является частью веб-стандарта, который
				предоставляет изолированные DOM-деревья для создания компонентов, в то
				время как виртуальный DOM используется библиотеками для оптимизации и
				эффективного управления реальным DOM для улучшения производительности в
				веб-приложениях.
			</p>
		</div>
	)
}

export default Question
