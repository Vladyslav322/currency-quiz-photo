import React, { Fragment } from 'react';
import { NavLink } from 'react-router-dom';
import classes from './NavigationBar.module.scss';

const NavigationBar = () => {
    return (
        <Fragment>
            <nav className={classes.nav__container}>
                <ul className={classes.nav__items}>
                    <li className={classes.nav__item}>
                        <NavLink to="/CurrencyExchange">Currency</NavLink>
                    </li>
                    <li className={classes.nav__item}>
                        <NavLink to="/QuizApp">Quiz</NavLink>
                    </li>
                    <li className={classes.nav__item}>
                        <NavLink to="/PhotoGramm">PhotoGramm</NavLink>
                    </li>
                </ul>
            </nav>
        </Fragment>
    );
};

export default NavigationBar;
