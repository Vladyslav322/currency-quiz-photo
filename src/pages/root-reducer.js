import reducerQuiz from './quiz/redux/quiz.reducer';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import reducerPhotogramm from './photogramm/redux/photogramm.reducer';
import reducerCurrency from './currency-exchange/redux/currency.reducer';

const rootReducer = combineReducers({
    quiz: reducerQuiz,
    photogramm: reducerPhotogramm,
    currencyExchange: reducerCurrency,
});

export const store = configureStore({
    reducer: rootReducer,
});
