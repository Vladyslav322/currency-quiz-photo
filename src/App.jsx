import './App.scss';
import { NavLink, Route, Routes } from 'react-router-dom';
import { CurrencyExchange, PhotoGramm, QuizApp, HomePage } from './pages'
import { ROUTES } from './constants/router';

const App = () => {
    return (
        <div className="App">
            <nav className="nav__container">
                <ul className="nav__items">
                    <li className="nav__item">
                        <NavLink to="/">Home Page</NavLink>
                    </li>
                    <li className="nav__item">
                        <NavLink to={{ pathname: ROUTES.currencyExchange }}>Currency</NavLink>
                    </li>
                    <li className="nav__item">
                        <NavLink to={{ pathname: ROUTES.quiz }}>Quiz</NavLink>
                    </li>
                    <li className="nav__item">
                        <NavLink to={{ pathname: ROUTES.photogramm }}>PhotoGramm</NavLink>
                    </li>
                </ul>
            </nav>

            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path={ ROUTES.currencyExchange } element={<CurrencyExchange/>}/>
                <Route path={ ROUTES.quiz } element={<QuizApp/>}/>
                <Route path={ ROUTES.photogramm } element={<PhotoGramm/>}/>
            </Routes>
        </div>
    );
}

export default App;
