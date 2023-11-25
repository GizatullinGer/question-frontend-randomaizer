/* eslint-disable react/jsx-no-comment-textnodes */
import React from 'react'
import { Examples } from '../../Examples/Examples'

const Question = () => {
	return (
		<div>
			<p>
				Отложенная загрузка изображений - это техника, позволяющая загружать
				изображения только в момент, когда они становятся видимыми для
				пользователя, что способствует улучшению производительности и экономии
				ресурсов. Для реализации отложенной загрузки изображений в
				веб-разработке можно использовать различные методы, включая
				использование lazy loading с помощью атрибута loading или
				JavaScript-кода.
			</p>
			<h3>1. Использование атрибута loading:</h3>
			<p>
				Атрибут <b>loading="lazy"</b> можно добавить к тегу{' '}
				<b>
					{'<'}img{'>'}
				</b>{' '}
				для реализации отложенной загрузки изображений. Этот атрибут позволяет
				браузеру загружать изображения, когда они становятся видимыми на экране,
				что особенно полезно для длинных страниц с большим количеством
				изображений.
			</p>
			<p>Пример:</p>
			<Examples>
				{'<'}img src="placeholder.jpg" data-src="real-image.jpg" loading="lazy"
				alt="Описание изображения"{'>'}
			</Examples>
			<p>
				В данном примере <b>placeholder.jpg</b> - это замещающее изображение,
				которое отображается до загрузки реального изображения{' '}
				<b>real-image.jpg</b>.
			</p>
			<h3>2. Использование JavaScript:</h3>
			<p>
				С помощью JavaScript также можно реализовать отложенную загрузку
				изображений. Например, загружать изображения при прокрутке страницы к
				определенной области или при наступлении определенного события.
			</p>
			<p>
				Пример с использованием JavaScript и Intersection Observer для загрузки
				изображений при прокрутке страницы:
			</p>
			<p>HTML</p>
			<Examples>
				{'<'}img src="placeholder.jpg" data-src="real-image.jpg"
				class="lazy-image" alt="Описание изображения"{'>'}
			</Examples>
			<p>javascript</p>
			<Examples>
				// Находим все изображения с классом "lazy-image"
				<br />
				const lazyImages = document.querySelectorAll('.lazy-image');
				<br />
				<br />
				// Создаем экземпляр Intersection Observer
				<br />
				const observer = new IntersectionObserver(entries ={'>'} &#123;
				<br />
				&emsp;&emsp;entries.forEach(entry ={'>'} &#123;
				<br />
				&emsp;&emsp;&emsp;&emsp;if (entry.isIntersecting) &#123;
				<br />
				&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;// Загружаем изображение, если оно
				видимо
				<br />
				&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;const img = entry.target;
				<br />
				&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;img.src = img.dataset.src;
				<br />
				&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;observer.unobserve(img); //
				Отключаем наблюдение после загрузки изображения
				<br />
				&emsp;&emsp;&emsp;&emsp;&#125;
				<br />
				&emsp;&emsp;&#125;);
				<br />
				&#125;);
				<br />
				<br />
				// Начинаем наблюдение за каждым изображением
				<br />
				lazyImages.forEach(image ={'>'} &#123;
				<br />
				&emsp;&emsp;observer.observe(image);
				<br />
				&#125;);
			</Examples>
			<p>
				Эти методы позволяют оптимизировать загрузку изображений, особенно на
				больших страницах с множеством контента, улучшая скорость загрузки и
				производительность веб-сайта.
			</p>
		</div>
	)
}

export default Question
