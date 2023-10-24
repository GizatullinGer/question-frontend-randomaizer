import QUESTION_1 from '../components/AccessibilityQuestions/Question_1/Question'
import QUESTION_2 from '../components/AccessibilityQuestions/Question_2/Question'
import QUESTION_3 from '../components/AccessibilityQuestions/Question_3/Question'
import QUESTION_4 from '../components/AccessibilityQuestions/Question_4/Question'
import QUESTION_5 from '../components/AccessibilityQuestions/Question_5/Question'
import QUESTION_6 from '../components/AccessibilityQuestions/Question_6/Question'
import QUESTION_7 from '../components/AccessibilityQuestions/Question_7/Question'
import QUESTION_8 from '../components/AccessibilityQuestions/Question_8/Question'
import QUESTION_9 from '../components/AccessibilityQuestions/Question_9/Question'
import QUESTION_10 from '../components/AccessibilityQuestions/Question_10/Question'
import QUESTION_11 from '../components/AccessibilityQuestions/Question_11/Question'
import QUESTION_12 from '../components/AccessibilityQuestions/Question_12/Question'
import QUESTION_13 from '../components/AccessibilityQuestions/Question_13/Question'
import QUESTION_14 from '../components/AccessibilityQuestions/Question_14/Question'
import QUESTION_15 from '../components/AccessibilityQuestions/Question_15/Question'
import QUESTION_16 from '../components/AccessibilityQuestions/Question_16/Question'

export const AccessibilityQuestions = [
	{
		id: 1,
		question: 'Что такое WCAG?',
		answer: <QUESTION_1 />,
	},
	{
		id: 2,
		question: 'Основные принципы доступности?',
		answer: <QUESTION_2 />,
	},
	{
		id: 3,
		question: 'Что такое скринридер?',
		answer: <QUESTION_3 />,
	},
	{
		id: 4,
		question: 'Уровни доступности?',
		answer: <QUESTION_4 />,
	},
	{
		id: 5,
		question: 'Как скрыть содержимое тэга от скринридеров?',
		answer: <QUESTION_5 />,
	},
	{
		id: 6,
		question: 'Как удалить семантику у элемента?',
		answer: <QUESTION_6 />,
	},
	{
		id: 7,
		question: 'Что такое ARIA роли в веб приложении?',
		answer: <QUESTION_7 />,
	},
	{
		id: 8,
		question: 'Для чего используется атрибут aria-roledescription?',
		answer: <QUESTION_8 />,
	},
	{
		id: 9,
		question:
			'Какие HTML атрибуты можно использовать для улучшения доступности?',
		answer: <QUESTION_9 />,
	},
	{
		id: 10,
		question: 'Назовите средства и методы тестирования доступности?',
		answer: <QUESTION_10 />,
	},
	{
		id: 11,
		question: 'Какие стандарты доступности следует учитывать при разработке?',
		answer: <QUESTION_11 />,
	},
	{
		id: 12,
		question: 'Разница между usability и accessibility?',
		answer: <QUESTION_12 />,
	},
	{
		id: 13,
		question: 'Что нужно учитывать при разработке доступного сайта?',
		answer: <QUESTION_13 />,
	},
	{
		id: 14,
		question:
			'Как структура заголовков (H1-H6) влияет на доступность? Как правильно их использовать для улучшения навигации и доступности контента?',
		answer: <QUESTION_14 />,
	},
	{
		id: 15,
		question:
			'Какие правила следует соблюдать при работе с цветом для обеспечения лучшей доступности?',
		answer: <QUESTION_15 />,
	},
	{
		id: 16,
		question:
			'Какие рекомендации существуют для работы с мультимедиа-контентом для обеспечения лучшей доступности?',
		answer: <QUESTION_16 />,
	},
]
