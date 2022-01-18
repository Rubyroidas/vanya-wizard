import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {HomePage} from './pages/HomePage';
import {WizardPage} from './pages/WizardPage';

import './App.scss';

export const App = () => (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path="/wizard/:step" element={<WizardPage/>}/>
        </Routes>
    </BrowserRouter>
);
