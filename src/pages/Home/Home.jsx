import React from 'react'

import { WebTech } from '../../data/WebTech'
import { HTMLQuestions } from '../../data/HTMLQuestions'
import { CSSQuestions } from '../../data/CSSQuestions'
import { JSQuestions } from '../../data/JSQuestions'
import { BrowserJSQuestions } from '../../data/BrowserJS'
import { WebApiQuestions } from '../../data/WebApiQuestions'
import { OOPandFPQuestions } from '../../data/OOPandFPQuestions'
import { BlockQuestion } from '../../components/BlockQuestion/BlockQuestion'
import { AsyncJSQuestions } from '../../data/AsyncJSQuestions'
import { EcmaScriptQuestions } from '../../data/EcmaScriptQuestions'
import { AccessibilityQuestions } from '../../data/AccessibilityQuestions'
import { ReactQuestions } from '../../data/ReactQuestions'
import { TypescriptQuestions } from '../../data/TypescriptQuestions'

const questionBlocksData = [
	{
		id: 1,
		title: 'Общие вопросы по Web технологиям',
		data: WebTech,
	},
	{
		id: 2,
		title: 'Вопросы по Web Api',
		data: WebApiQuestions,
	},
	{
		id: 3,
		title: 'Вопросы по OOP и FP',
		data: OOPandFPQuestions,
	},
	{
		id: 4,
		title: 'Вопросы по HTML5',
		data: HTMLQuestions,
	},
	{
		id: 5,
		title: 'Вопросы по CSS',
		data: CSSQuestions,
	},
	{
		id: 6,
		title: 'Вопросы по JS',
		data: JSQuestions,
	},
	{
		id: 7,
		title: 'JS в браузере',
		data: BrowserJSQuestions,
	},
	{
		id: 8,
		title: 'Вопросы из асинхронного JavaScript',
		data: AsyncJSQuestions,
	},
	{
		id: 9,
		title: 'Вопросы из стандарта ECMAScript',
		data: EcmaScriptQuestions,
	},
	{
		id: 10,
		title: 'Вопросы по доступности (Accessibility)',
		data: AccessibilityQuestions,
	},
	{
		id: 11,
		title: 'Вопросы по React',
		data: ReactQuestions,
	},
	{
		id: 12,
		title: 'Вопросы по Typescript',
		data: TypescriptQuestions,
	},
]

export const Home = () => {
	return (
		<div className='container'>
			<h1>Справочник вопросов по Frontend</h1>

			{questionBlocksData.map(block => (
				<BlockQuestion key={block.id} title={block.title} data={block.data} />
			))}
		</div>
	)
}
