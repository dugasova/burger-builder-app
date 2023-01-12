import React from 'react';
import ReactDOM from 'react-dom/client';
import styled from 'styled-components';
import {Header, Main} from "./components";
import {Home, Orders, FAQ, Contacts, NotFound} from "./pages";
import './index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import { Contacts } from '@mui/icons-material';

const App = (props)=> {
    return(
    <AppWrapper classname="App">
        <BrowserRouter basename="burger-builder-app">
            <Header />
            <Routes>
                <Route id="1" path='/' element={<Home />} />
                <Route id="2" path='/orders' element={<Orders />} />
                <Route id="3" path='/contacts' element={<Contacts />} />
                <Route id="4" path='/faq' element={<FAQ />} />
                <Route id="5" path='*' element={<NotFound />} />
            </Routes>
         </BrowserRouter>
    </AppWrapper>
    );
};

const AppWrapper = styled.div({
    height: "100vh",
});

export default App;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
