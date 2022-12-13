import './App.scss';
import { NavLink, Route, Routes } from 'react-router-dom';
import { Currency, Quiz, PhotoGramm } from './components'

function App() {
  return (
    <div className="App">
        <nav className="nav__container">
            <ul className="nav__items">
                {/*<li className="nav__item">*/}
                {/*    <NavLink to={{pathname: '/home'}}>Home Page</NavLink>*/}
                {/*</li>*/}
                <li className="nav__item">
                    <NavLink to={{pathname: '/currency'}}>Currency</NavLink>
                </li>
                <li className="nav__item">
                    <NavLink to={{pathname: '/quiz'}}>Quiz</NavLink>
                </li>
                <li className="nav__item">
                    <NavLink to={{pathname: '/photoGramm'}}>PhotoGramm</NavLink>
                </li>
            </ul>
        </nav>

      <Routes>
        {/*<Route path="/home" element={<Home />}/>*/}
        <Route path="/currency" element={<Currency />}/>
        <Route path="/quiz" element={<Quiz />}/>
        <Route path="/photoGramm" element={<PhotoGramm />}/>
      </Routes>
    </div>
  );
}

export default App;
