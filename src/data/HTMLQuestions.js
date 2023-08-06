import QUESTION_1 from '../components/HTMLQuestions/Question_1/Question'
import QUESTION_2 from '../components/HTMLQuestions/Question_2/Question'
import QUESTION_3 from '../components/HTMLQuestions/Question_3/Question'
import QUESTION_4 from '../components/HTMLQuestions/Question_4/Question'
import QUESTION_5 from '../components/HTMLQuestions/Question_5/Question'
import QUESTION_6 from '../components/HTMLQuestions/Question_6/Question'
import QUESTION_7 from '../components/HTMLQuestions/Question_7/Question'
import QUESTION_8 from '../components/HTMLQuestions/Question_8/Question'
import QUESTION_9 from '../components/HTMLQuestions/Question_9/Question'
import QUESTION_10 from '../components/HTMLQuestions/Question_10/Question'

export const HTMLQuestions = [
	{
		id: 1,
		question: 'Что такое HTML и для чего он используется?',
		answer: <QUESTION_1 />,
	},
	{
		id: 2,
		question: 'Какие глобальные атрибуты есть в HTML?',
		answer: <QUESTION_2 />,
	},
	{
		id: 3,
		question: 'Что такое категории контента в HTML5?',
		answer: <QUESTION_3 />,
	},
	{
		id: 4,
		question: 'Какие категории считаются основными категориями контента?',
		answer: <QUESTION_4 />,
	},
	{
		id: 5,
		question: 'Что такое doctype? И для чего он используется?',
		answer: <QUESTION_5 />,
	},
	{
		id: 6,
		question: 'Опишите базовую структуру HTML-страницы?',
		answer: <QUESTION_6 />,
	},
	{
		id: 7,
		question:
			'Что такое валидация? И какие этапы или типы проверок HTML документа вы знаете?',
		answer: <QUESTION_7 />,
	},
	{
		id: 8,
		question:
			'Если представить HTML5 как открытую веб-платформу, из каких блоков он состоит?',
		answer: <QUESTION_8 />,
	},
	{
		id: 9,
		question: 'Какой тэг использовать для того, что бы сверстать кнопку?',
		answer: <QUESTION_9 />,
	},
	{
		id: 10,
		question: 'Что такое инлайновый стиль? Можно ли его переопределить?',
		answer: <QUESTION_10 />,
	},
]
