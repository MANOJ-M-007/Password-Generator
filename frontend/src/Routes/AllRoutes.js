import React from 'react'
import {
    BrowserRouter,
    Route,
    Routes,
} from "react-router-dom";
import Home from '../Pages/Home';
import LoginPage from '../Pages/LoginPage';
import RegisterPage from '../Pages/RegisterPage';
const AllRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/login' element = {<LoginPage/>}/>
                <Route path='/register' element = {<RegisterPage/>}/>

            </Routes>
        </BrowserRouter>
    )
}

export default AllRoutes
