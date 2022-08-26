import React from "react";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Login from "./Component/ReduxLoginReg/Login"
import Registration from "./Component/ReduxLoginReg/Registration"
import Forgot from "./Component/ReduxLoginReg/Forgot";
import './App.css';

const App = () => {
    return (
        <>
            <Router>
                <Routes>
                    <Route  exact path="/" element={<Login/>}> </Route>
                    <Route exact path="/Registration" element={<Registration/>}> </Route>
                    <Route exact path="/Forgot" element={<Forgot/>}> </Route>
                </Routes>
            </Router>
        </>
    );
};
export default App;
