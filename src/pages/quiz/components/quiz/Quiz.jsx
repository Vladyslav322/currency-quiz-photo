import React, { Fragment, useState } from 'react';
import classes from './Quiz.module.scss';
import QuizHeader from '../quiz-header/QuizHeader';
import QuizBody from '../quiz-body/QuizBody';
import { QUIZ } from '../../constants';
import QuizResult from '../quiz-result/QuizResult';

const Quiz = () => {
    const [totalScore, setTotalScore] = useState(0);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

    const nextQuestion = () => setCurrentQuestionIndex(currentQuestionIndex + 1);

    const timeout = () => nextQuestion();

    const selectAnswer = (answer) => {
        if (answer.isCorrect) {
            setTotalScore((previousValue) => previousValue + 1);
        }

        nextQuestion();
    };

    const takeQuizAgain = () => {
        setTotalScore(0);
        setCurrentQuestionIndex(0);
    };

    return (
        <div className={ classes.container }>
            {
                currentQuestionIndex === QUIZ.length ? (
                    <QuizResult
                        amountOfCorrectAnswers={ totalScore }
                        allQuestions={ QUIZ.length }
                        takeQuizAgainCallback={ takeQuizAgain }
                    />
                ) : (
                    <Fragment>
                        <QuizHeader
                            currentQuestion={ currentQuestionIndex + 1 }
                            allQuestions={ QUIZ.length }
                            timeoutCallback={ timeout }
                        />

                        <div className={ classes.quizBody }>
                            <QuizBody
                                question={ QUIZ[currentQuestionIndex].question }
                                answers={ QUIZ[currentQuestionIndex].answers }
                                selectAnswerCallback={ selectAnswer }
                            />
                        </div>
                    </Fragment>
                )
            }
        </div>
    );
};

export default Quiz;
