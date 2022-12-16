import React from 'react';
import classes from './Answer.module.scss';

const Answer = ({ text, selectCallback }) => {
    return (
        <button className={ classes.answer } onClick={ selectCallback }>
            { text }
        </button>
    );
};

export default Answer;
