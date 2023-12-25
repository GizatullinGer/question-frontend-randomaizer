import React from 'react'

const Question = () => {
	return (
		<div>
			<p>
				Модель OSI (Open Systems Interconnection) - это концептуальная рамка,
				используемая для описания и понимания различных аспектов сетевой связи и
				коммуникации между компьютерами. Эта модель состоит из семи слоев,
				каждый из которых выполняет определенные функции в процессе передачи
				данных от отправителя к получателю. OSI модель разрабатывалась
				Международной организацией по стандартизации (ISO) для обеспечения
				стандартной структуры и взаимодействия в сетевых системах.
			</p>
			<p>Вот семь слоев OSI модели, начиная с нижнего:</p>
			<p>
				<ol>
					<li>
						<b>Физический слой (Physical Layer): </b>Этот слой обрабатывает
						физические аспекты передачи данных по среде передачи, такие как
						напряжение, сигналы, физические интерфейсы и кабели.
					</li>
					<li>
						<b>Канальный слой (Data Link Layer): </b>Здесь данные разбиваются на
						кадры, обеспечивается управление доступом к среде передачи (контроль
						доступа к среде) и коррекция ошибок.
					</li>
					<li>
						<b>Сетевой слой (Network Layer): </b>Этот слой отвечает за
						маршрутизацию данных, перенаправление и управление трафиком в сети.
						Здесь также определяются IP-адреса.
					</li>
					<li>
						<b>Транспортный слой (Transport Layer): </b>Задача этого слоя -
						обеспечить надежную передачу данных между устройствами, включая
						управление потоками данных, сегментацию и де-сегментацию.
					</li>
					<li>
						<b>Сеансовый слой (Session Layer): </b>Этот слой управляет сеансами
						связи, устанавливает, поддерживает и завершает соединения между
						устройствами.
					</li>
					<li>
						<b>Представительский слой (Presentation Layer): </b>Представляет и
						кодирует данные в стандартные форматы, обеспечивая интерпретацию,
						сжатие и шифрование данных при необходимости.
					</li>
					<li>
						<b>Прикладной слой (Application Layer): </b>Это верхний слой,
						который обеспечивает взаимодействие с приложениями, такими как
						электронная почта, веб-браузеры и другие сетевые сервисы.
					</li>
				</ol>
			</p>
			<p>
				Модель OSI помогает разработчикам и инженерам сетей понимать, как
				различные аспекты сетевой коммуникации взаимодействуют между собой и
				какие функции выполняются на каждом уровне. Это стандартное
				представление позволяет сетевым устройствам разных производителей
				взаимодействовать и обеспечивает более легкое внесение изменений или
				улучшений в сетевые системы.
			</p>
		</div>
	)
}

export default Question