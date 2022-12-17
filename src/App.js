import './App.scss';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import { BrowserRouter,Routes, Route } from 'react-router-dom';
import Base from './Components/Layout/Base';
import Home from "./Pages/Home"
import NoteState from './Components/Elements/NoteState';
import About from './Pages/About';
function App() {
  return (
   <>
   <NoteState>
   <BrowserRouter>
   <Base>
   <Routes>
    <Route index path='/' element={<Home/>} />
    <Route  path='/about' element={<About/>} />

   </Routes>
   </Base>
   </BrowserRouter>
   </NoteState>
   </>
  );
}

export default App;
