import { CURRENCIES, CURRENCY_RATES } from '../constants';
import { actionType } from './actionsType';

const initState = {
    currencies: CURRENCIES,
    currencyRates: CURRENCY_RATES,
    currencyFrom: CURRENCIES.uah,
    currencyTo: CURRENCIES.usd,
};

function reducerCurrency(state = initState, action) {
    switch (action.type) {
        case actionType.reverseCurrencies: {
            const to = state.currencyTo;
            const from = state.currencyFrom;

            return {
                ...state,
                currencyFrom: to,
                currencyTo: from,
            }
        }
        case actionType.changeCurrenciesFrom: {
            return {
                ...state,
                currencyFrom: action.currency,
            };
        }
        case actionType.changeCurrenciesTo: {
            return {
                ...state,
                currencyTo: action.currency,
            };
        }
        default:
            return state;
    }
}

export default reducerCurrency;
