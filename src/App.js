import './App.css';
import MainPage from './components/mainPage/MainPage';
import Nav from './components/nav/Nav';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NewUser from './components/newUser/NewUser';
import NewCategory from './components/newCategory/NewCategory';
import UsersInfo from './components/UsersInfo/districts/UsersInfo';

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
            <Route exact path='/usersInfo' element={<UsersInfo />} />
          </Route>
        </Routes>
        <Footer />
      </Router >
    </>
  );
}

export default App;
