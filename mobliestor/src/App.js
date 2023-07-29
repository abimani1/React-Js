// import logo from './logo.svg';
import './App.css';
import {Routes,Route} from 'react-router-dom';
import Home from './Home';
import About from './About';
import Error from './Error';
import ComponentA from './Component';

function App() {
  return (
    <div className="App">
      {/* <Home/> */}
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}>
            <Route path='/about/test' element={<ComponentA/>}/>
          </Route>
        <Route path='/*' element={<Error/>}/>
      </Routes>
    </div>
  );
}

export default App;
