import React from 'react'
import { Examples } from '../../Examples/Examples'

const Question = () => {
	return (
		<div>
			<p>
				Внешние объявления (ambient declarations) в TypeScript используются для
				описания типов и структур, которые уже существуют вне текущего файла
				TypeScript. Они позволяют работать с кодом, который не был исходно
				написан на TypeScript, но который нужно типизировать для взаимодействия
				с TypeScript-кодом.
			</p>
			<p>
				Это особенно полезно при работе с библиотеками JavaScript или другими
				сторонними библиотеками, когда нужно добавить типы данных, но нет
				доступа к исходному коду этих библиотек.
			</p>
			<h3>Ambient Declarations могут быть определены с помощью:</h3>
			<p>
				<ol>
					<li>
						<b>declare: </b>Ключевое слово declare используется для создания
						внешних объявлений. Оно говорит компилятору TypeScript о том, что
						определение уже существует в другом месте и нужно только создать
						типы без реальной реализации. <br />
						Пример:
						<Examples>
							declare var $: any; // Здесь мы говорим TypeScript, что переменная
							$ уже существует (например, в jQuery) и имеет тип any.
						</Examples>
					</li>
					<li>
						<b>.d.ts файлы: </b>Файлы с расширением <b>.d.ts</b> используются
						для хранения внешних объявлений. Они предоставляют описание типов и
						структур, но не содержат реальную реализацию кода. Эти файлы
						используются для определения типов данных, интерфейсов, функций и
						других структур, которые могут использоваться в других
						TypeScript-файлах. <br />
						Например, файл myLibrary.d.ts может содержать объявления для
						библиотеки myLibrary, позволяя TypeScript работать с этой
						библиотекой, не имея доступа к ее исходному коду.
					</li>
				</ol>
			</p>
			<p>
				Внешние объявления позволяют использовать типы данных и интерфейсы из
				других языков или библиотек внутри кода TypeScript, обеспечивая
				типизацию и удобство работы с этим кодом, даже если исходный код этих
				структур не был написан на TypeScript.
			</p>
		</div>
	)
}

export default Question