import {BrowserRouter, Router, Route, Routes} from "react-router-dom";
import './App.css';
import Home from "./components/Home";
import 'bootstrap/dist/css/bootstrap.min.css';
import Create from "./components/Create";
import Update from "./components/Update";
import Infor from "./components/Infor";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Home/>}></Route>
                    <Route path='/create' element={<Create/>}></Route>
                    <Route path='/update/:id' element={<Update/>}></Route>
                    <Route path='/read/:id' element={<Infor/>}></Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
