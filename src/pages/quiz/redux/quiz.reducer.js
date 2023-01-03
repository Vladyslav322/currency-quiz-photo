import { QUIZ } from '../constants';

const initState = {
    quiz: QUIZ,
    totalScore: 0,
    currentQuestionIndex: 0,
};

function reducer(state = initState, action) {
    switch (action.type) {
        case 'ADD_TOTAL_SCORE': {
            return {
                ...state,
                totalScore: state.totalScore + 1,
            }
        }

        case 'CHANGE_QUESTION': {
            return {
                ...state,
                currentQuestionIndex: state.currentQuestionIndex + 1,
            }
        }

        case 'TAKE_QUIZ_AGAIN': {
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

export default reducer;
