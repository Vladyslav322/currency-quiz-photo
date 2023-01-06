import React, { useEffect, useState } from 'react';
import classes from './CurrencyExchange.module.scss';
import CurrencySelect from '../currency-select/CurrencySelect';
import CurrencyInput from '../currency-input/CurrencyInput';
import CustomButton from '../currency-button/CurrencyButton';
import { buildExchangeLabel, buildRateKey } from '../../utils';
import { useDispatch, useSelector } from 'react-redux';
import { changeCurrencyFrom, changeCurrencyFTo, reverseCurrencies } from '../../redux/actions';
import {
    allCurrenciesSelector,
    currencyFromSelector,
    currencyRatesSelector,
    currencyToSelector
} from '../../redux/selectors';

const CurrencyExchange = () => {
    const dispatch = useDispatch();

    const allCurrencies = useSelector(allCurrenciesSelector);
    const currencyRates = useSelector(currencyRatesSelector);

    const currencyFrom = useSelector(currencyFromSelector);
    const currencyTo = useSelector(currencyToSelector);

    const [labelFrom, setLabelFrom] = useState();
    const [labelTo, setLabelTo] = useState();

    const [amountFrom, setAmountFrom] = useState();
    const [amountTo, setAmountTo] = useState();

    const handleReverseCurrencies = () => dispatch(reverseCurrencies());

    const currencyFromChange = (amount) => {
        setAmountFrom(amount);

        if (!amount) {
            setAmountTo('');
        } else {
            const rate = currencyFrom === currencyTo ? 1 : currencyRates[buildRateKey(currencyFrom, currencyTo)];
            const amountTo = amount * rate;

            setAmountTo(amountTo);
        }
    };

    const currencyToChange = (amount) => {
        setAmountTo(amount);

        if (!amount) {
            setAmountFrom('');
        } else {
            const rate = currencyRates[buildRateKey(currencyTo, currencyFrom)];
            const amountFrom = amount * rate;

            setAmountFrom(amountFrom);
        }
    };

    const setCurrencyFrom = (currency) => dispatch(changeCurrencyFrom(currency));
    const setCurrencyTo = (currency) => dispatch(changeCurrencyFTo(currency));

    useEffect(() => {
        setLabelFrom(buildExchangeLabel(currencyFrom, currencyTo));
        setLabelTo(buildExchangeLabel(currencyTo, currencyFrom));

        currencyFromChange(amountFrom);
    }, [currencyFrom, currencyTo]);

    return (
        <div className={ classes.container }>
            <div className={ classes.currencyExchange }>
                <CurrencySelect
                    items={ allCurrencies }
                    defaultSelectedValue={ currencyFrom }
                    itemClickCallback={ setCurrencyFrom.bind(this) }
                />

                <CurrencyInput
                    label={ labelFrom }
                    currentValue={ amountFrom }
                    valueChangeCallback={ currencyFromChange }
                />
            </div>

            <div className={ classes.reverseBtn }>
                <CustomButton clickCallback={ handleReverseCurrencies }/>
            </div>

            <div className={ classes.currencyExchange }>
                <CurrencySelect
                    items={ allCurrencies }
                    defaultSelectedValue={ currencyTo }
                    itemClickCallback={ setCurrencyTo.bind(this) }
                />

                <CurrencyInput
                    label={ labelTo }
                    currentValue={ amountTo }
                    valueChangeCallback={ currencyToChange }
                />
            </div>
        </div>
    );
};

export default CurrencyExchange;
