// // import BodyCompoent from './Component/BodyCompoent';
// import Client from './Component/Client';
// import FavouritePojects from './Component/FavouritePojects';
// import Hero from './Component/Hero';
// import NavBar from './Component/NavBar';
// import Partner from './Component/Partner';
// import RangeData from './Component/RangeData';

import ParamData from "./Component/ParamData";
import ParamHome from "./Component/ParamHome";

// import Counter from "./Component/Counter";
// import Dynamic from "./Component/Dynamic";
// import ReactHook from "./Component/ReactHook";
import{Routes,Route} from "react-router-dom";

function App() {
  return (
    <div>
      {/* <NavBar/>
      <Hero/>
      <RangeData/>
      <FavouritePojects/> */}
      {/* <Partner/>
      <Client/> */}
      {/* <Dynamic/> */}
      {/* <ReactHook/> */}
      {/* <Counter/> */}
      <Routes>
        <Route path="/" element={<ParamHome/>}/>
        <Route path="/student/:id" element={<ParamData/>}/>
      </Routes>
    </div>
  );
}

export default App;
