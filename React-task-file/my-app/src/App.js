import{Routes,Route} from "react-router-dom";
import Navgaition from "./Component/Navgaition";
import ComponentA from "./Component/ComponentA";
import ComponentB from "./Component/ComponentB";
import ComponentC from "./Component/ComponentC";
import { useState } from "react";
import Client from "./Component/Client";
import ParamData from "./Component/ParamData";
import RangeData from "./Component/RangeData";
import NavBar from "./Component/NavBar";
import Hero from "./Component/Hero";
import HookEffectFunction from "./Component/HookEffectFunction";
import Home from "./Component/Home";

function App() {

  const[currentPage,setCurrentPage]=useState('ComponentA')

  const navigate=(page)=>{
    setCurrentPage(page)
  }

  let pageContent

  if(currentPage==='ComponentA'){
    pageContent=<ComponentA navigate={navigate}/>
  }else if(currentPage==='ComponentB'){
    pageContent=<ComponentB navigate={navigate}/>
  }else if(currentPage==='ComponentC'){
    pageContent=<ComponentC navigate={navigate}/>
  }
  return (
    <div>
      {/* {pageContent} */}
      {/* <NavBar/>
      <Hero/>
      <RangeData/> */}
      <Home/>
    </div>
  );
}

export default App;
