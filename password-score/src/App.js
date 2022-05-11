import PasswordInput  from './components/PasswordInput';
import './App.css';
import Header from './components/Header';
import Nav from './components/Nav';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import ScoreRules from './components/ScoreRules';
import Redirect from './components/Redirect';

function App() {
  return (
    <BrowserRouter>
    <div className='App'>
      <Header />
      <Nav />
      <Routes>
        <Route path='/' element={<PasswordInput />}></Route>
        <Route path='/how-we-score' element={<ScoreRules />}></Route>
        <Route path='*' element={<Redirect />}></Route>
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
