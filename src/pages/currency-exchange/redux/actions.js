import { actionType } from './actions-type';

export const reverseCurrencies = () => ({
    type: actionType.reverseCurrencies,
});

export const changeCurrencyFrom = (currency) => ({
    type: actionType.changeCurrenciesFrom,
    currency,
});

export const changeCurrencyFTo = (currency) => ({
    type: actionType.changeCurrenciesTo,
    currency,
});
