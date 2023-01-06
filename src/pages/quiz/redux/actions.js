import { actionTypes } from './actionsType';

export const changeQuestion = () => ({
    type: actionTypes.changeQuestion,
});

export const takeQuizAgain = () => ({
    type: actionTypes.takeQuizAgain,
});

export const addTotalScore = () => ({
    type: actionTypes.addTotalScore,
});
