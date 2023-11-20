import React from 'react'
import { Examples } from '../../Examples/Examples'

const Question = () => {
	return (
		<div>
			<p>
				Мемоизация - это оптимизационная техника, которая заключается в
				сохранении результатов выполнения функций для избежания повторных
				вычислений. При использовании мемоизации результаты предыдущих вызовов
				функции кэшируются, чтобы избежать повторных вычислений для одних и тех
				же входных данных.
			</p>
			<p>Пример простой реализации функции для мемоизации:</p>
			<Examples>
				function memoize(func) &#123;
				<br />
				&emsp;&emsp;const cache = &#123;&#125;;
				<br />
				<br />
				&emsp;&emsp;return function (...args) &#123;
				<br />
				&emsp;&emsp;&emsp;&emsp;const stringifiedArgs = JSON.stringify(args); //
				Создание уникального ключа на основе аргументов
				<br />
				<br />
				&emsp;&emsp;&emsp;&emsp;if (!(stringifiedArgs in cache)) &#123;
				<br />
				&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;// Если результат не кэширован,
				вычисляем и кэшируем его
				<br />
				&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;cache[stringifiedArgs] =
				func.apply(this, args);
				<br />
				&emsp;&emsp;&emsp;&emsp;&#125;
				<br />
				<br />
				&emsp;&emsp;return cache[stringifiedArgs];
				<br />
				&#125;;
				<br />
				&#125;
			</Examples>
			<p>
				Эта функция <b>memoize</b> принимает другую функцию <b>func</b> в
				качестве аргумента и возвращает новую функцию, которая выполняет
				мемоизацию. Кэш представляет собой объект, который используется для
				хранения результатов выполнения функции для каждого уникального набора
				аргументов в виде ключей объекта.
			</p>
			<p>
				Давайте применим эту функцию <b>memoize</b> к примеру вычисления
				факториала:
				<Examples>
					function calculateFactorial(n) &#123;
					<br />
					&emsp;&emsp;if (n === 0 || n === 1) &#123;
					<br />
					&emsp;&emsp;&emsp;&emsp;return 1;
					<br />
					&emsp;&emsp;&#125;
					<br />
					&emsp;&emsp;return n * calculateFactorial(n - 1);
					<br />
					&#125;
					<br />
					<br />
					const memoizedFactorial = memoize(calculateFactorial);
					<br />
					<br />
					console.log(memoizedFactorial(5)); // Вычисляется факториал 5<br />
					console.log(memoizedFactorial(5)); // Получаем результат из кэша,
					избегаем повторных вычислений
				</Examples>
			</p>
			<p>
				Это базовый пример мемоизации. Реальные реализации мемоизации могут быть
				более сложными и учитывать различные аспекты, такие как сброс кэша,
				установка ограничений на размер кэша и т.д.
			</p>
		</div>
	)
}

export default Question
