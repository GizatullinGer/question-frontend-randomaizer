/* eslint-disable react/jsx-no-comment-textnodes */
import React from 'react'
import { Examples } from '../../Examples/Examples'

const Question = () => {
	return (
		<div>
			<p>
				Dependency Injection (DI) - это паттерн программирования, используемый
				для передачи зависимостей объектов внутрь других объектов, что позволяет
				уменьшить связанность между компонентами приложения и повысить их
				гибкость, тестируемость и обслуживаемость.
			</p>
			<h3>Основные концепции Dependency Injection:</h3>
			<p>
				<ol>
					<li>
						<b>Зависимости:</b>
						<br />
						<b>Объекты, используемые внутри других объектов: </b>Например,
						объект A зависит от объекта B, если объект A использует
						функциональность объекта B.
					</li>
					<li>
						<b>Инъекция зависимостей:</b>
						<br />
						<b>Передача зависимостей в объекты: </b>Вместо того чтобы создавать
						зависимости внутри объекта, они передаются извне. Это делает объекты
						более гибкими, поскольку их поведение можно настраивать вне объекта.
					</li>
					<li>
						<b>Управление жизненным циклом объектов:</b>
						<br />
						<b>Контейнеры зависимостей: </b>В DI часто используются контейнеры,
						которые управляют созданием и жизненным циклом объектов и их
						зависимостей.
					</li>
				</ol>
			</p>
			<h3>Пример:</h3>
			<Examples>
				// Пример без использования Dependency Injection <br />
				class Logger &#123;
				<br />
				&emsp;&emsp;log(message) &#123;
				<br />
				&emsp;&emsp;&emsp;&emsp;console.log(message);
				<br />
				&emsp;&emsp;&#125;
				<br />
				&#125;
				<br />
				<br />
				class UserService &#123;
				<br />
				&emsp;&emsp;constructor() &#123;
				<br />
				&emsp;&emsp;&emsp;&emsp;this.logger = new Logger(); // Зависимость
				создается внутри объекта
				<br />
				&emsp;&emsp;&#125;
				<br />
				<br />
				&emsp;&emsp;createUser(username) &#123;
				<br />
				&emsp;&emsp;&emsp;&emsp;this.logger.log(`User '$&#123;username&#125;'
				created.`);
				<br />
				&emsp;&emsp;&emsp;&emsp;// ...код создания пользователя
				<br />
				&emsp;&emsp;&#125;
				<br />
				&#125;
			</Examples>
			<p>С DI:</p>
			<Examples>
				// Пример с использованием Dependency Injection
				<br />
				class Logger &#123;
				<br />
				&emsp;&emsp;log(message) &#123;
				<br />
				&emsp;&emsp;&emsp;&emsp;console.log(message);
				<br />
				&emsp;&emsp;&#125;
				<br />
				&#125;
				<br />
				<br />
				class UserService &#123;
				<br />
				&emsp;&emsp;constructor(logger) &#123;
				<br />
				&emsp;&emsp;&emsp;&emsp;this.logger = logger; // Зависимость передается
				извне
				<br />
				&emsp;&emsp;&#125;
				<br />
				<br />
				&emsp;&emsp;createUser(username) &#123;
				<br />
				&emsp;&emsp;&emsp;&emsp;this.logger.log(`User '$&#123;username&#125;'
				created.`);
				<br />
				&emsp;&emsp;&emsp;&emsp;// ...код создания пользователя
				<br />
				&emsp;&emsp;&#125;
				<br />
				&#125;
				<br />
				<br />
				// Где-то в приложении:
				<br />
				const logger = new Logger();
				<br />
				const userService = new UserService(logger); // Зависимость передается в
				конструктор
			</Examples>
			<h3>Преимущества Dependency Injection:</h3>
			<ul>
				<li>
					<b>Уменьшение связанности (Coupling): </b>Объекты становятся менее
					зависимыми друг от друга.
				</li>
				<li>
					<b>Гибкость: </b>Позволяет изменять поведение объектов, не изменяя их
					код напрямую.
				</li>
				<li>
					<b>Тестируемость: </b>Упрощает тестирование, поскольку позволяет
					использовать поддельные объекты для тестирования.
				</li>
			</ul>
			<h3>Реализация DI может осуществляться через:</h3>
			<ul>
				<li>
					<b>Конструкторы: </b>Передача зависимостей через аргументы
					конструктора.
				</li>
				<li>
					<b>Сеттеры и методы: </b>Установка зависимостей через отдельные методы
					объекта.
				</li>
				<li>
					<b>Фреймворки и контейнеры зависимостей: </b>Использование
					специализированных инструментов для управления зависимостями.
				</li>
			</ul>
		</div>
	)
}

export default Question
