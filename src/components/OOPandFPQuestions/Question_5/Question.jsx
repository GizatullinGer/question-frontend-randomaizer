import React from 'react'

const Question = () => {
	return (
		<div>
			<p>
				Функциональное программирование (Functional Programming, FP) - это
				парадигма программирования, которая ориентирована на работу с функциями
				как первоклассными объектами и на создание программных систем,
				строящихся на основе чистых функций, избегающих изменяемого состояния и
				побочных эффектов. Основные концепции функционального программирования
				включают в себя:
			</p>
			<p>
				<ul>
					<li>
						<b>Функции как первоклассные объекты: </b>В FP функции
						рассматриваются как значения, которые можно передавать в качестве
						аргументов другим функциям, возвращать из функций и сохранять в
						переменных. Это позволяет использовать функции для абстрагирования
						поведения и создания более высокоуровневых абстракций.
					</li>
					<li>
						<b>Чистые функции (Pure Functions): </b>
						Чистые функции - это функции, которые всегда возвращают одинаковый
						результат для одних и тех же входных данных и не имеют побочных
						эффектов. Они не изменяют состояния или данные вне своей области
						видимости, что делает их более предсказуемыми и тестируемыми.
					</li>
					<li>
						<b>Неизменяемость (Immutability): </b>
						FP способствует созданию неизменяемых структур данных, что означает,
						что данные не могут быть изменены после создания. Вместо этого
						создаются новые версии данных при необходимости. Это помогает
						избегать состояний, где данные могут быть случайно изменены, что
						может привести к ошибкам.
					</li>
					<li>
						<b>Функции высшего порядка (Higher-Order Functions): </b>
						Функции, которые принимают другие функции в качестве аргументов или
						возвращают функции как результат, называются функциями высшего
						порядка. Они позволяют создавать более абстрактные и гибкие решения.
					</li>
					<li>
						<b>Рекурсия (Recursion): </b>
						ФП активно использует рекурсию вместо циклов для обработки данных и
						выполнения операций. Рекурсивные функции могут быть более чистыми и
						понятными, чем их императивные аналоги.
					</li>
					<li>
						<b>Функциональная композиция (Function Composition): </b>
						Функциональное программирование поощряет композицию (соединение)
						функций для создания новых функций. Это позволяет создавать более
						сложные операции, объединяя простые функции.
					</li>
					<li>
						<b>Ленивые вычисления (Lazy Evaluation): </b>
						Ленивые вычисления - это метод, при котором вычисления выполняются
						только при необходимости, а не заранее. Это может повысить
						производительность и уменьшить потребление ресурсов.
					</li>
				</ul>
			</p>
		</div>
	)
}

export default Question
