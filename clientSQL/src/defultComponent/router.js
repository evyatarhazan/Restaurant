import React from 'react';
import { BrowserRouter, Router,Route, Routes } from 'react-router-dom';

export default function RouterA() {
    return (
        <BrowserRouter>
            <Router>
                <Routes>
                    <Route path='/' />
                    <Route path='/menu' />
                </Routes>
            </Router>
        </BrowserRouter>
    )
}