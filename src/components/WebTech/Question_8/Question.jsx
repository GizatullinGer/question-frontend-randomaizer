import React from 'react'

const Question_1 = () => {
	return (
		<div>
			<p>
				"Progressive Enhancement" (прогрессивное улучшение) и "Graceful
				Degradation" (грациозное ухудшение) - это два подхода в веб-разработке,
				которые связаны с обеспечением функциональности и доступности веб-сайтов
				и приложений на различных уровнях поддержки браузерами и устройствами.
			</p>
			<p>
				<b>Прогрессивное улучшение (Progressive Enhancement):</b> <br />
				Прогрессивное улучшение предполагает начало разработки с базового уровня
				функциональности, который будет работать во всех браузерах и на всех
				устройствах, включая те, которые могут иметь ограниченные возможности
				или поддержку современных технологий. После этого к базовому уровню
				добавляются дополнительные слои функциональности и стили, которые будут
				активированы только в более современных браузерах или устройствах,
				способных их поддерживать.
			</p>
			<p>
				Суть прогрессивного улучшения в том, что веб-сайт или приложение всегда
				остается функциональным для всех пользователей, независимо от их
				технических возможностей. Браузеры и устройства, которые не поддерживают
				более современные технологии, все равно смогут использовать базовый
				функционал.
			</p>
			<p>
				<b>Грациозное ухудшение (Graceful Degradation):</b> <br />
				Грациозное ухудшение представляет собой разработку наиболее сложных
				функциональных и стилевых элементов с самого начала, и затем плавное
				ухудшение этих функций для старых браузеров или устройств, которые не
				поддерживают современные технологии. То есть, начинают с полного набора
				функций и дополнительных возможностей, но потом делают так, чтобы
				базовая функциональность всегда оставалась доступной.
			</p>
			<p>
				Грациозное ухудшение сосредотачивается на обеспечении наилучшего опыта
				для современных браузеров и устройств, но также предусматривает, что
				пользователи с ограниченными возможностями или устаревшими браузерами
				всё равно могут получить базовый функционал.
			</p>
			<p>
				В обоих случаях цель - обеспечить более универсальную доступность и
				функциональность для различных пользователей, независимо от их устройств
				и возможностей. Однако подходы различаются в том, где начинается и на
				каком уровне осуществляется адаптация.
			</p>
		</div>
	)
}

export default Question_1
