import React from 'react'
//import ReactDOM from 'react-dom'
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import HomePage from '../../src/Pages/homePage'
import SignInPage from '../../src/Pages/signInPage'
import UserPage from '../../src/Pages/userPage'
import './App.css'
import { Provider } from 'react-redux';
import store from './store';
// import MainLayout from './Components/MainLayout'
// import NotFound from './Pages/NotFound'
const root = createRoot(document.getElementById('root'))
root.render(
    <Provider store={store}>
        <React.StrictMode>
            <Router>
                <Routes>
                    <Route path="/" element={<HomePage />}/>
                    <Route path="/login" element={<SignInPage />}/>
                    <Route path="/user" element={<UserPage/>}/>
                    {/* <Route path="*" element={<MainLayout><NotFound /></MainLayout>} /> */}
                </Routes>
            </Router>
        </React.StrictMode>
    </Provider>,
)