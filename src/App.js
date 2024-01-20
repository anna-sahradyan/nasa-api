import React from 'react';
import {Route, Routes} from "react-router";
import Home from "./components/home/Home";
import {Toaster} from "react-hot-toast";

const App = () => {

    return (
        <>
            <Toaster/>
            <Routes>
                <Route path={"/"} element={<Home/>}/>
            </Routes>
        </>
    );
};

export default App;
