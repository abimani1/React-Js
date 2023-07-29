import './App.css';
import About from './Component/About';
import Home from './Component/Home';
import NavBar from './Component/NavBar';
import { Routes,Route } from 'react-router-dom';
import Deital from './Component/deital';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/Deital/:id' element={<Deital/>}/>
      </Routes>
    </div>
  );
}

export default App;
