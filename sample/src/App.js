import './App.css';
import About from './Component/About';
import Home from './Component/Home';
import NavBar from './Component/NavBar';
import { Routes,Route } from 'react-router-dom';
import Deital from './Component/deital';
import Memo from './Component/Memo';
import CallBack from './Component/CallBack';
import HomePage from './Component/HomePage';
import Reducer from './Component/Reducer';
import LoadData from './Component/LoadData';
import PersonPage from './page/PersonPage';
import Header from './page/Header';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Header/>
      <PersonPage/>
      {/* <LoadData/> */}
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/Deital/:id' element={<Deital/>}/>
        <Route path='/context' element={<HomePage/>}/>
        <Route path='/reducer' element={<Reducer/>}/>
        <Route path='/callBack' element={<CallBack/>}/>
        <Route path='/memo' element={<Memo/>}/>
        <Route path='/contextApi' element={<LoadData/>}/>
      </Routes>
    </div>
  );
}

export default App;
