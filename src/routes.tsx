import React from 'react'

import { BrowserRouter, Route, Routes as NavigationRoutes } from 'react-router-dom'

import Home from './pages/Home'
import UserDetails from './pages/UserDetails';

function Routes(){

    return (
        <BrowserRouter>
            <NavigationRoutes>
                <Route path="/" element={<Home />} />
                <Route path="/user" element={<UserDetails />} />
            </NavigationRoutes>
        </BrowserRouter>
    );
}

export default Routes