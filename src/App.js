import './App.css';
import MainPage from './components/mainPage/MainPage';
import Nav from './components/nav/Nav';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NewUser from './components/newUser/NewUser';
import NewCategory from './components/newCategory/NewCategory';
import Lithuania from './components/UsersInfo/countrys/Lithuania';
import Poland from './components/UsersInfo/countrys/Poland';
import Estonia from './components/UsersInfo/countrys/Estonia';

function App() {
  return (
    <>
      <Router>
        <Header />
        <Nav />
        <Routes>
          <Route>
            <Route exact path='/' element={<MainPage />} />
            <Route exact path='/newUser' element={<NewUser />} />
            <Route exact path='/newCategory' element={<NewCategory />} />
            <Route exact path='/lithuania' element={<Lithuania />} />
            <Route exact path='/poland' element={<Poland />} />
            <Route exact path='/estonia' element={<Estonia />} />
          </Route>
        </Routes>
        <Footer />
      </Router >
    </>
  );
}

export default App;
