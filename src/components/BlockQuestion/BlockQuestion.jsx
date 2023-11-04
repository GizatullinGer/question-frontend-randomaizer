import React from 'react'
import { Accordion } from '../Accordion/Accordion'

export const BlockQuestion = ({ title, data }) => {
	return (
		<section className='htmlquest'>
			<h2 className='unitTitle'>{title}</h2>
			<div className='questions'>
				<Accordion>
					{data.map((item, index) => (
						<div key={item.id} className='questionBlock'>
							<p className='questionNumber'>Вопрос №{index + 1}</p>
							<h2 className='questionTitle'>{item.question}</h2>
							<Accordion>
								<div className='htmlquest__answer questionAnswer'>
									{item.answer}
								</div>
							</Accordion>
						</div>
					))}
				</Accordion>
			</div>
		</section>
	)
}
