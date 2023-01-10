import { Route, Routes } from 'react-router-dom';
import { CurrencyExchange, PhotoGramm, QuizApp } from './pages'
import { NavigationBar } from './shared-components';

const App = () => {
    return (
        <div className="App">
            <NavigationBar/>

            <Routes>
                <Route extra path="/" element={ <CurrencyExchange/> }/>
                <Route path="/currencyExchange"  element={ <CurrencyExchange/> }/>
                <Route path="/quiz" element={ <QuizApp/> }/>
                <Route path="/photogramm" element={ <PhotoGramm/> }/>
            </Routes>
        </div>
    );
}

export default App;
