import React from 'react'

import { allQuestions } from '../../data/database'
import { WebTech } from '../../data/WebTech'
import { HTMLQuestions } from '../../data/HTMLQuestions'
import { CSSQuestions } from '../../data/CSSQuestions'
import { JSQuestions } from '../../data/JSQuestions'
import { WebApiQuestions } from '../../data/WebApiQuestions'
import { OOPandFPQuestions } from '../../data/OOPandFPQuestions'

export const Home = () => {
	return (
		<div className='container'>
			<h1>Справочник вопросов по Frontend</h1>

			<section className='htmlquest'>
				<h2 className='unitTitle'>Общие вопросы по Web технологиям</h2>
				<div className='questions'>
					{WebTech.map((item, index) => (
						<div key={item.id} className='questionBlock'>
							<p className='questionNumber'>Вопрос №{index + 1}</p>
							<h2 className='questionTitle'>{item.question}</h2>
							<div className='htmlquest__answer questionAnswer'>
								{item.answer}
							</div>
						</div>
					))}
				</div>
			</section>

			<section className='htmlquest'>
				<h2 className='unitTitle'>Вопросы по Web Api</h2>
				<div className='questions'>
					{WebApiQuestions.map((item, index) => (
						<div key={item.id} className='questionBlock'>
							<p className='questionNumber'>Вопрос №{index + 1}</p>
							<h2 className='questionTitle'>{item.question}</h2>
							<div className='htmlquest__answer questionAnswer'>
								{item.answer}
							</div>
						</div>
					))}
				</div>
			</section>

			<section className='htmlquest'>
				<h2 className='unitTitle'>Вопросы по OOP и FP</h2>
				<div className='questions'>
					{OOPandFPQuestions.map((item, index) => (
						<div key={item.id} className='questionBlock'>
							<p className='questionNumber'>Вопрос №{index + 1}</p>
							<h2 className='questionTitle'>{item.question}</h2>
							<div className='htmlquest__answer questionAnswer'>
								{item.answer}
							</div>
						</div>
					))}
				</div>
			</section>

			<section className='htmlquest'>
				<h2 className='unitTitle'>Вопросы по HTML5</h2>
				<div className='questions'>
					{HTMLQuestions.map((item, index) => (
						<div key={item.id} className='questionBlock'>
							<p className='questionNumber'>Вопрос №{index + 1}</p>
							<h2 className='questionTitle'>{item.question}</h2>
							<div className='htmlquest__answer questionAnswer'>
								{item.answer}
							</div>
						</div>
					))}
				</div>
			</section>

			<section className='htmlquest'>
				<h2 className='unitTitle'>Вопросы по CSS</h2>
				<div className='questions'>
					{CSSQuestions.map((item, index) => (
						<div key={item.id} className='questionBlock'>
							<p className='questionNumber'>Вопрос №{index + 1}</p>
							<h2 className='questionTitle'>{item.question}</h2>
							<div className='htmlquest__answer questionAnswer'>
								{item.answer}
							</div>
						</div>
					))}
				</div>
			</section>

			<section className='htmlquest'>
				<h2 className='unitTitle'>Вопросы по JS</h2>
				<div className='questions'>
					{JSQuestions.map((item, index) => (
						<div key={item.id} className='questionBlock'>
							<p className='questionNumber'>Вопрос №{index + 1}</p>
							<h2 className='questionTitle'>{item.question}</h2>
							<div className='htmlquest__answer questionAnswer'>
								{item.answer}
							</div>
						</div>
					))}
				</div>
			</section>

			<section className='reactquest'>
				<h2 className='unitTitle'>Вопросы по React</h2>
				<div className='questions'>
					{allQuestions.reactq.map(item => (
						<div key={item.id} className='questionBlock'>
							<p className='questionNumber'>Вопрос №{item.id}</p>
							<h2 className='questionTitle'>{item.question}</h2>
							<div className='questionAnswer'>{item.answer}</div>
							<div className='questionAnswer'> {item.test}</div>
						</div>
					))}
				</div>
			</section>
		</div>
	)
}
