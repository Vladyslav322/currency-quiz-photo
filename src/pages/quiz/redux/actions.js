import { actionTypes } from './actions-type';

export const changeQuestion = () => ({
    type: actionTypes.changeQuestion,
});

export const takeQuizAgain = () => ({
    type: actionTypes.takeQuizAgain,
});

export const addTotalScore = () => ({
    type: actionTypes.addTotalScore,
});
