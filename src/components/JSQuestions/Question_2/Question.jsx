import React from 'react'

const Question = () => {
	return (
		<div>
			<p>
				В JavaScript операторы == (нестрогое равенство) и === (строгое
				равенство) используются для сравнения значений. Однако между ними есть
				существенные различия:
			</p>
			<ol>
				<li>
					<p>`==` (нестрогое равенство):</p>
					<ul>
						<li>Сравнивает значения с автоматическим приведением типов.</li>
						<li>
							Если типы операндов отличаются, JavaScript попытается привести их
							к одному типу и затем выполнить сравнение.
						</li>
						<li>
							Например: `5 == "5"` будет истиной, так как строка "5" будет
							преобразована в число перед сравнением.
						</li>
					</ul>
				</li>
				<li>
					<p>`===` (строгое равенство):</p>
					<ul>
						<li>Сравнивает значения без приведения типов.</li>
						<li>
							Возвращает true только в случае, если значения и их типы
							идентичны.
						</li>
						<li>
							Например: 5 === "5" будет ложью, так как типы операндов (число и
							строка) отличаются.
						</li>
					</ul>
				</li>
			</ol>
			<p>
				Важно отметить, что использование строгого равенства === рекомендуется в
				большинстве случаев, так как оно обеспечивает более явное и
				предсказуемое поведение сравнения.
			</p>
		</div>
	)
}

export default Question
