//import logo from './logo.svg';
import './App.css';
import Landing from './views/landing/landing.component';
import Detail from './views/detail/detail.component';
import Home from './views/home/home.component';
import Create from './views/create/create.component';


import { PaletteProvider } from './paletteContext';



import {Route,BrowserRouter,Routes} from "react-router-dom"

function App() {
  return (
    <PaletteProvider>
    <BrowserRouter>
    <Routes>
      <Route exact path="/home" element={<Home/>}/>
      <Route path="/home/:id" element={<Detail/>}/>
      <Route path="/create" element={<Create/>}/>
      <Route path="/" element={<Landing/>}/>
    </Routes> 
 </BrowserRouter>
 </PaletteProvider>
  );
}

export default App;
