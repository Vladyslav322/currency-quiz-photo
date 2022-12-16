import { v4 as uuidv4 } from 'uuid';

export const QUIZ = Object.freeze([
    {
        questionId: uuidv4(),
        question: 'Who was the first president of Ukraine? @Kravchuk',
        answers: [
            {
                answerId: uuidv4(),
                text: 'Kuchma',
            },
            {
                answerId: uuidv4(),
                text: 'Yushchenko',
            },
            {
                answerId: uuidv4(),
                text: 'Kravchuk',
                isCorrect: true,
            },
            {
                answerId: uuidv4(),
                text: 'Yanukovych',
            },
        ],
    },
    {
        questionId: uuidv4(),
        question: 'Which wheel does not spin in a car when it is driving? @Spare wheel',
        answers: [
            {
                answerId: uuidv4(),
                text: 'Front wheel',
            },
            {
                answerId: uuidv4(),
                text: 'Back wheel',
            },
            {
                answerId: uuidv4(),
                text: 'All wheels rotate',
            },
            {
                answerId: uuidv4(),
                text: 'Spare wheel',
                isCorrect: true,
            },
        ],
    },
    {
        questionId: uuidv4(),
        question: 'Which modern computer prototype was soldered in a garage? @Apple',
        answers: [
            {
                answerId: uuidv4(),
                text: 'Asus',
            },
            {
                answerId: uuidv4(),
                text: 'Lenovo',
            },
            {
                answerId: uuidv4(),
                text: 'Apple',
                isCorrect: true,
            },
            {
                answerId: uuidv4(),
                text: 'MSI',
            },
        ],
    },
    {
        questionId: uuidv4(),
        question: 'What can be considered one of the most polluted places in the office, house, where there is a computer? @Keyboard',
        answers: [
            {
                answerId: uuidv4(),
                text: 'Desk',
            },
            {
                answerId: uuidv4(),
                text: 'Mouse',
            },
            {
                answerId: uuidv4(),
                text: 'Keyboard',
                isCorrect: true,
            },
            {
                answerId: uuidv4(),
                text: 'Monitor',
            },
        ],
    },
    {
        questionId: uuidv4(),
        question: 'What material was the first "mouse" made of? @Wood',
        answers: [
            {
                answerId: uuidv4(),
                text: 'Iron',
            },
            {
                answerId: uuidv4(),
                text: 'Wood',
                isCorrect: true,
            },
            {
                answerId: uuidv4(),
                text: 'Plastic',
            },
            {
                answerId: uuidv4(),
                text: 'Glass',
            },
        ],
    },
    {
        questionId: uuidv4(),
        question: 'What was the capacity of the first hard disk? @4-5 Mb',
        answers: [
            {
                answerId: uuidv4(),
                text: '4-5 Mb',
                isCorrect: true,
            },
            {
                answerId: uuidv4(),
                text: '10-12 Mb',
            },
            {
                answerId: uuidv4(),
                text: '2-3 Mb',
            },
            {
                answerId: uuidv4(),
                text: '6-8 Mb',
            },
        ],
    },
    {
        questionId: uuidv4(),
        question: 'What did the keyboard of the first computer look like? @It didn\'t have a keyboard.',
        answers: [
            {
                answerId: uuidv4(),
                text: 'It didn\'t have a keyboard',
                isCorrect: true,
            },
            {
                answerId: uuidv4(),
                text: 'Made of wood',
            },
            {
                answerId: uuidv4(),
                text: 'Made of glass',
            },
            {
                answerId: uuidv4(),
                text: 'Made of iron',
            },
        ],
    },
    {
        questionId: uuidv4(),
        question: 'Which of the planets is closest to Earth? @Venus',
        answers: [
            {
                answerId: uuidv4(),
                text: 'Mars',
            },
            {
                answerId: uuidv4(),
                text: 'Venus',
                isCorrect: true,
            },
            {
                answerId: uuidv4(),
                text: 'Mercury',
            },
            {
                answerId: uuidv4(),
                text: 'Jupiter',
            },
        ],
    },
    {
        questionId: uuidv4(),
        question: 'When did the Second World War begin? @1939',
        answers: [
            {
                answerId: uuidv4(),
                text: 'It never was',
            },
            {
                answerId: uuidv4(),
                text: '1941',
            },
            {
                answerId: uuidv4(),
                text: '1939',
                isCorrect: true,
            },
            {
                answerId: uuidv4(),
                text: '1944',
            },
        ],
    },
]);
