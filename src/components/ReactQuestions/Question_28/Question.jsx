import React from 'react'
import { Examples } from '../../Examples/Examples'

const Question = () => {
	return (
		<div>
			<ul>
				<li>
					<p>
						Фаза инициализации, на которой компонент начинает свой путь.
						Устанавливается состояние и пропсы.
					</p>
				</li>
				<li>
					<p>
						Фаза вмонтирования, когда инициализация компонента завершена,
						компонент смонтирован в DOM и впервые отображается на веб-странице.
						Доступные в ней методы:
					</p>
					<p>В классовом компоненте:</p>
					<ul>
						<li>- ComponentWillMount - устарел</li>
						<li>
							- ComponentDidMount - вызывается после вмонтирования компонента в
							дом. Вызывается 1 раз в ЖЦ
						</li>
					</ul>
					<p>
						В функциональном компоненте:{' '}
						<Examples>useEffect(() =&gt; &#123;&#125;, [])</Examples>с массивом
						зависимотей. Вызовется только при первом рендере (массив
						зависимостей пустой, менятся там нечему)
					</p>
				</li>
				<li>
					<p>
						Фаза Обновления, на которой меняется состояние компонента и
						происходит повторный рендеринг. На этом этапе данные компонента -
						стейт и пропс обновятся в ответ на пользовательские события (клик,
						ввод текста..) Доступные в ней методы в классовом компоненте:
					</p>
					<ul>
						<li>
							- ShouldComponentUpdate - Должен ли компонент обновляться или нет
						</li>
						<li>
							- ComponentDidUdpate - вызывается сразу после повторного
							рендеринга.
						</li>
					</ul>
					<p>
						В функциональном компоненте:{' '}
						<Examples>useEffect(() =&gt; &#123;&#125;, [value])</Examples>с
						массивом зависимотей. Вызовется только если меняется состояния
						значений в массиве. А так же сработает после первого рендера.
					</p>
				</li>
				<li>
					<p>
						Фаза размонтирования. Доступный в ней метод в классовом компоненте:
					</p>
					<ul>
						<li>
							- ComponentWillUnmout - вызывается перед размонитированием
							объекта, т.е. перед его удалением. Означает конец жизненного цикла
							компонента
						</li>
					</ul>
					<p>
						В функциональном компоненте:
						<Examples>
							useEffect(() =&gt; &#123;
							<br />
							&emsp;window.addEventListener('click', function)
							<br /> &emsp;return () =&gt; &#123;
							<br />
							&emsp;&emsp;window.removeEventListener('click', function) <br />{' '}
							&emsp;&#125;; <br />
							&#9;&#125;, []);
						</Examples>
						если есть return, аналог ComponentWillUnmout
					</p>
				</li>
			</ul>
		</div>
	)
}

export default Question
