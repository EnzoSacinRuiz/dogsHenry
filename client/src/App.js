import logo from './logo.svg';
import './App.css';

import Landing from './views/landing/landing.component'



function App() {
  return (
    <BrowserRouter>
        <Routes>
          {/* <Route exact path="/home" element={<Home/>}/>
          <Route path="/home/:id" element={<Detail/>}/>
          <Route path="/create" element={<Create/>}/> */}
          <Route path="/" element={<Landing/>}/>
        </Routes> 
     </BrowserRouter>
    
  );
}

export default App;
