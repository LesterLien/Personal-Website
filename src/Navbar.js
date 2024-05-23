import React from "react";
import {Routes, Route} from 'react-router-dom';
import App from "./App";


function Navbar(){
    return(
        <nav className= "nav">
            <Routes>
                <Route path="/App" element={<App/>}/>
            </Routes>
        </nav>
    );
}

export default Navbar;