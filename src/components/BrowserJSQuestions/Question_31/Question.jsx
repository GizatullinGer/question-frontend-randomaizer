import React from 'react'
import { Examples } from '../../Examples/Examples'

const Question = () => {
	return (
		<div>
			<p>
				<b>URLSearchParams</b> - это встроенный объект JavaScript, который
				предоставляет удобные методы для работы с параметрами URL. Этот объект
				позволяет манипулировать строками запросов в URL, извлекать параметры и
				их значения, добавлять новые параметры или удалять существующие.
			</p>
			<p>
				Основные методы <b>URLSearchParams</b>:
			</p>
			<p>
				<ol>
					<li>
						<b>get(name): </b>Получает значение параметра по его имени.
						<Examples>
							let params = new URLSearchParams('key1=value1&key2=value2');
							<br />
							console.log(params.get('key1')); // Выводит 'value1'
						</Examples>
					</li>
					<li>
						<b>set(name, value): </b>Устанавливает или заменяет значение
						параметра по его имени.
						<Examples>
							params.set('key3', 'value3');
							<br />
							console.log(params.toString()); // Выводит
							'key1=value1&key2=value2&key3=value3'
						</Examples>
					</li>
					<li>
						<b>append(name, value): </b>Добавляет новое значение для указанного
						имени параметра, сохраняя уже существующие значения.
						<Examples>
							params.append('key2', 'newvalue2');
							<br />
							console.log(params.toString()); // Выводит
							'key1=value1&key2=value2&key2=newvalue2'
						</Examples>
					</li>
					<li>
						<b>delete(name): </b>Удаляет параметр по его имени.
						<Examples>
							params.delete('key1');
							<br />
							console.log(params.toString()); // Выводит
							'key2=value2&key2=newvalue2'
						</Examples>
					</li>
					<li>
						<b>toString(): </b>Возвращает строку с параметрами в формате URL.
						<Examples>
							console.log(params.toString()); // Выводит
							'key2=value2&key2=newvalue2'
						</Examples>
					</li>
				</ol>
			</p>
			<p>
				Пример использования <b>URLSearchParams</b> с объектом <b>URL</b> для
				работы с параметрами URL:
			</p>
			<Examples>
				let url = new URL('https://example.com/?key1=value1&key2=value2');
				<br />
				let params = new URLSearchParams(url.search);
				<br />
				<br />
				params.append('key3', 'value3');
				<br />
				params.set('key2', 'newvalue2');
				<br />
				<br />
				url.search = params.toString();
				<br />
				console.log(url.href); // Выводит
				'https://example.com/?key1=value1&key2=newvalue2&key3=value3'
			</Examples>
			<p>
				<b>URLSearchParams</b> часто используется для работы с URL в браузерном
				JavaScript, когда требуется управлять параметрами запросов или создавать
				URL-адреса с определенными параметрами.
			</p>
		</div>
	)
}

export default Question
