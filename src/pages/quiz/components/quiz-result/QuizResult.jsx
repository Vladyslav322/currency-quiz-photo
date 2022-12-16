import React from 'react';
import partyingFace from '../../../../assets/svg/partying-face.svg';
import cowboyHatFace from '../../../../assets/svg/cowboy-hat-face.svg';
import huggingFace from '../../../../assets/svg/hugging-face.svg';
import anguishedFace from '../../../../assets/svg/anguished-face.svg';
import explodingHead from '../../../../assets/svg/exploding-head.svg';
import classes from './QuizResult.module.scss';

const QuizResult = ({ amountOfCorrectAnswers, allQuestions, takeQuizAgainCallback }) => {
    const answersPercentage = Math.floor((amountOfCorrectAnswers * 100) / allQuestions);

    const getEmoji = () => {
        switch (true) {
            case answersPercentage === 100:
                return partyingFace;
            case answersPercentage >= 80:
                return cowboyHatFace;
            case answersPercentage >= 50:
                return huggingFace;
            case answersPercentage >= 30:
                return anguishedFace;
            default:
                return explodingHead;
        }
    };

    return (
        <div className={ classes.container }>
            <span className={ classes.label }>You answered { answersPercentage }% of the questions on the quiz correctly.</span>

            <img className={ classes.emoji } src={ getEmoji() } alt="Emoji"/>

            <button className={ classes.takeAgainBtn } onClick={ takeQuizAgainCallback }>Take the quiz again</button>
        </div>
    );
};

export default QuizResult;
