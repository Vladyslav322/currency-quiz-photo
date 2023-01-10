import { Route, Routes } from 'react-router-dom';
import { CurrencyExchange, PhotoGramm, QuizApp } from './pages'
import { NavigationBar } from './shared-components';
import { ROUTES } from './constants';

const App = () => {
    return (
        <div className="App">
            <NavigationBar/>

            <Routes>
                <Route exact path="/" element={ <CurrencyExchange/> }/>
                <Route exact path={ROUTES.currencyExchange} element={ <CurrencyExchange/> }/>
                <Route exact path={ROUTES.quiz} element={ <QuizApp/> }/>
                <Route exact path={ROUTES.photogramm} element={ <PhotoGramm/> }/>
            </Routes>
        </div>
    );
}

export default App;
