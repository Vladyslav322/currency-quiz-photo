import React, { Fragment, useEffect, useState } from 'react';
import Timer from '../timer/Timer';
import classes from './QuizHeader.module.scss';

const TIMEOUT_DURATION = 10;

const QuizHeader = ({ currentQuestion, allQuestions, timeoutCallback }) => {
    const [currentNumber, setCurrentNumber] = useState();

    useEffect(() => setCurrentNumber(currentQuestion), [currentQuestion]);

    return (
        <Fragment>
            <div className={ classes.timerContainer }>
                <Timer seconds={ TIMEOUT_DURATION } timeoutCallback={ timeoutCallback } shouldRerender={ {} }/>
            </div>

            <h1 className={ classes.counter }>
                <span className={ classes.numberOfQuestion }>{ currentNumber }</span>
                &nbsp;of&nbsp;
                <span className={ classes.numberOfQuestion }>{ allQuestions }</span>
            </h1>
        </Fragment>
    );
};

export default QuizHeader;
