import QUESTION_1 from '../components/WebApiQuestions/Question_1/Question'
import QUESTION_2 from '../components/WebApiQuestions/Question_2/Question'
import QUESTION_3 from '../components/WebApiQuestions/Question_3/Question'
import QUESTION_4 from '../components/WebApiQuestions/Question_4/Question'
import QUESTION_5 from '../components/WebApiQuestions/Question_5/Question'
import QUESTION_6 from '../components/WebApiQuestions/Question_6/Question'
import QUESTION_7 from '../components/WebApiQuestions/Question_7/Question'
import QUESTION_8 from '../components/WebApiQuestions/Question_8/Question'
import QUESTION_9 from '../components/WebApiQuestions/Question_9/Question'
import QUESTION_10 from '../components/WebApiQuestions/Question_10/Question'

export const WebApiQuestions = [
	{
		id: 1,
		question: 'Что такое HTTP?',
		answer: <QUESTION_1 />,
	},
	{
		id: 2,
		question: 'Из чего состоит HTTP-запрос?',
		answer: <QUESTION_2 />,
	},
	{
		id: 3,
		question: 'Какие методы может иметь HTTP-запрос?',
		answer: <QUESTION_3 />,
	},
	{
		id: 4,
		question: 'Что такое HTTP cookie? Для чего они используются?',
		answer: <QUESTION_4 />,
	},
	{
		id: 5,
		question: 'Разница между HTTP и HTTPS?',
		answer: <QUESTION_5 />,
	},
	{
		id: 6,
		question: 'Разница между HTTP/1 и HTTP/2?',
		answer: <QUESTION_6 />,
	},
	{
		id: 7,
		question: 'Как работает мультиплексирование в HTTP/2?',
		answer: <QUESTION_7 />,
	},
	{
		id: 8,
		question: 'Что такое “трехстороннее рукопожатие” (Triple handshake)?',
		answer: <QUESTION_8 />,
	},
	{
		id: 9,
		question: 'Разница между PUT- и POST-запросами?',
		answer: <QUESTION_9 />,
	},
	{
		id: 10,
		question: 'Разница между протоколами TCP и UDP?',
		answer: <QUESTION_10 />,
	},
]
