import styled from "styled-components";
import Components from './pages/Components.jsx';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Detail from './pages/Detail.jsx'
import NotFound from "./pages/NotFound";


function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Components />}/>
    <Route path="/article/:articleId" element={<Detail />}/>
    <Route path="*" element = {<NotFound />} />
    </Routes>
    </BrowserRouter>
  )
}

export default App;