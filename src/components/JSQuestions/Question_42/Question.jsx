/* eslint-disable react/jsx-no-comment-textnodes */
import React from 'react'
import { Examples } from '../../Examples/Examples'

const Question = () => {
	return (
		<div>
			<p>
				Прототип объекта в JavaScript - это механизм, который позволяет объектам
				наследовать свойства и методы от других объектов. Каждый объект в
				JavaScript имеет свойство <b>prototype</b>, которое указывает на
				прототип этого объекта.
			</p>
			<p>
				Прототипы используются для создания цепочек наследования в JavaScript и
				позволяют объектам делить общие свойства и методы между собой.
			</p>
			<p>
				Каждый объект в JavaScript связан с прототипом, который может быть
				объектом или значением <b>null</b>. Если у объекта есть свойство или
				метод, который не определен непосредственно в этом объекте, JavaScript
				будет искать его в цепочке прототипов, поднимаясь выше по цепи
				наследования, пока не найдет соответствующее свойство или метод или не
				достигнет <b>null</b>.
			</p>
			<p>Пример использования прототипа:</p>
			<Examples>
				// Создаем объект-прототип
				<br />
				const animal = &#123;
				<br />
				&emsp;&emsp;sound: 'Makes a sound',
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
				// Создаем объект, используя animal в качестве прототипа
				<br />
				const dog = Object.create(animal);
				<br />
				dog.sound = 'Barks';
				<br />
				dog.makeSound(); // Output: 'Barks'
				<br />
				<br />
				// Создаем объект, используя animal в качестве прототипа
				<br />
				const cat = Object.create(animal);
				<br />
				cat.sound = 'Meows';
				<br />
				cat.makeSound(); // Output: 'Meows'
			</Examples>
			<p>
				Здесь объекты <b>dog</b> и <b>cat</b> наследуют метод <b>makeSound()</b>{' '}
				и свойство <b>sound</b> от объекта-прототипа <b>animal</b>. Каждый из
				этих объектов имеет своё собственное значение для свойства <b>sound</b>,
				но метод <b>makeSound()</b> наследуется из объекта-прототипа{' '}
				<b>animal</b>.
			</p>
			<p>
				Прототипы широко используются в JavaScript для реализации наследования,
				создания и организации объектов, а также для обеспечения повторного
				использования кода.
			</p>
		</div>
	)
}

export default Question
