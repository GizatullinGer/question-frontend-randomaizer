import React from 'react'
import { Examples } from '../../Examples/Examples'

const Question = () => {
	return (
		<div>
			<p>
				Статический метод в классе JavaScript - это метод, который привязан к
				самому классу, а не к его экземплярам. Он доступен непосредственно через
				класс, а не через экземпляр этого класса. Статические методы обычно
				используются для выполнения операций, не зависящих от конкретного
				экземпляра класса, но связанных с самим классом или с общими операциями,
				связанными с классом.
			</p>
			<h3>Определение статического метода:</h3>
			<p>
				Статический метод объявляется с помощью ключевого слова static перед его
				именем внутри класса:
			</p>
			<Examples>
				class MyClass &#123;
				<br />
				&emsp;&emsp;static myStaticMethod() &#123;
				<br />
				&emsp;&emsp;&emsp;&emsp;return 'Это статический метод';
				<br />
				&emsp;&emsp;&#125;
				<br />
				&#125;
			</Examples>
			<h3>Вызов статического метода:</h3>
			<p>
				Статический метод вызывается непосредственно через сам класс, а не через
				экземпляр класса. Для вызова статического метода используется имя
				класса, за которым следует точка и имя метода:
			</p>
			<Examples>
				const result = MyClass.myStaticMethod();
				<br />
				console.log(result); // Выведет: "Это статический метод"
			</Examples>
			<h3>Особенности статических методов:</h3>
			<p>
				<ol>
					<li>
						<b>Недоступность через экземпляры: </b>Статические методы не могут
						быть вызваны через экземпляры класса, только через сам класс.
					</li>
					<li>
						<b>Общие операции: </b>Они обычно используются для выполнения
						операций, не зависящих от конкретного экземпляра класса, но
						связанных с самим классом.
					</li>
					<li>
						<b>Область видимости: </b>Внутри статического метода ключевое слово
						this ссылается на сам класс, а не на экземпляр класса.
					</li>
				</ol>
			</p>
			<p>
				Статические методы предоставляют удобный способ создания
				функциональности, которая связана с самим классом, а не с его
				экземплярами, что делает их полезными для определения вспомогательных
				или утилитарных методов для работы с классом.
			</p>
		</div>
	)
}

export default Question