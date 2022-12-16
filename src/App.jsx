import './App.scss';
import { Navigate, Route, Routes } from 'react-router-dom';
import { CurrencyExchange, PhotoGramm, QuizApp } from './pages'
import { ROUTES } from './constants/router';
import NavigationBar from './shared-components/NavigationBar';

const App = () => {
    return (
        <div className="App">
            <NavigationBar />

            <Routes>
                <Route path="/" element={<Navigate to={ROUTES.currencyExchange}/>}/>
                <Route path={ROUTES.currencyExchange} element={<CurrencyExchange/>}/>
                <Route path={ROUTES.quiz} element={<QuizApp/>}/>
                <Route path={ROUTES.photogramm} element={<PhotoGramm/>}/>
            </Routes>
        </div>
    );
}

export default App;
