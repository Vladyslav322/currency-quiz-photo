import { Route, Routes } from 'react-router-dom';
import { CurrencyExchange, PhotoGramm, QuizApp } from './pages'
import { NavigationBar } from './shared-components';

const App = () => {
    return (
        <div className="App">
            <NavigationBar/>

            <Routes>
                <Route exact path="/" element={ <CurrencyExchange/> }/>
                <Route exact path="/CurrencyExchange" element={ <CurrencyExchange/> }/>
                <Route exact path="/QuizApp" element={ <QuizApp/> }/>
                <Route exact path="/PhotoGramm" element={ <PhotoGramm/> }/>
            </Routes>
        </div>
    );
}

export default App;
