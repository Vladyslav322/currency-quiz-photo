import React, { Fragment } from 'react';
import classes from './Quiz.module.scss';
import QuizHeader from '../quiz-header/QuizHeader';
import QuizBody from '../quiz-body/QuizBody';
import QuizResult from '../quiz-result/QuizResult';
import { useDispatch, useSelector } from 'react-redux';
import { addTotalScore, changeQuestion, takeQuizAgain } from '../../redux/actionsQuiz';
import { currentQuestionSelector, quizSelector, totalScoreSelector } from '../../redux/selectors';

const Quiz = () => {
    const quiz = useSelector(quizSelector);
    const totalScore = useSelector(totalScoreSelector);
    const currentQuestionIndex = useSelector(currentQuestionSelector);
    const dispatch = useDispatch();

    const nextQuestion = () => dispatch(changeQuestion());

    const timeout = () => nextQuestion();

    const selectAnswer = (answer) => {
        if (answer.isCorrect) {
            dispatch(addTotalScore());
        }

        nextQuestion();
    };

    const handlerTakeQuizAgain = () => dispatch(takeQuizAgain());

    return (
        <div className={ classes.container }>
            {
                currentQuestionIndex === quiz.length ? (
                    <QuizResult
                        amountOfCorrectAnswers={ totalScore }
                        allQuestions={ quiz.length }
                        takeQuizAgainCallback={ handlerTakeQuizAgain }
                    />
                ) : (
                    <Fragment>
                        <QuizHeader
                            currentQuestion={ currentQuestionIndex + 1 }
                            allQuestions={ quiz.length }
                            timeoutCallback={ timeout }
                        />

                        <div className={ classes.quizBody }>
                            <QuizBody
                                question={ quiz[currentQuestionIndex].question }
                                answers={ quiz[currentQuestionIndex].answers }
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
