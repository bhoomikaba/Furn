import "./App.css";
import { BrowserRouter as Router,  Route, Routes } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Component/Home';
import About from './Component/About';
import NavBar from "./Navbar";
import Product from './Component/Product';
import Contact from "./Component/Contact";
import Foot from './Component/Foot';
import Sofa from './Shop/Sofa';
import Bed from './Shop/Bed';
import Chair from './Shop/Chair';
import Table from './Shop/Table';
import Lamp from './Shop/Lamp';
import Page from './404';



function App() {
  return (
    <>
      <Router>
      <NavBar />
        <Routes>
           <Route path='/' element={<Home/>}/>
           <Route path='/About' element={<About/>}/>
           <Route path='/Product' element={<Product/>}/>
                       <Route path='/Sofa' element={<Sofa/>}/>  
                       <Route path='/Bed' element={<Bed/>}/>  
                       <Route path='/Chair' element={<Chair/>}/>  
                       <Route path='/Table' element={<Table/>}/>  
                       <Route path='/Lamp' element={<Lamp/>}/>
           <Route path='/Contact' element={<Contact/>}/> 
           <Route path="*" element={<Page />}/>
         </Routes>
         <Foot/>
      </Router>
       
  </>
  );
}

export default App;
