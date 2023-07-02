import styled from "styled-components";
import Components from './pages/Components.jsx';
import {BrowserRouter, Routes, Route} from "react-router-dom";



function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Components />}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App;