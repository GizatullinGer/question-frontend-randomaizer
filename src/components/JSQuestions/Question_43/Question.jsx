import React from 'react'
import { Examples } from '../../Examples/Examples'

const Question = () => {
	return (
		<div>
			<p>
				Метод Object.create() используется для создания нового объекта с
				указанным прототипом.
			</p>
			<p>Синтаксис метода Object.create() выглядит следующим образом:</p>
			<Examples>Object.create(proto [, propertiesObject])</Examples>
			<p>где:</p>
			<p>
				<ul>
					<li>
						<b>proto: </b>Объект, который будет использоваться в качестве
						прототипа для создаваемого объекта.
					</li>
					<li>
						<b>propertiesObject (необязательный): </b>Объект, содержащий
						определения свойств объекта. Этот аргумент может содержать
						определения для свойств объекта, включая их значения, конфигурацию и
						доступность.
					</li>
				</ul>
			</p>
			<p>Как работает Object.create():</p>
			<p>
				<ol>
					<li>
						Создается новый объект, который будет иметь прототип, указанный в
						первом аргументе метода.
					</li>
					<li>
						Если аргумент <b>propertiesObject</b> указан, его свойства будут
						добавлены к новому объекту, включая значения, конфигурацию и
						доступность свойств.
					</li>
				</ol>
			</p>
			<p>
				Пример использования <b>Object.create()</b>:
			</p>
			<Examples>
				const animal = &#123;
				<br />
				&emsp;&emsp;makeSound() &#123;
				<br />
				&emsp;&emsp;&emsp;&emsp;console.log(this.sound);
				<br />
				&emsp;&emsp;&#125;
				<br />
				&#125;;
				<br />
				<br />
				const dog = Object.create(animal);
				<br />
				dog.sound = 'Barks';
				<br />
				dog.makeSound(); // Output: 'Barks'
				<br />
				<br />
				const cat = Object.create(animal);
				<br />
				cat.sound = 'Meows';
				<br />
				cat.makeSound(); // Output: 'Meows'
			</Examples>
			<p>
				В этом примере dog и cat создаются с использованием
				Object.create(animal), что делает animal прототипом для обоих объектов.
				Таким образом, оба объекта наследуют метод makeSound() от animal.
			</p>
			<p>
				Метод Object.create() полезен для создания объектов с определенным
				прототипом, что позволяет делегировать свойства и методы от одного
				объекта к другому в JavaScript.
			</p>
		</div>
	)
}

export default Question
