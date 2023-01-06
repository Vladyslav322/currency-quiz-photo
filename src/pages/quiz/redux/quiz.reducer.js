import { QUIZ } from '../constants';
import { actionTypes } from './actionsType';

const initState = {
    data: QUIZ,
    totalScore: 0,
    currentQuestionIndex: 0,
};

function reducerQuiz(state = initState, action) {
    switch (action.type) {
        case actionTypes.addTotalScore: {
            return {
                ...state,
                totalScore: state.totalScore + 1,
            }
        }

        case actionTypes.changeQuestion: {
            return {
                ...state,
                currentQuestionIndex: state.currentQuestionIndex + 1,
            }
        }

        case actionTypes.takeQuizAgain: {
            return {
                ...state,
                totalScore: 0,
                currentQuestionIndex: 0,
            }
        }

        default: {
            return state;
        }
    }
}

export default reducerQuiz;
